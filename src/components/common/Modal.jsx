import React from 'react';
import { Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { closeModalAction } from '../../actions';
import CancelIcon from './CancelIcon';

const ModalComponent = ({ isOpen, children, dispatch }) => {
  const closeLoginModal = () => {
    dispatch(closeModalAction());
  };
  return (
    <Modal isOpen={isOpen} className='login-modal'>
      <CancelIcon clicked={closeLoginModal} />
      {children}
    </Modal>
  );
};

export default connect()(ModalComponent);
