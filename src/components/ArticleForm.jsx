import React, { Component } from 'react';
import { connect } from 'react-redux';
import FroalaEditor from 'react-froala-wysiwyg';
import IdleTimer from 'react-idle-timer';
import { Link } from 'react-router-dom';
import {
  FormGroup,
  Input,
  Label,
  Spinner
} from 'reactstrap';
import * as articleActions from '../actions';
import TagsModal from './TagsModal';
import uploadImg from '../assets/images/art-image.png';

class ArticleForm extends Component {
    state = {
      title: '',
      image: null,
      imagePreview: null,
      model: '',
      tagList: '',
      hasChanges: false,
      published: false,
      imageChanged: false
    };

    componentDidMount() {
      localStorage.removeItem('slug');
    }

  onChangeHandler = ({ target: { value } }) => {
    this.setState({ title: value, hasChanges: true });
  }

  handleModelChange = (model) => {
    this.setState({ model, hasChanges: true });
  }

  imageHandler = ({ target: { files } }) => {
    this.setState({
      image: files[0],
      imagePreview: URL.createObjectURL(files[0]),
      imageChanged: true,
      hasChanges: true
    });
  }

  saveArticle = () => {
    const { props: { createArticle } } = this;
    const {
      title, hasChanges, model, tagList, image, published, imageChanged
    } = this.state;
    if (title && model && hasChanges) {
      const plainText = model.split('<p>').join('').split('</p>').join(' ');
      const description = `${plainText.slice(0, 50)}...`;
      const articleObject = {
        title,
        body: model,
        description,
        tagList: tagList.length ? [...new Set(tagList)] : ['General'],
        image,
        currentSlug: localStorage.getItem('slug') || null,
        imageChanged
      };
      if (published) articleObject.published = published;
      this.setState({ hasChanges: false, imageChanged: false });
      createArticle(articleObject);
    }
  }

  publishHandler = (tags) => {
    this.setState({
      published: true,
      tagList: tags,
      hasChanges: true
    });
    this.saveArticle();
  }

  render() {
    const {
      model, title, imagePreview
    } = this.state;
    const { props: { article: { isLoading, saved, published } } } = this;
    const articleSlug = localStorage.getItem('slug') || null;
    return (
      <div className='mb-5 mt-5'>
        {saved && (
        <div className='p-1 rounded text-center text-info display-5'>
          Saved.
        </div>
        )}
        {published && (
          <div className='p-1 rounded text-center text-info display-5'>
            Your article has been published. Click
            {' '}
            <Link to={`/article/${articleSlug}`}> HERE </Link>
            {' '}
to view it.
          </div>
        )}
        <IdleTimer
          startOnMount={false}
          onIdle={this.saveArticle}
          timeout={2500}
        />
        <FormGroup>
          {isLoading && (
            <div className='text-center text-info'>
              <Spinner color='primary' />
              {' '}
            Saving...
            </div>
          )}
          <Input
            type='text'
            placeholder='Title goes here'
            value={title}
            minLength='8'
            maxLength='75'
            className='mt-3 border-0 shadow-none bold-text form-control-lg'
            onChange={this.onChangeHandler}
            required
          />
          <Label htmlFor='file' className='artlabel'>
            {' '}
            <img src={uploadImg} alt='upload' />
            <Input
              type='file'
              accept='image/*'
              name='image'
              id='file'
              onChange={this.imageHandler}
              className='artimage'
            />
          </Label>
          Upload Image
          {' '}
          {imagePreview ? <img className='mx-auto d-block .img-fluid preview' src={imagePreview} alt='preview' /> : ''}
        </FormGroup>
        <FroalaEditor
          tag='textarea'
          model={model}
          onModelChange={this.handleModelChange}
          className='border-0 shadow-none'
          config={{
            theme: 'custom',
            placeholderText: 'Tell Your Story...',
            pluginsEnabled: ['fontFamily', 'bold', 'italic', 'underline', 'fontSize', 'undo',
              'strikeThrough', 'outdent', 'indent', 'html'],
            toolbarButtons: ['fontFamily', 'bold', 'italic', 'underline', 'fontSize', '|', 'undo',
              'strikeThrough', 'outdent', 'indent', 'html'],
          }}
        />
        <TagsModal
          publishHandler={this.publishHandler}
          className='mt-50'
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: state.createArticle
});

const mapDispatchToProps = {
  createArticle: articleActions.createArticle
};

const ArticleFormComponent = connect(mapStateToProps, mapDispatchToProps)(ArticleForm);

export { ArticleForm, ArticleFormComponent };
