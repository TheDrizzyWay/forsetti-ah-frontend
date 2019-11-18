import { showSideDrawerAction, hideSideDrawerAction } from './navBarActions';
import {
  openModalAction,
  closeModalAction,
  openTagsModal,
  closeTagsModal,
  openSignupModalAction,
  closeSignUpModalAction
} from './modalActions';
import {
  loginUser,
  getUserData,
  getUserDataFailure,
  getUserDataSuccess,
  signupBegin,
  signupSuccess,
  signupFailure,
  signUpUser,
  logoutUser,
  onFailureHandler,
  onLoginSuccessHandler,
  loadingStateHandler as authLoadingHandler
} from './authActions';
import {
  bookmarkArticle,
  bookmarkArticleSuccessHandler,
  bookmarkArticleFailureHandler
} from './bookmarkActions';
import {
  loadingStateHandler,
  getArticlesSuccessHandler,
  getArticlesFailureHandler,
  getArticles,
  getSingleArticle,
  singleArticle,
  searchArticles,
  clapForArticle
} from './articlesActions';
import { setLoading, createArticle, createArticleError } from './createArticleActions';
import { getNotifications, getUserNotifications } from './notifcationActions';
import {
  closeModal,
  openModal,
  forgotPassword,
  resetPassword,
  getToken,
  openResetModal,
  closeResetModal
} from './resetPasswordActions';
import {
  getCurrentProfile,
  setProfileLoading,
  updateProfile,
  openReadStatsModal,
  closeReadStatsModal
} from './profileActions';
import {
  postComment,
  postCommentError,
  postThreadComment,
  commentLoading
} from './commentActions';

export {
  showSideDrawerAction,
  hideSideDrawerAction,
  loginUser,
  openModalAction,
  closeModalAction,
  openTagsModal,
  closeTagsModal,
  loadingStateHandler,
  getArticlesSuccessHandler,
  getArticlesFailureHandler,
  getArticles,
  getSingleArticle,
  singleArticle,
  setLoading,
  createArticle,
  createArticleError,
  getUserData,
  getUserDataFailure,
  getUserDataSuccess,
  openSignupModalAction,
  closeSignUpModalAction,
  signupBegin,
  signupSuccess,
  signupFailure,
  signUpUser,
  onFailureHandler,
  onLoginSuccessHandler,
  authLoadingHandler,
  getNotifications,
  getUserNotifications,
  closeModal,
  openModal,
  forgotPassword,
  resetPassword,
  getToken,
  openResetModal,
  closeResetModal,
  getCurrentProfile,
  setProfileLoading,
  updateProfile,
  logoutUser,
  bookmarkArticle,
  bookmarkArticleSuccessHandler,
  bookmarkArticleFailureHandler,
  openReadStatsModal,
  closeReadStatsModal,
  postComment,
  postCommentError,
  postThreadComment,
  commentLoading,
  searchArticles,
  clapForArticle
};
