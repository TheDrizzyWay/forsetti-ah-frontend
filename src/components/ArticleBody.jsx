import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bookmarkArticle } from '../actions';
import ToastMessage from './common/ToastMessage';
import {
  google,
  facebook,
  twitter,
  clapBlack,
  clapWhite,
  bookmarkWhite,
  bookmarkBlack,
  hands,
  user
} from '../assets';

const ArticleBody = ({
  body,
  claps,
  id,
  bookmark,
  Bookmarked
}) => {
  const bookmarkIcon = Bookmarked ? bookmarkBlack : bookmarkWhite;
  return (
    <div className='row article-section mt-3 '>
      <div
        className='article-body col-sm-10 col-md-10 col-lg-9
              d-flex flex-column mx-2 text-left mx-lg-5 pl-4 pb-5 offset-5'
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div className='share col-sm-2 col-md-1 col-lg-1
            mx-4 mx-md-2 mt-sm-4 mb-sm-4 my-lg-6 d-flex flex-column position-sticky px-0'
      >
        <div className='row'>
          <span className='rounded-circle social col-md-12 col-3 mb-2'>
            <a href='/' className='align-self-center'>
              <img src={hands} alt='claps' className='p-1' />
              <span className='p-0 h-50 text-dark'>
                { `${claps}` }
              </span>
            </a>
          </span>
          <span className='col-md-12 col-2 rounded-circle'>
            <a href='/'>
              <img src={google} alt='google' className='h-50 py-md-2 social-icon' />
            </a>
          </span>
          <span className='col-md-12 col-2 rounded-circle '>
            <a href='/'>
              <img src={facebook} alt='facebook' className='h-50 py-md-2 social-icon' />
            </a>
          </span>
          <span className='col-md-12 col-2 rounded-circle '>
            <a href='/'>
              <img src={twitter} alt='twitter' className='h-50 py-md-2 social-icon' />
            </a>
          </span>
          <span
            className='col-md-12 col-1 rounded-circle bookmark'
            onClick={bookmark}
            role='button'
            onKeyDown={null}
            tabIndex='0'
          >
            <p>
              <img
                src={bookmarkIcon}
                alt='bookmarks'
                className='h-50 py-md-2 social-icon bookmarkstyle'
              />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;
