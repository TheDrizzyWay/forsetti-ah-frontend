import React from 'react';

const Backdrop = ({ open }) => <div style={{ display: open ? 'block' : 'none' }} className='backdrop' />;

export default Backdrop;
