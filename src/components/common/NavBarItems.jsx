import React from 'react';
import { Button } from 'reactstrap';

const NavBarItems = ({ menuItems, className }) => (
  <ul className={className}>
    {menuItems.map(menuItem => (
      <li key={menuItem.no}>
        <Button className='navbar-button-item' color='primary' onClick={menuItem.onClick}>
          {menuItem.text}
        </Button>
      </li>
    ))}
  </ul>
);

export default NavBarItems;
