import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_BEGIN,
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND
} from '../action-types';
import axios from '../config/axiosConfig';

const loadingStateHandler = nextPageValue => ({
  type: GET_ARTICLES_BEGIN,
  nextPageValue
});

const getArticlesSuccessHandler = (payload = [], nextPage = false) => ({
  type: GET_ARTICLES_SUCCESS,
  payload,
  nextPage
});

const getArticlesFailureHandler = (payload = '') => ({
  type: GET_ARTICLES_FAIL,
  payload
});

const getArticles = (page, nextPageValue) => async (dispatch) => {
  dispatch(loadingStateHandler(nextPageValue));
  try {
    const response = await axios.get(`/article?page=${page}`);
    const { rows, nextPage } = response.data.data.articles;
    return dispatch(getArticlesSuccessHandler(rows, nextPage));
  } catch (error) {
    return dispatch(getArticlesFailureHandler(error.message));
  }
};

const singleArticle = (data = {}) => {
  const article = data.data === undefined ? {} : data.data.data[0];
  return {
    type: GET_SINGLE_ARTICLE,
    article
  };
};

const articleNotFound = (error = '') => ({
  type: ARTICLE_NOT_FOUND,
  error,
});

const getSingleArticle = (slug, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    const res = await axios.get(`/article/${slug}`, config);
    return dispatch(singleArticle(res));
  } catch (error) {
    return dispatch(articleNotFound(error.message));
  }
};

export {
  getSingleArticle,
  singleArticle,
  getArticles,
  loadingStateHandler,
  getArticlesSuccessHandler,
  getArticlesFailureHandler,
  articleNotFound
};
