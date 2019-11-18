import {
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_BEGIN,
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND,
  SEARCH_ARTICLE_SUCCESS,
  CLAP_SUCCESS,
  CLAP_FAILURE
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

const searchSuccessHandler = payload => ({
  type: SEARCH_ARTICLE_SUCCESS,
  payload
});

const clapSuccessHandler = () => ({
  type: CLAP_SUCCESS
});

const clapFailureHandler = () => ({
  type: CLAP_FAILURE
});

const getArticles = (page, nextPageValue) => async (dispatch) => {
  dispatch(loadingStateHandler(nextPageValue));
  try {
    const response = await axios.get(`/articles?page=${page}`);
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
      headers: { Authorization: `Bearer ${token}` }
    };
    const res = await axios.get(`/articles/${slug}`, config);
    return dispatch(singleArticle(res));
  } catch (error) {
    return dispatch(articleNotFound(error.message));
  }
};

const searchArticles = searchTerm => async (dispatch) => {
  dispatch(loadingStateHandler());
  try {
    const { data } = await axios.get(`/articles/search?tag=${searchTerm}`);
    return dispatch(searchSuccessHandler(data.data.rows));
  } catch (error) {
    return dispatch(getArticlesFailureHandler(error.message));
  }
};

const clapForArticle = (articleId, token) => async (dispatch) => {
  try {
    await axios.post(`/articles/${articleId}/claps`, {}, {
      headers: { authorization: `Bearer ${token}` }
    });
    return dispatch(clapSuccessHandler());
  } catch (error) {
    return dispatch(clapFailureHandler());
  }
};

export {
  getSingleArticle,
  singleArticle,
  getArticles,
  loadingStateHandler,
  getArticlesSuccessHandler,
  getArticlesFailureHandler,
  articleNotFound,
  searchArticles,
  clapForArticle
};
