import React from 'react';
import {
  facebook,
  twitter,
  bookmarkWhite,
  bookmarkBlack,
  hands,
} from '../assets';

const ArticleBody = ({
  body,
  claps,
  bookmark,
  bookmarked,
  doClap
}) => {
  const bookmarkIcon = bookmarked ? bookmarkBlack : bookmarkWhite;
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
          <span
            className='rounded-circle social col-md-12 col-3 mb-2 clap-style'
            onClick={doClap}
            role='button'
            onKeyDown={null}
            tabIndex='0'
          >
            <img src={hands} alt='claps' className='p-1' />
            <span className='p-0 h-50 text-dark'>
              { `${claps}` }
            </span>
          </span>
          <span className='col-md-12 col-2 rounded-circle '>
            <img src={facebook} alt='facebook' className='h-200 py-md-2 social-icon' />
          </span>
          <span className='col-md-12 col-2 rounded-circle '>
            <img src={twitter} alt='twitter' className='h-200 py-md-2 social-icon' />
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
