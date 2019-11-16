import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import HorizontalListItems from './HorizontalListItems';
import {
  openModalAction,
  openTagsModal,
  openSignupModalAction,
  logoutUser,
  searchArticles
} from '../../actions';
import { notificationBlue } from '../../assets';
import NavBarItems from './NavBarItems';
import profilepix from '../../assets/svg/profilepix.svg';

const Header = (props) => {
  const {
    dispatch,
    clicked,
    notifications: {
      count = 0
    },
    history,
    auth
  } = props;
  const openLoginModal = () => dispatch(openModalAction());
  const openSignupModal = () => dispatch(openSignupModalAction());
  const openArticleTagsModal = () => dispatch(openTagsModal());

  const Logout = () => {
    dispatch(logoutUser());
    window.location.reload();
  };

  const linkItems = [
    { no: 1, name: 'All', onClick: () => window.location.reload() },
    { no: 2, name: 'Philosophy', onClick: () => dispatch(searchArticles('Philosophy')) },
    { no: 3, name: 'Tech', onClick: () => dispatch(searchArticles('Tech')) },
    { no: 4, name: 'Politics', onClick: () => dispatch(searchArticles('Politics')) },
    { no: 5, name: 'Nature', onClick: () => dispatch(searchArticles('Nature')) },
    { no: 6, name: 'Music', onClick: () => dispatch(searchArticles('Music')) }
  ];

  const menuItems = [];
  const isLoggedIn = () => {
    const { token } = auth;
    const currentPath = history.location.pathname;
    if (token && currentPath === '/article/new') {
      return menuItems.push({ no: 1, text: 'Publish', onClick: openArticleTagsModal });
    }

    if (token && currentPath !== '/article/new') {
      return menuItems.push({ no: 1, text: 'Write Post', onClick: () => history.push('/article/new') });
    }
    return (
      menuItems.push(
        { no: 1, text: 'Sign in', onClick: openLoginModal },
        { no: 2, text: 'Sign up', onClick: openSignupModal }
      )
    );
  };

  isLoggedIn();

  return (
    <nav className='header d-flex justify-content-between'>
      <div className='header-logo'>
        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
          <h1 className='header-logo-text'>Authors Haven</h1>
        </Link>
      </div>
      <div className='header-links'>
        <HorizontalListItems items={linkItems} className='header-links-list' />
      </div>
      <div className='header-nav'>
        <div className='row mr-1 mr-md-2'>
          {
          auth.token && (
          <div className='mr-3 mr-md-2 d-sm-none d-md-block'>
            <Link to='/profiles/notification' style={{ color: 'white', fontSize: '1rem', textDecoration: 'none' }}>
              <p className='d-sm-none d-md-block notification-icon'>
                <img src={notificationBlue} alt='notification' className='rounded-0 ' style={{ width: '2rem' }} />
                <span className=''>
                  {count}
                </span>
              </p>
            </Link>
          </div>
          )
          }
          <div className={`${auth.token ? 'col-md-6 text-center' : 'col-md-12'}`}>
            <NavBarItems menuItems={menuItems} className='header-nav-menu' />
          </div>
          {
            auth.token && (
            <div className='col-md-2 text-md-left text-center d-none d-md-block pb-2'>
              <UncontrolledDropdown>
                <DropdownToggle style={{ background: 'none', border: 'none', padding: '0.05rem 1rem' }}>
                  <img
                    src={profilepix}
                    alt='profilephoto'
                    className='header-nav-menu rounded-0'
                    style={{ width: '2.25rem' }}
                  />
                </DropdownToggle>
                <DropdownMenu className='profile-dropdown'>
                  <Link to='/profile/' style={{ color: 'black', fontSize: '1rem', textDecoration: 'none' }}>
                    <DropdownItem className='profile'>Profile</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem onClick={Logout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            )
          }

        </div>
        <Button onClick={clicked} className='header-nav-hamburger col'>
          <i className='fas fa-bars' />
        </Button>

      </div>
    </nav>

  );
};

const mapStateToProps = state => ({
  notifications: state.notifications,
  auth: state.auth
});

const HeaderComponent = connect(mapStateToProps)(withRouter(Header));

export {
  HeaderComponent,
  Header,
};
