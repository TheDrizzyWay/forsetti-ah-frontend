import {
  CLOSE_FORGOT_MODAL,
  OPEN_FORGOT_MODAL,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  GET_RESET_TOKEN,
  OPEN_RESET_MODAL,
  CLOSE_RESET_MODAL
} from '../action-types';
import axios from '../config/axiosConfig';

/**
 * Handle modal closing
 */
const closeModal = () => ({
  type: CLOSE_FORGOT_MODAL,
});

/**
 * Handle forgot password modal opening
 */
const openModal = () => ({
  type: OPEN_FORGOT_MODAL
});

/**
 * Handle reset password modal opening
 */
const openResetModal = () => ({
  type: OPEN_RESET_MODAL
});

/**
 * Handle reset password modal opening
 */
const closeResetModal = () => ({
  type: CLOSE_RESET_MODAL
});

/**
 * Handle getting the user token
 */
const getResetToken = (token = '') => ({
  type: GET_RESET_TOKEN,
  payload: { token }
});

/**
 * Initialize states for forgot password
 */
const forgotPasswordBegin = () => ({
  type: FORGOT_PASSWORD_BEGIN,
});

/**
 * Handle forgot password success
 * @param {Object} payload
 */
const forgotPasswordSuccess = (payload = {}) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

/**
 * Handle forgot password failure
 * @param {String} error
 */
const forgotPasswordFailure = (error = {}) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: error
});

/**
 * Initialize states for reset password
 */
const resetPasswordBegin = () => ({
  type: RESET_PASSWORD_BEGIN
});

/**
 * Handle reset password success
 * @param {Integer} status
 */
const resetPasswordSuccess = (payload = {}) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

/**
 * Handle reset password failure
 * @param {String} error
 */
const resetPasswordFailure = (error = {}) => ({
  type: RESET_PASSWORD_FAILURE,
  payload: error
});

/**
 * Forgot Password request
 * @param {Object} data
 */
const forgotPassword = data => async (dispatch) => {
  try {
    dispatch(forgotPasswordBegin());
    const response = await axios.post('/auth/forgotpassword', data);
    return dispatch(forgotPasswordSuccess(response.data));
  } catch (error) {
    return dispatch(forgotPasswordFailure(error.response.data));
  }
};

/**
 * Reset Password request
 * @param {Object} data
 * @param {String} token
 */
const resetPassword = (data, token) => async (dispatch) => {
  try {
    dispatch(resetPasswordBegin());
    const response = await axios.put(`/auth/resetpassword?token=${token}`, data);
    return dispatch(resetPasswordSuccess(response.data));
  } catch (error) {
    return dispatch(resetPasswordFailure(error.response.data));
  }
};

/**
 * Get token from url
 * @param {String} token
 */
const getToken = token => (dispatch) => {
  dispatch(openResetModal());
  return dispatch(getResetToken(token));
};

export {
  closeModal,
  openModal,
  forgotPassword,
  forgotPasswordBegin,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPassword,
  resetPasswordBegin,
  resetPasswordSuccess,
  resetPasswordFailure,
  getToken,
  openResetModal,
  closeResetModal,
  getResetToken
};
