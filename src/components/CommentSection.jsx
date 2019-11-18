import React from 'react';
import SingleComment from './SingleComment';

const CommentSection = (props) => {
  const {
    commentsList,
    commentCount,
    slug,
    postNewThreadComment,
    commentLoading,
    token,
    history
  } = props;
  return (
    <div className='container mb-5'>
      {commentCount > 0 && commentsList.map(comment => (
        <SingleComment
          key={`${comment.id}${comment.createdAt}`}
          slug={slug}
          postNewThreadComment={postNewThreadComment}
          history={history}
          token={token}
          commentLoading={commentLoading}
          {...comment}
        />
      ))}
    </div>
  );
};

export default CommentSection;
