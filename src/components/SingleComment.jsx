import React, { Component } from 'react';
import {
  Button,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import ThreadCommentSection from './ThreadCommentSection';
import formatDate from '../utils/formatDate.util';
import userIcon from '../assets/svg/user.svg';

class SingleComment extends Component {
  state = {
    open: false,
    threadComment: '',
    select: 'comment'
  }

  onSelectHandler = ({ target: { value } }) => {
    this.setState({ select: value });
  }

  onChangeHandler = ({ target: { value } }) => {
    this.setState({ threadComment: value });
  }

  closeModal = () => {
    this.setState({ open: false });
  }

  toggle = (prevState) => {
    this.setState({
      open: !prevState.open
    });
  }

  submitThreadComment = () => {
    const { threadComment, select } = this.state;
    const {
      slug,
      postNewThreadComment,
      id,
      token,
      history
    } = this.props;
    if (!token) return history.push('/');
    postNewThreadComment({
      threadComment,
      select,
      slug,
      id
    });
    return this.setState({
      threadComment: '',
      select: 'comment'
    });
  }

  render() {
    const { open, threadComment, select } = this.state;
    const {
      comment,
      createdAt,
      threadcomments,
      usercomments: {
        username, firstname, image
      },
      commentType,
    } = this.props;
    const reply = length => (length === 1 ? '1 reply' : `${length} replies`);
    return (
      <div className='card shadow-sm my-3 sbox'>
        <div className='card-body'>
          <p>{comment}</p>
          <img style={{ height: '40px' }} src={image || userIcon} alt='user-icon' />
          {' '}
          <div className='d-inline'>
            <h5 className='mt-0 d-inline'>
              {username || firstname}
              {' '}
              <br />
              <small>
                <i>
  Posted on
                  {' '}
                  {formatDate(createdAt)}
                </i>
                {threadcomments ? (
                  <Button type='button' className='reply-btn' onClick={this.toggle}>
                    {reply(threadcomments.length)}
                  </Button>
                )
                  : ''}
                {commentType === 'criticism' ? (
                  <div className='criticism'>
              criticism
                  </div>
                ) : ''}
              </small>
            </h5>
          </div>
        </div>
        <div className='container'>
          <Modal isOpen={open} toggle={this.toggle}>
            <ModalHeader toggle={this.closeModal}>Post Replies Below</ModalHeader>
            <ModalBody>
              <div className='ml-4 mb-1'>{comment}</div>
              <div className='comment border mx-0 mx-md-0 mx-lg-4  pb-2 shadow-sm'>
                <div className='form-group text-left pl-0 mt-2 mb-0'>
                  <textarea
                    className='form-control rounded-0 p-2 mb-0 bg-white border-0 shadow-none'
                    placeholder='Leave your replies'
                    rows='3'
                    style={{ resize: 'none' }}
                    onChange={this.onChangeHandler}
                    value={threadComment}
                  />
                  <div className='row ml-0 col-12'>
                    <select
                      className='form-control rounded-0 col-md-6 col-lg-2 col-6 ml-lg-2 ml-1'
                      value={select}
                      onChange={this.onSelectHandler}
                    >
                      <option value='comment'>Comment</option>
                      <option value='criticism'>Criticism</option>
                    </select>
                    <Button
                      className='btn btn_primary ml-2 btn-md px-3 mb-0'
                      type='button'
                      onClick={this.submitThreadComment}
                    >
                  REPLY
                    </Button>
                  </div>
                </div>
              </div>
              {threadcomments && <ThreadCommentSection threadComment={threadcomments} />}
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SingleComment;
