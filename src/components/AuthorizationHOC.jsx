import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { tokenExpired } from '../utils';

const AuthorizationHOC = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      if (token && !tokenExpired(token)) {
        return <Component />;
      }
      return <Redirect to='/' />;
    }}
  />
);

const mapStateToProps = state => ({
  token: state.auth.token,
});

const AuthorizationHOCUnit = connect(mapStateToProps)(AuthorizationHOC);

export {
  AuthorizationHOC,
  AuthorizationHOCUnit
};
