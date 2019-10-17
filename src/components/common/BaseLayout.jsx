import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { AuthorizationHOCUnit } from '../AuthorizationHOC';
import { SideDrawerComponent } from '../SideDrawer';
import { HeaderComponent } from './Header';
import Footer from './Footer';
import LoginModal from '../LoginModal';
import { LandingPageComponent } from '../../containers/LandingPage';
import CreateArticlePage from '../../containers/CreateArticle';
import NotFoundPage from '../../containers/NotFoundPage';
import Article from '../../containers/Article';
import { showSideDrawerAction, hideSideDrawerAction } from '../../actions';
import { AuthSocialComponent } from '../AuthSocial';
import SignUpDefault from '../SignUpForm';
import NotificationPage from '../../containers/NotificationPage';

import { ForgotPassword } from '../resetPassword/ForgotPassword';
import GetResetPasswordToken from '../resetPassword/GetResetPasswordToken';
import { ResetPassword } from '../resetPassword/ResetPassword';
import { Profile } from '../UserProfile';
import { EditProfile } from '../EditUserProfile';

const BaseLayoutComponent = ({
  showSideDrawer, modal, dispatch, reset
}) => {
  const showSideDrawerHandler = () => {
    dispatch(showSideDrawerAction());
  };

  const hideSideDrawerHandler = () => {
    dispatch(hideSideDrawerAction());
  };
  const { showSideDrawer: showSideDraw } = showSideDrawer;
  const { showModal } = modal;
  const { isModalOpen, isResetModalOpen } = reset;
  return (
    <Router>
      <SideDrawerComponent show={showSideDraw} closed={hideSideDrawerHandler} />
      <LoginModal isOpen={showModal} />
      <HeaderComponent clicked={showSideDrawerHandler} />
      <ForgotPassword isOpen={isModalOpen} />
      <ResetPassword isOpen={isResetModalOpen} />
      <Switch>
        <Route path='/' component={LandingPageComponent} exact />
        <AuthorizationHOCUnit exact path='/article/new' component={CreateArticlePage} />
        <Route exact path='/article/:slug' component={Article} />
        <Route path='/auth/social' component={AuthSocialComponent} />
        <AuthorizationHOCUnit exact path='/profiles/notification' component={NotificationPage} />
        <AuthorizationHOCUnit exact path='/profile' component={Profile} />
        <AuthorizationHOCUnit exact path='/editProfile' component={EditProfile} />
        <Route path='/signup' component={SignUpDefault} />
        <Route path='/auth/resetpassword' component={GetResetPasswordToken} />
        <Route path='/profile' component={Profile} />
        <Route component={NotFoundPage} />
      </Switch>
      <div className='footer'>
        <Row>
          <Col md={{ size: 12 }}>
            <Footer />
          </Col>
        </Row>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  const { showSideDrawer, modal, reset } = state;
  return { showSideDrawer, modal, reset };
};

const BaseLayout = connect(mapStateToProps)(BaseLayoutComponent);

export {
  BaseLayout,
  BaseLayoutComponent
};
