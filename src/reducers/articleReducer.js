import {
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND,
  CLAP_SUCCESS,
  CLAP_FAILURE,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  POST_THREAD_COMMENT
} from '../action-types';

const defaultState = {
  author: {
    id: '',
    bio: '',
    image: '',
    username: '',
  },
  id: '',
  body: '',
  claps: '',
  comments: [],
  description: '',
  rating: '',
  readingTime: '',
  slug: '',
  title: '',
  success: true
};

const singleArticleReducer = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case GET_SINGLE_ARTICLE:
      return {
        ...state,
        ...action.article,
        success: true
      };
    case ARTICLE_NOT_FOUND:
      return {
        ...state,
        message: action.error,
        success: false
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.payload.comment, ...state.comments]
      };
    case POST_COMMENT_ERROR:
      return {
        ...state,
        message: action.payload
      };
    case POST_THREAD_COMMENT:
      state.comments[state.comments.findIndex(({ id }) => id === action.payload.parentId)]
        .threadcomments.unshift(action.payload);
      return {
        ...state
      };
    case CLAP_SUCCESS:
      return {
        ...state,
        claps: state.claps + 1
      };
    case CLAP_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default singleArticleReducer;
