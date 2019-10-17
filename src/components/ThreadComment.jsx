import React from 'react';
import userIcon from '../assets/svg/user.svg';
import formatDate from '../utils/formatDate.util';

const ThreadComment = (props) => {
  const {
    comment,
    createdAt,
    commentType,
    usercomments: {
      username, firstname, image
    },
  } = props;

  return (
    <div className='card shadow-sm my-3'>
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
              {commentType === 'criticism' ? (
                <span style={{
                  backgroundColor: '#6295bc', float: 'right', color: '#fff', padding: '8px'
                }}
                >
                criticism
                </span>
              ) : ''}
            </small>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ThreadComment;
