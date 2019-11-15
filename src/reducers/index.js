import { combineReducers } from 'redux';
import { navBarReducer } from './navBarReducers';
import { modalReducer } from './modalReducer';
import { authReducer } from './authReducer';
import { articlesReducer } from './articlesReducer';
import singleArticleReducer from './articleReducer';
import createArticleReducer from './createArticleReducer';
import { resetPasswordReducers } from './resetPasswordReducers';
import profileReducer from './profileReducers';
import bookmarkReducer from './bookmarkReducer';
import notificationReducer from './notificationReducer';
import commentsReducer from './commentsReducer';

const Reducer = combineReducers({
  showSideDrawer: navBarReducer,
  modal: modalReducer,
  auth: authReducer,
  articles: articlesReducer,
  article: singleArticleReducer,
  createArticle: createArticleReducer,
  notifications: notificationReducer,
  reset: resetPasswordReducers,
  profile: profileReducer,
  bookmark: bookmarkReducer,
  comments: commentsReducer
});

export default Reducer;
