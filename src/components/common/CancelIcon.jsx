import React from 'react';
import cancel from '../../assets/svg/cancel.svg';

const CancelIcon = ({ clicked }) => (
  <img className='cancel-icon' src={cancel} alt='Cancel icon' onClick={clicked} />
);

export default CancelIcon;
