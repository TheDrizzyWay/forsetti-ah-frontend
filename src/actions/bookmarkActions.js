import { BOOKMARK_ARTICLE_SUCCESS, BOOKMARK_ARTICLE_FAILURE } from '../action-types';
import axios from '../config/axiosConfig';

const bookmarkArticleSuccessHandler = () => ({
  type: BOOKMARK_ARTICLE_SUCCESS
});
const bookmarkArticleFailureHandler = message => ({
  type: BOOKMARK_ARTICLE_FAILURE,
  payload: message
});

const bookmarkArticle = (articleId, token) => async (dispatch) => {
  try {
    await axios.post(`/articles/${articleId}/bookmark`, articleId, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    return dispatch(bookmarkArticleSuccessHandler());
  } catch (error) {
    return dispatch(bookmarkArticleFailureHandler(error.message));
  }
};

export {
  bookmarkArticle,
  bookmarkArticleSuccessHandler,
  bookmarkArticleFailureHandler
};
