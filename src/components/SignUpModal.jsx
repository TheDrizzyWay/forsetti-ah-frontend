import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Modal } from 'reactstrap';
import ManReadingIcon from './common/ManReadingIcon';
import SignUpForm from './SignUpForm';
import CancelIcon from './common/CancelIcon';
import { closeSignUpModalAction } from '../actions';

export const SignUpModal = ({ isOpen, dispatch }) => {
  const closeSignupModal = () => dispatch(closeSignUpModalAction());
  return (
    <Modal isOpen={isOpen} className='login-modal'>
      <CancelIcon clicked={closeSignupModal} />
      <Row>
        <Col sm={{ size: 6, offset: 1 }}>
          <SignUpForm />
        </Col>
        <Col sm={{ size: 4 }}>
          <ManReadingIcon className='login-modal-man-reading-icon' />
        </Col>
      </Row>
    </Modal>
  );
};

const mapStateToProps = state => ({
  displayModal: state.modal.displayModal
});
export default connect(mapStateToProps)(SignUpModal);
