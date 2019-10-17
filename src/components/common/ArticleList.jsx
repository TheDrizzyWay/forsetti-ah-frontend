import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { formatDate } from '../../utils';
import calender from '../../assets/images/calendar.svg';

export const ArticleList = ({
  title, description, readingTime, createdAt, image, slug, history
}) => (
  <Fragment>
    <div
      className='ArticleList'
      onClick={() => history.push(`article/${slug}`)}
      role='button'
      tabIndex='-1'
      onKeyDown={null}
    >
      { createdAt
          && (
          <div className='my-2'>
            <span
              className='created font-weight-bold'
            >
              <img src={calender} alt='calender_icon' />
              <span>&nbsp; &nbsp;</span>
              { formatDate(createdAt) }
            </span>
          </div>
          )
        }
      <div
        className='card list'
      >
        <div className='row'>
          <div className={`${image ? 'col-7 col-md-8' : 'col-12'}`}>
            <div className='row py-2 py-md-3 pl-3 px-md-4'>
              <div className='col-12'>
                <h3
                  className='text-uppercase title font-weight-bold'
                >
                  { title }
                </h3>
              </div>
              <div className='col-12'>
                <p className='description' dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              {
                  readingTime && (
                    <div className='col-12 mt-md-3'>
                      <h3 className='reading-time font-weight-bold'>
                        {`${Math.ceil(readingTime / 1000.0)} min read`}
                      </h3>
                    </div>
                  )
                }
            </div>
          </div>
          {
            image && (
              <div className='col-5 col-md-4'>
                <div
                  className='image'
                  alt={image}
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  </Fragment>
);

ArticleList.defaultProps = {
  createdAt: '',
  readingTime: '',
  image: ''
};

ArticleList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readingTime: PropTypes.string,
  createdAt: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string.isRequired
};

export default withRouter(ArticleList);
