import React, { Component } from 'react';
import { google, facebook, twitter } from '../assets/images';

class SocialLogin extends Component {
  render() {
    return (
      <div className='social-login'>
        <div className='google-login'>
          <a href='https://forsetti-ah-backend-staging.herokuapp.com/api/v1/auth/google'>
            <img src={google} alt='Google' />
          </a>
        </div>
        <div className='facebook-login'>
          <a href='https://forsetti-ah-backend-staging.herokuapp.com/api/v1/auth/facebook'>
            <img src={facebook} alt='Facebook' />
          </a>
        </div>
        <div className='twitter-login'>
          <a href='https://forsetti-ah-backend-staging.herokuapp.com/api/v1/auth/twitter'>
            <img src={twitter} alt='Twitter' />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialLogin;
