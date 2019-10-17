import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData, closeModalAction } from '../actions';

class AuthSocial extends Component {
  /**
   * Save token to storage and redirect user
   * param {string} token
   */
  LoginUser = (token) => {
    window.localStorage.setItem('token', token);
    const { history, dispatch } = this.props;
    dispatch(closeModalAction());
    history.push('/');
  }

  /**
   * Get user data from url
   */
  userDataHandler = () => {
    const { location, dispatch, token } = this.props;
    const userArray = location.search.split('&');
    dispatch(getUserData(userArray));
    this.LoginUser(token);
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
  error: state.auth.error,
  token: state.auth.token
});

const AuthSocialComponent = connect(mapStateToProps)(AuthSocial);

export { AuthSocial, AuthSocialComponent };
