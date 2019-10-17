import { createArticleActionTypes } from '../action-types';

const {
  CREATE_ARTICLE_LOADING,
  CREATE_ARTICLE,
  CREATE_ARTICLE_PUBLISHED,
  CREATE_ARTICLE_ERROR
} = createArticleActionTypes;
const initialState = {};

const createArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ARTICLE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        saved: false
      };
    case CREATE_ARTICLE:
      return {
        ...state,
        createArticle: action.payload,
        isLoading: false,
        saved: true
      };
    case CREATE_ARTICLE_PUBLISHED:
      return {
        ...state,
        createArticle: action.payload,
        isLoading: false,
        published: true
      };
    case CREATE_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return {
        ...state,
        isLoading: false,
        saved: false
      };
  }
};

export default createArticleReducer;
