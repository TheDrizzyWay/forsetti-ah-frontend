import React from 'react';
import moment from 'moment';
import { articlePlaceholder, user } from '../assets';
import Button from './common/Button';

const ArticleHeader = ({
  title,
  image,
  username,
  readingTime,
  articleImage,
  createdAt
}) => (
  <div className='container'>
    <div className='row mt-5'>
      <div className='col-md-12 text-left'>
        <h2 className='text-uppercase article-title'>
          { title }
        </h2>
      </div>
    </div>
    <div className='row mt-3 mb-4'>
      <div className='col-3 col-md-1'>
        <img
          src={image !== null ? image : user}
          alt='profile'
          className='rounded-circle media m-0'
          style={{ objectFit: 'cover', width: '70px', height: '70px' }}
        />
      </div>
      <div className='col-8 col-md-11'>
        <div className='row ml-1'>
          <div className='col-md-12'>
            <p className=''>
              {username}
              <Button type='button' className='btn btn_primary btn-sm py-0 mx-2'> Follow </Button>
            </p>
          </div>
          <div className='col-md-12'>
            <span>
              {
              moment(createdAt).format('DD MMM, YYYY')
            }
            ,
              {
                ` ${Math.ceil(readingTime / 1000.0)} min read`
              }
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
      {
      articleImage === null ? <div className='pt-3' />
        : (
          <div className='col-md-12'>
            <img
              src={articleImage !== null ? articleImage : articlePlaceholder}
              alt='articleimage'
              className='col-12 col-md-11 article-image'
            />
          </div>
        )
    }
    </div>
  </div>
);

export default ArticleHeader;
