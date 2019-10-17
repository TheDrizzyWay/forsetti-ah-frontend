import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_BEGIN,
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND
} from '../action-types';
import axios from '../config/axiosConfig';

const loadingStateHandler = () => ({
  type: GET_ARTICLES_BEGIN
});

const getAritlcesSuccessHandler = (payload = [], count = 0) => ({
  type: GET_ARTICLES_SUCCESS,
  payload,
  count
});

const getAritlcesFailureHandler = (payload = '') => ({
  type: GET_ARTICLES_FAIL,
  payload
});

const getAritlces = page => async (dispatch) => {
  dispatch(loadingStateHandler());
  try {
    const response = await axios.get(`/article?page=${page}`);
    const { rows, count } = response.data.data.articles;
    return dispatch(getAritlcesSuccessHandler(rows, count));
  } catch (error) {
    return dispatch(getAritlcesFailureHandler(error.message));
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
  getAritlces,
  loadingStateHandler,
  getAritlcesSuccessHandler,
  getAritlcesFailureHandler,
  articleNotFound
};
