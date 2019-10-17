import {
  COMMENT_LOADING,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  POST_THREAD_COMMENT
} from '../action-types';
import instance from '../config/axiosConfig';

const token = localStorage.getItem('token') || null;
const commentLoading = payload => ({
  type: COMMENT_LOADING,
  payload
});

const postCommentError = errorMessage => ({
  type: POST_COMMENT_ERROR,
  payload: errorMessage
});

const postComment = commentObject => async (dispatch) => {
  try {
    dispatch(commentLoading(true));
    let { select } = commentObject;
    if (select === 'comment') select = 'normal';
    const requestBody = JSON.stringify({
      comment: commentObject.comment,
      commentType: select
    });

    const { data } = await instance.post(`/article/${commentObject.slug}/comment`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    });
    dispatch(commentLoading(false));
    return dispatch({
      type: POST_COMMENT_SUCCESS,
      payload: data.data
    });
  } catch (err) {
    dispatch(commentLoading(false));
    const { response: { data: { message } } } = err;
    return dispatch(postCommentError(message));
  }
};

const postThreadComment = commentObject => async (dispatch) => {
  try {
    const { threadComment, slug, id } = commentObject;
    let { select } = commentObject;
    if (select === 'comment') select = 'normal';

    const requestBody = JSON.stringify({
      comment: threadComment,
      commentType: select
    });

    const { data } = await instance.post(`/article/${slug}/comment/${id}/thread`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    });

    return dispatch({
      type: POST_THREAD_COMMENT,
      payload: data.data
    });
  } catch (err) {
    const { response: { data: { message } } } = err;
    return dispatch(postCommentError(message));
  }
};

export {
  postComment,
  postCommentError,
  postThreadComment,
  commentLoading
};
