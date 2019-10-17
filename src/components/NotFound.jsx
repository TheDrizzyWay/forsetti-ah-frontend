import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ text = 'page' }) => (
  <div className='not-found'>
    <div className='notfound-bg' />
    <div className='notfound'>
      <div className='notfound-404'>
        <h1>404</h1>
      </div>
      <div className='notfound-404'>
        <h2>
          The
          <span className='px-1'>{ text }</span>
          you are searching for does not exist.
          <br />
          You may need to consider going back to our
          <a
            href='/'
            className=' px-1 Notfound_link'
          >
            Home Page
          </a>
        </h2>
      </div>
    </div>
  </div>
);

export default NotFound;
