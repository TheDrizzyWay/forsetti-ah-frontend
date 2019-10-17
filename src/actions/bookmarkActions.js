import { BOOKMARK_ARTICLE_SUCCESS, BOOKMARK_ARTICLE_FAILURE } from '../action-types';
import axios from '../config/axiosConfig';

const token = window.localStorage.getItem('token');
const bookmarkArticleSuccessHandler = status => ({
  type: BOOKMARK_ARTICLE_SUCCESS,
  status
});
const bookmarkArticleFailureHandler = status => ({
  type: BOOKMARK_ARTICLE_FAILURE,
  status
});


const bookmarkArticle = articleId => async (dispatch) => {
  try {
    const response = await axios.post(`/article/${articleId}/bookmark`, articleId, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return dispatch(bookmarkArticleSuccessHandler(response.status));
  } catch (error) {
    return dispatch(bookmarkArticleFailureHandler(error, error));
  }
};

export {
  bookmarkArticle,
  bookmarkArticleSuccessHandler,
  bookmarkArticleFailureHandler
};
