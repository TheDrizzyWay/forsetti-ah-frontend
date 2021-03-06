import React, { Component } from 'react';
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Label,
  Input,
  Spinner
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, openModal, closeModalAction } from '../actions';
import SocialLogin from './SocialLogin';
import Button from './common/Button';
import FormErrorText from './common/FormErrorText';
import ToastMessage from './common/ToastMessage';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isEmailValid: false,
      isPasswordValid: false,
      rememberLogin: false,
    };
  }

  handleFieldInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleRememberMeCheckBox = (e) => {
    this.setState({ [e.target.id]: e.target.checked });
  }

  LoginUser = () => window.location.reload(true);

  processLogin = async () => {
    const { dispatch } = this.props;
    const { email, password, rememberLogin } = this.state;
    await dispatch(loginUser({ email, password }, rememberLogin));
    const {
      auth: { status, message }
    } = this.props;
    if (status === 200) {
      toast(<ToastMessage message={`${message}. Redirecting...`} />, {
        type: 'success',
        closeButton: false,
        hideProgressBar: true,
        onClose: () => this.LoginUser(),
        autoClose: 2000,
      });
    } else if (status === 400) {
      const firstErrorKey = Object.keys(message)[0];
      const errorDisplayed = typeof message === 'object' ? message[firstErrorKey] : message;
      toast(<ToastMessage message={errorDisplayed} />, {
        type: 'error',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 4000,
      });
    } else {
      toast(<ToastMessage message='Something very strange happened' />, {
        type: 'error',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 4000,
      });
    }
  }

  checkEmailInput = (e) => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!validEmailRegex.test(e.target.value)) {
      this.setState({
        emailError: 'Email is invalid',
        isEmailValid: false,
      });
    } else {
      this.setState({
        emailError: '',
        isEmailValid: true,
      });
    }
  }

  checkPasswordInput = (e) => {
    const validPasswordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]){8}/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        passwordError: 'Should be alphanumeric and at least 8 characters long',
        isPasswordValid: false,
      });
    } else {
      this.setState({
        passwordError: '',
        isPasswordValid: true,
      });
    }
  }

  resetInput = (e) => {
    if (e.target.id === 'email') {
      this.setState({ emailError: '', isEmailValid: false });
    }
    if (e.target.id === 'password') {
      this.setState({ passwordError: '', isPasswordValid: false });
    }
  }

  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(closeModalAction());
    dispatch(openModal());
  }

  render() {
    const { auth: { isLoading, token } } = this.props;
    const {
      email, password, emailError, passwordError, isEmailValid, isPasswordValid
    } = this.state;
    const spinner = isLoading ? (<Spinner style={{ width: '1.5rem', height: '1.5rem' }} />) : null;
    const disabled = !(isEmailValid && isPasswordValid) || isLoading || token;
    return (
      <div className='login-form'>
        <h4 className='login-form-header-text'>Welcome back</h4>
        <InputGroup className='login-form-input'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText className='login-form-placeholder-text'>EMAIL</InputGroupText>
          </InputGroupAddon>
          <Input
            type='email'
            id='email'
            onChange={this.handleFieldInput}
            onKeyUp={this.checkEmailInput}
            onFocus={this.resetInput}
            value={email}
          />
        </InputGroup>
        <FormErrorText message={emailError} className='form-error-text form-error-text-email' />
        <InputGroup>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText className='login-form-placeholder-text'>PASSWORD</InputGroupText>
          </InputGroupAddon>
          <Input
            type='password'
            id='password'
            onChange={this.handleFieldInput}
            onKeyUp={this.checkPasswordInput}
            onFocus={this.resetInput}
            value={password}
          />
        </InputGroup>
        <FormErrorText message={passwordError} className='form-error-text' />

        <div className='login-form-supplementary'>
          <div className='login-form-supplementary-remember'>
            <Label>
              <Input type='checkbox' id='rememberLogin' onClick={this.handleRememberMeCheckBox} />
            Remember me
            </Label>
          </div>
          <div className='login-form-supplementary-forgot'>
            <p
              role='presentation'
              onClick={this.closeModal}
              tabIndex='-1'
              onKeyDown={null}
            >
Forgot password?

            </p>
          </div>
        </div>
        <Button className='login-form-btn' onClick={this.processLogin} disabled={disabled}>
        Sign in
          {' '}
          {spinner}
        </Button>
        <SocialLogin />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const Login = connect(mapStateToProps)(withRouter(LoginForm));
export {
  Login,
  LoginForm
};
