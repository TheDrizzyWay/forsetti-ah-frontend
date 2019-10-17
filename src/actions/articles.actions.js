import { createArticleActionTypes } from '../action-types';
import axiosInstance from '../config/axiosConfig';

const {
  CREATE_ARTICLE_LOADING,
  CREATE_ARTICLE,
  CREATE_ARTICLE_ERROR,
  CREATE_ARTICLE_PUBLISHED
} = createArticleActionTypes;

const setLoading = payload => ({
  type: CREATE_ARTICLE_LOADING,
  payload
});

const createArticleError = errorMessage => ({
  type: CREATE_ARTICLE_ERROR,
  payload: errorMessage
});

const createArticle = articleObject => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const token = localStorage.getItem('token');
    const {
      tagList, currentSlug, imageChanged, image, published
    } = articleObject;
    const method = currentSlug ? 'edit' : 'post';
    const formData = new FormData();

    Object.keys(articleObject).forEach(key => formData.append(key, articleObject[key]));
    formData.delete('currentSlug');
    formData.delete('tagList');
    formData.delete('imageChanged');
    tagList.forEach((tag) => {
      formData.append('tagList[]', tag);
    });
    if (!imageChanged) {
      formData.delete('image');
    }

    const header = {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`
    };

    if (method === 'post') {
      const { data } = await axiosInstance.post('/article', formData, {
        headers: header
      });
      localStorage.setItem('slug', data.data.article.slug);
      const actionType = published ? CREATE_ARTICLE_PUBLISHED : CREATE_ARTICLE;
      return dispatch({
        type: actionType,
        payload: data.data
      });
    }

    const { data } = await axiosInstance.put(`/article/${currentSlug}`, formData, {
      headers: header
    });
    const actionType = published ? CREATE_ARTICLE_PUBLISHED : CREATE_ARTICLE;
    return dispatch({
      type: actionType,
      payload: data.data
    });
  } catch (err) {
    const { response: { data: { message } } } = err;
    return dispatch(createArticleError(message));
  }
};

export { setLoading, createArticle, createArticleError };
