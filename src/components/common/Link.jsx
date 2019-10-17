import React from 'react';

const Link = ({ href, children }) => (
  <a href={href} className='primary-link'>{children}</a>
);

export default Link;
