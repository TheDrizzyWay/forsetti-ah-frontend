import React from 'react';
import { Row, Col } from 'reactstrap';
import ManReadingIcon from './common/ManReadingIcon';
import { Login } from './LoginForm';
import ModalComponent from './common/Modal';

const LoginModal = ({ isOpen }) => (
  <ModalComponent isOpen={isOpen}>
    <Row>
      <Col sm={{ size: 6, offset: 1 }}>
        <Login />
      </Col>
      <Col sm={{ size: 4 }}>
        <ManReadingIcon className='login-modal-man-reading-icon' />
      </Col>
    </Row>
  </ModalComponent>
);

export default LoginModal;
