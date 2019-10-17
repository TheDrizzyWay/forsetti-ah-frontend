import React from 'react';
import { Row, Col } from 'reactstrap';
import VerticalListItems from './VerticalListItems';

const Footer = () => {
  const listOne = [
    { no: 1, name: 'Tech' },
    { no: 2, name: 'Philosophy' },
    { no: 3, name: 'Life' },
    { no: 4, name: 'Politics' }
  ];

  const listTwo = [
    { no: 5, name: 'Politics' },
    { no: 6, name: 'Culture' },
    { no: 7, name: 'Nature' },
    { no: 8, name: 'Music' }
  ];

  const listThree = [
    { no: 9, name: 'Finance' },
    { no: 10, name: 'Adventure' },
    { no: 11, name: 'Motivational' },
    { no: 12, name: 'Spiritual' }
  ];

  return (
    <footer className='footer'>
      <div className='footer-upper-section'>
        <Row>
          <Col sm={{ size: 12 }} lg={{ size: 4 }} className='footer-logo'>
            <h6 className='footer-logo-text'>
            Authors Haven
            </h6>
          </Col>
          <Col sm={{ size: 4 }} className='footer-links'>
            <div className='footer-links-box'>
              <VerticalListItems items={listOne} className='footer-links-box-list' />
              <VerticalListItems items={listTwo} className='footer-links-box-list' />
              <VerticalListItems items={listThree} className='footer-links-box-list' />
            </div>
          </Col>
          <Col sm={{ size: 4 }} className='footer-top-logo'>
            <i className='fas fa-arrow-up footer-top-logo-icon' />
          </Col>
        </Row>
      </div>
      <div className='footer-lower-section'>
        <Row>
          <Col>
            <p className='footer-lower-section-text'> &copy; 2019</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
