import { COMMENT_LOADING, POST_COMMENT_ERROR } from '../action-types';

const initialState = {
  isLoading: false,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case POST_COMMENT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state,
      };
  }
};

export default commentsReducer;
