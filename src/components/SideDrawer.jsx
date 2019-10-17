import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import VerticalListItems from './common/VerticalListItems';
import NavBarItems from './common/NavBarItems';
import Backdrop from './common/Backdrop';
import {
  openModalAction,
  hideSideDrawerAction,
  openTagsModal,
  openSignupModalAction
} from '../actions';

const SideDrawer = ({
  show,
  closed,
  dispatch,
  history
}) => {
  const openLoginModal = () => {
    dispatch(openModalAction());
    dispatch(hideSideDrawerAction());
  };
  const openSignUpModal = () => {
    dispatch(openSignupModalAction());
    dispatch(hideSideDrawerAction());
  };
  const openArticleTagsModal = () => dispatch(openTagsModal());

  const closeSidebar = (path) => {
    history.push(path);
    dispatch(hideSideDrawerAction());
  };

  const items = [
    { no: 1, name: 'Tech' },
    { no: 2, name: 'Philosophy' },
    { no: 3, name: 'Life' },
    { no: 4, name: 'Politics' },
    { no: 5, name: 'Nature' },
    { no: 6, name: 'Music' }
  ];


  const menuItems = [];

  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (history.location.pathname === '/article/new') {
      return menuItems.push(
        { no: 1, text: 'Publish', onClick: openArticleTagsModal },
        { no: 2, text: 'Notification', onClick: () => closeSidebar('/profiles/notification') }
      );
    }

    if (token) {
      return menuItems.push(
        { no: 1, text: 'Write Post', onClick: () => closeSidebar('/article/new') },
        { no: 2, text: 'Notification', onClick: () => closeSidebar('/profiles/notification') },
        { no: 3, text: 'Profile', onClick: () => closeSidebar('/profile') }
      );
    }
    return menuItems.push(
      { no: 1, text: 'Sign in', onClick: openLoginModal },
      { no: 2, text: 'Sign up', onClick: openSignUpModal }
    );
  };

  isLoggedIn();

  return (
    <React.Fragment>
      <Backdrop open={show} />
      <div
        className='sidedrawer'
        style={{
          display: show ? 'block' : 'none',
          opacity: show ? '1' : '0',
          visibility: show ? 'visible' : 'hidden'
        }}
      >
        <div className='sidedrawer-nav'>
          <div className='sidedrawer-nav-close-icon'>
            <Button onClick={closed} className='sidedrawer-nav-close-button'>
              <i className='far fa-window-close' />
            </Button>
          </div>
          <div className='sidedrawer-nav-links'>
            <VerticalListItems items={items} className='sidedrawer-nav-links-list' />
            <NavBarItems menuItems={menuItems} className='sidedrawer-nav-menu-list' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const SideDrawerComponent = connect()(withRouter((SideDrawer)));
export { SideDrawerComponent, SideDrawer };
