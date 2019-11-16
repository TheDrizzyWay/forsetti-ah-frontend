import React from 'react';

const ListItem = ({ name, clickFn }) => (
  <li>
    {clickFn
      ? (<button type='button' className='bg-transparent border-0 btn-custom' onClick={clickFn}>{name}</button>)
      : name
  }
  </li>
);

export default ListItem;
