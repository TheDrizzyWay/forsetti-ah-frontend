import React from 'react';
import {
  Modal,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Spinner
} from 'reactstrap';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import ResetCancelIcon from '../common/ResetCancelIcon';
import { forgotPassword, openModalAction } from '../../actions';
import Button from '../common/Button';
import FormErrorText from '../common/FormErrorText';
import ToastMessage from '../common/ToastMessage';

class ForgotPasswordComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: '',
      isEmailInvalid: false
    };
  }

  /**
   * Handle form submission
   */
  onSubmit = async () => {
    const { email, isEmailInvalid } = this.state;
    const emailEmptyRegex = /^$/.test(email);
    const { dispatch } = this.props;
    const data = {
      email,
    };
    if (emailEmptyRegex || isEmailInvalid) {
      this.setState({
        emailError: 'Invalid email input',
      });
    } else {
      await dispatch(forgotPassword(data));
      const { status, message } = this.props;
      if (status === 200) {
        toast(<ToastMessage message={`${message}`} />, {
          type: 'success',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 0,
        });
      } else if (status === 404) {
        toast(<ToastMessage message={message} />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 5000,
        });
      } else {
        toast(<ToastMessage message='Email cannot be sent to the email provided' />, {
          type: 'error',
          closeButton: false,
          hideProgressBar: true,
          onClose: () => this.clearField(),
          autoClose: 5000,
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
   * Handle modal closing
   */
  closeModal = () => {
    const { dispatch } = this.props;
    dispatch(openModalAction());
  }

  /**
   * Clear input field on success
   */
  clearField = () => {
    this.setState({ email: '' });
  }

  /**
   * Check for invalid email input
   */
  checkEmailInput = (e) => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
    if (!validEmailRegex) {
      this.setState({
        emailError: 'Email is invalid',
        isEmailInvalid: true
      });
    } else {
      this.setState({
        emailError: '',
        isEmailInvalid: false
      });
    }
  }

  render() {
    const { email, emailError } = this.state;
    const { submit, isOpen } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} className='reset-modal'>
          <ResetCancelIcon clicked={this.closeModal} />
          <ModalBody>
            <div className='reset-form'>
              <h4 className='reset-form-header-text'>Forgot your password?</h4>
              <p className='reset-form-follower-text'>
                No hassles! Just type in the email address
                you used to register below.
              </p>
              <InputGroup className='reset-form-input'>
                <InputGroupAddon addonType='prepend' className='d-none d-md-flex'>
                  <InputGroupText className='reset-form-placeholder-text'>EMAIL</InputGroupText>
                </InputGroupAddon>
                <Input
                  id='email'
                  value={email}
                  onChange={this.handleChange}
                  onKeyUp={this.checkEmailInput}
                />
              </InputGroup>
              <FormErrorText message={emailError} className='form-error-text form-error-text-email' />
              <Button
                className='reset-form-btn'
                onClick={this.onSubmit}
              >
                  Send Link
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
  isModalOpen: state.reset.isModalOpen,
  submit: state.reset.submit,
  message: state.reset.message,
  status: state.reset.status
});

const ForgotPassword = connect(mapStateToProps)(ForgotPasswordComponent);
export { ForgotPassword, ForgotPasswordComponent };
