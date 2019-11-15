import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData, closeModalAction } from '../actions';

class AuthSocial extends Component {
  /**
   * Save token to storage and redirect user
   * param {string} token
   */
  LoginUser = () => {
    const { history, dispatch } = this.props;
    dispatch(closeModalAction());
    history.push('/', { from: 'social' });
  }

  /**
   * Get user data from url
   */
  userDataHandler = () => {
    const { location, dispatch } = this.props;
    const userArray = location.search.split('&');
    dispatch(getUserData(userArray));
    this.LoginUser();
  }

  render() {
    return (
      <div>
        {this.userDataHandler()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.auth.redirect,
  id: state.auth.id,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  username: state.auth.username,
  email: state.auth.email,
  error: state.auth.error
});

const AuthSocialComponent = connect(mapStateToProps)(AuthSocial);

export { AuthSocial, AuthSocialComponent };
