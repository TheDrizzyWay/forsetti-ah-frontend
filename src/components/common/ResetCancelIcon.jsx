import React from 'react';
import cancel from '../../assets/svg/back-arrow.svg';

const ResetCancelIcon = ({ clicked }) => (
  <img
    id='reset-cancel-icon'
    src={cancel}
    alt='Cancel icon'
    onClick={clicked}
    tabIndex='-1'
    role='presentation'
  />
);

export default ResetCancelIcon;
