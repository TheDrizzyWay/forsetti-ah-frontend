import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions';

class GetResetPasswordToken extends Component {
  /**
   * Get the user token from url
   */
  getToken = () => {
    const { location, dispatch, history } = this.props;
    const token = location.search.split('=')[1];
    dispatch(getToken(token));
    history.push('/');
  }

  render() {
    return (
      <div>
        {this.getToken()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.reset.token
});

export default connect(mapStateToProps)(GetResetPasswordToken);
