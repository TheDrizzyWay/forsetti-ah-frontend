import { BOOKMARK_ARTICLE_SUCCESS, BOOKMARK_ARTICLE_FAILURE } from '../action-types';

const initialState = {
  bookmarked: false,
  error: null
};

const bookmarkReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKMARK_ARTICLE_SUCCESS:
      return {
        ...state,
        bookmarked: true
      };
    case BOOKMARK_ARTICLE_FAILURE:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
export default bookmarkReducer;
