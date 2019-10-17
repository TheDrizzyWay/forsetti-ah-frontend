import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Button from './common/Button';

class Comments extends Component {
  state = {
    comment: '',
    select: 'comment'
  }

  onChangeHandler = ({ target: { value } }) => {
    this.setState({ comment: value });
  }

  onSelectHandler = ({ target: { value } }) => {
    this.setState({ select: value });
  }

  submitComment = () => {
    const { comment, select } = this.state;
    const {
      slug,
      postNewComment,
      token,
      history
    } = this.props;
    if (!token) return history.push('/');
    postNewComment({ comment, select, slug });
    return this.setState({
      comment: '',
      select: 'comment'
    });
  }

  render() {
    const { comment, select } = this.state;
    const { commentLoading } = this.props;
    const spinner = commentLoading ? (<Spinner style={{ width: '1.5rem', height: '1.5rem' }} />) : null;
    return (
      <div className='border mb-4 border-left-0 border-right-0 border-bottom-0 col-lg-10'>
        <h6 className='text-uppercase mx-0 mx-md-0 text-left mx-lg-4 pl-0 pb-2 offset-5 mt-2  '>Comments</h6>
        <div className='comment border mx-0 mx-md-0 mx-lg-4  pb-2 shadow-sm'>
          <div className='form-group text-left pl-0 mt-2 mb-0'>
            <textarea
              className='form-control rounded-0  p-2 mb-2 bg-white border-0 shadow-none'
              placeholder='Leave your comments'
              rows='5'
              style={{ resize: 'none' }}
              onChange={this.onChangeHandler}
              value={comment}
            />
            <div className='row ml-0 col-12'>
              <select
                className='form-control rounded-0 col-md-3 col-lg-2 col-6 ml-lg-2 ml-1'
                value={select}
                onChange={this.onSelectHandler}
              >
                <option value='comment'>Comment</option>
                <option value='criticism'>Criticism</option>
              </select>
              <Button
                className='btn btn_primary ml-2 btn-md px-3'
                type='button'
                onClick={this.submitComment}
                disabled={!!commentLoading}
              >
              POST
                {' '}
                {spinner}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
