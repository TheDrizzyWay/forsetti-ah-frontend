import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Modal,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Spinner
} from 'reactstrap';
import Button from '../common/Button';
import FormErrorText from '../common/FormErrorText';
import ResetCancelIcon from '../common/ResetCancelIcon';
import { resetPassword, openModalAction, closeResetModal } from '../../actions';
import ToastMessage from '../common/ToastMessage';

class ResetPasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
      isPasswordInvalid: false,
      doPasswordsMatch: false
    };
  }

  /**
   * Handle form submission
   */
  onSubmit = async () => {
    const { dispatch, history, token } = this.props;
    const { password, isPasswordInvalid, doPasswordsMatch } = this.state;
    const passwordEmptyRegex = /^$/.test(password);
    const data = {
      password
    };
    if (passwordEmptyRegex || isPasswordInvalid || doPasswordsMatch) {
      if (doPasswordsMatch) {
        this.setState({
          confirmPasswordError: 'Password does not match'
        });
      } else {
        this.setState({
          passwordError: 'Invalid input',
          confirmPasswordError: 'Invalid input'
        });
      }
    } else {
      await dispatch(resetPassword(data, token));
      const { status, message } = this.props;
      if (status === 201) {
        toast(<ToastMessage message={`${message}. Redirecting...`} />, {
          type: 'success',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 0,
        });
        setTimeout(() => {
          dispatch(closeResetModal());
          dispatch(openModalAction());
        }, 5000);
      } else if (status === 409) {
        toast(<ToastMessage message={`${message}`} />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 0,
        });
      } else if (status === 401) {
        toast(<ToastMessage message='Token expired. Please request for a change again' />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 0,
        });
      } else if (status === 422) {
        toast(<ToastMessage message={`${message}`} />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 0,
        });
      } else {
        toast(<ToastMessage message='Password cannot be changed at the moment. Please request for a change again' />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 0,
        });
      }
    }
  }

  /**
   * Handle Input field change
   */
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  /**
   * Clear input field on success
   */
  clearField = () => {
    this.setState({ password: '' });
  }

  /**
   * Hande password input check
   */
  checkPasswordInput = (e) => {
    const validPasswordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]){8}/.test(e.target.value);
    if (!validPasswordRegex) {
      this.setState({
        passwordError: 'Should be alphanumeric and atleast 8 characters long',
        isPasswordInvalid: true
      });
    } else {
      this.setState({
        passwordError: '',
        isPasswordInvalid: false
      });
    }
  }

  /**
   * Hande password match check
   */
  checkPasswordMatch = (e) => {
    const { password } = this.state;
    if (password !== e.target.value) {
      this.setState({
        confirmPasswordError: 'Passwords don\'t match',
        doPasswordsMatch: true
      });
    } else {
      this.setState({
        confirmPasswordError: '',
        doPasswordsMatch: false
      });
    }
  }

  /**
   * Handle modal closing
   */
  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(openModalAction());
    dispatch(closeResetModal());
  }

  render() {
    const {
      password, passwordError, confirmPassword, confirmPasswordError
    } = this.state;
    const { submit, isOpen } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} className='reset-modal'>
          <ResetCancelIcon clicked={this.closeModal} />
          <ModalBody>
            <div className='reset-form'>
              <h4 className='reset-form-header-text reset-text'>Reset Password</h4>
              <InputGroup className='reset-form-input'>
                <InputGroupAddon addonType='prepend' className='d-none d-md-flex'>
                  <InputGroupText className='reset-form-placeholder-text'>PASSWORD</InputGroupText>
                </InputGroupAddon>
                <Input
                  type='password'
                  id='password'
                  value={password}
                  onChange={this.handleChange}
                  onKeyUp={this.checkPasswordInput}
                />
              </InputGroup>
              <FormErrorText message={passwordError} className='form-error-text form-error-text-email' />

              <InputGroup className='reset-form-input'>
                <InputGroupAddon addonType='prepend' className='d-none d-md-flex'>
                  <InputGroupText className='reset-form-placeholder-text'>CONFIRM</InputGroupText>
                </InputGroupAddon>
                <Input
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                  onKeyUp={this.checkPasswordMatch}
                />
              </InputGroup>
              <FormErrorText message={confirmPasswordError} className='form-error-text form-error-text-email' />
              <Button
                className='reset-form-btn'
                onClick={this.onSubmit}
              >
                Reset
                &nbsp;
                { submit && <Spinner style={{ width: '1.5rem', height: '1.5rem' }} />}
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  submit: state.reset.submit,
  message: state.reset.message,
  status: state.reset.status,
  token: state.reset.token
});

const ResetPassword = connect(mapStateToProps)(ResetPasswordComponent);

export { ResetPassword, ResetPasswordComponent };
