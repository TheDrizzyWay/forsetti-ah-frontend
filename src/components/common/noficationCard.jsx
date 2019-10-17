import React from 'react';

import { Link } from 'react-router-dom';

const typeCheck = (type, id, articleSlug) => {
  switch (type) {
    case 'article':
      return (
        <Link
          className='btn btn_primary rounded-1 col-12 my-1 py-1'
          to={`/article/${articleSlug}`}
        >
         Read
        </Link>
      );
    case 'comment':
      return (
        <Link
          className='btn btn_primary rounded-1 col-12 my-1 py-1'
          to={`/article/${articleSlug}`}
        >
         View
        </Link>
      );
    default:
      return (<Link className='btn btn_primary rounded-1 col-12 my-1 py-1' to='/profile'> View </Link>);
  }
};

/**
 * Notification Card component
 * @param {Object} props
 */
const NotificationCard = ({
  notification, type, userId, articleSlug
}) => (
  <div className='card col-12 col-md-10 rounded-0 shadow-sm mb-3'>
    <div className='card-body row align-items-center p-2'>
      <div
        className='card-text col-12 col-md-9 p-0 order-sm-1 text-left'
        dangerouslySetInnerHTML={{ __html: notification }}
      />
      <div className='card-link col-12 col-md-3 ml-0 mt-2 ml-0 order-sm-2'>
        <p className=''>
          {
              typeCheck(type, userId, articleSlug)
          }
        </p>
      </div>
    </div>
  </div>
);

export default NotificationCard;
