import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, GET_ARTICLES_BEGIN } from '../action-types';

const initialState = {
  isLoading: false,
  articles: [],
  articlesError: ''
};

const articlesReducer = (state = initialState, action) => {
  const {
    type, payload, nextPage, nextPageValue
  } = action;
  switch (type) {
    case GET_ARTICLES_BEGIN:
      return {
        ...state,
        articles: nextPageValue ? state.articles : [],
        isLoading: true
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, ...payload],
        nextPage,
        isLoading: false
      };
    case GET_ARTICLES_FAIL:
      return {
        ...state,
        articlesError: payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export { articlesReducer, initialState };
