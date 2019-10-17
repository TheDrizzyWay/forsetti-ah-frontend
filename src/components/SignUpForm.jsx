import React from 'react';
import { connect } from 'react-redux';
import { InputGroupAddon, InputGroup, Input, InputGroupText, Spinner } from 'reactstrap';
import { toast } from 'react-toastify';
import ToastMessage from './common/ToastMessage';
import ButtonComponent from './common/Button';
import { signUpUser } from '../actions';
import FormErrorText from './common/FormErrorText';
import { checkInputValues, clearErrorMessages } from '../helpers/signUpFormValidation';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      firstnameError: '',
      lastname: '',
      lastnameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      username: '',
      usernameError: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstname, lastname, email, password, username
    } = this.state;
    const data = {
      firstname,
      lastname,
      email,
      password,
      username
    };
    const errorMessages = checkInputValues(data);
    const errorFields = Object.keys(errorMessages);
    this.setState(clearErrorMessages());

    if (errorFields.length > 0) {
      this.setState(errorMessages);
    } else {
      const emptyErrorMessages = clearErrorMessages();
      this.setState(emptyErrorMessages);

      const { dispatch } = this.props;
      await dispatch(signUpUser(data));

      const { message, token } = this.props;

      if (message === 'User registered successfully') {
        window.localStorage.setItem('token', JSON.stringify(token));
        toast(<ToastMessage message={`${message}. Redirecting...`} />, {
          type: 'success',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => window.location.reload(),
          autoClose: 1000,
        });
      } else if (message === `User with email: ${email} already exist!` || message.UsernameExist) {
        let formattedMessage;
        if (typeof message === 'string') {
          formattedMessage = message;
        } else if (typeof message === 'object') {
          formattedMessage = message.UsernameExist;
        }
        toast(<ToastMessage message={formattedMessage} />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          autoClose: 1000,
        });
      } else {
        toast(<ToastMessage message='Something very strange happened' />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          autoClose: 1000,
        });
      }
    }
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      username,
      firstnameError,
      lastnameError,
      emailError,
      passwordError,
      usernameError
    } = this.state;

    const { isLoading } = this.props;
    const spinner = isLoading ? (<Spinner style={{ width: '1.5rem', height: '1.5rem' }} />) : null;
    const disabled = isLoading;

    return (
      <div className='login-form'>
        <h4 className='signup-form-header-text'>CREATE ACCOUNT</h4>
        <form className='w-100' onSubmit={this.handleSubmit}>

          <InputGroup className='signup-form-group'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText
                className='signup-form-label'
              >
                      FIRSTNAME
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              className='signup-form-input'
              onChange={this.handleChange}
              name='firstname'
              value={firstname}
            />
          </InputGroup>
          <FormErrorText message={firstnameError} className='form-error-text' />

          <InputGroup className='signup-form-group'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText
                className='signup-form-label'
              >
                      LASTNAME
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              className='signup-form-input'
              onChange={this.handleChange}
              name='lastname'
              value={lastname}
            />
          </InputGroup>
          <FormErrorText message={lastnameError} className='form-error-text' />

          <InputGroup className='signup-form-group'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText
                className='signup-form-label'
              >
                      EMAIL
              </InputGroupText>
            </InputGroupAddon>
            <Input
              className='signup-form-input'
              onChange={this.handleChange}
              name='email'
              value={email}
            />
          </InputGroup>
          <FormErrorText message={emailError} className='form-error-text' />

          <InputGroup className='signup-form-group'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText
                className='signup-form-label'
              >
                      PASSWORD
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='password'
              className='signup-form-input'
              onChange={this.handleChange}
              name='password'
              value={password}
            />
          </InputGroup>
          <FormErrorText message={passwordError} className='form-error-text' />

          <InputGroup className='signup-form-group'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText
                className='signup-form-label'
              >
                      USERNAME
              </InputGroupText>
            </InputGroupAddon>
            <Input
              type='text'
              className='signup-form-input'
              onChange={this.handleChange}
              name='username'
              value={username}
            />
          </InputGroup>
          <FormErrorText message={usernameError} className='form-error-text' />

          <ButtonComponent
            className='login-form-btn'
            disabled={disabled}
          >
              JOIN NOW
            {' '}
            {spinner}
          </ButtonComponent>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.auth.redirect,
  isLoading: state.auth.isLoading,
  submit: state.auth.submit,
  message: state.auth.message,
  token: state.auth.token,
  user: state.auth.user,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  password: state.auth.password,
  email: state.auth.email,
  username: state.auth.username
});

export default connect(mapStateToProps)(SignUp);
