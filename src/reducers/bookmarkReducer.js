import { BOOKMARK_ARTICLE_SUCCESS, BOOKMARK_ARTICLE_FAILURE } from '../action-types';

const initialState = {
  status: ''
};

const bookmarkReducer = (state = initialState, action) => {
  const { type, status } = action;

  switch (type) {
    case BOOKMARK_ARTICLE_SUCCESS:
      return {
        status
      };
    case BOOKMARK_ARTICLE_FAILURE:
      return {
        status
      };
    default:
      return state;
  }
};
export default bookmarkReducer;
