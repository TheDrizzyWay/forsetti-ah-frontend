import React from 'react';
import ThreadComment from './ThreadComment';

const ThreadCommentSection = (props) => {
  const { threadComment } = props;
  return (
    <div className='container mb-5'>
      {threadComment.map(comment => (
        <ThreadComment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default ThreadCommentSection;
