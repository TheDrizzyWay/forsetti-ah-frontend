import { GET_NOTIFICATION, LOADING_NOTIFICATION } from '../action-types';
import axios from '../config/axiosConfig';

const getNotifications = (payload = [], message = '') => ({
  type: GET_NOTIFICATION,
  message,
  payload,
});

const notificationLoader = () => ({
  type: LOADING_NOTIFICATION,
});

/**
 * Get users notification action
 */
const getUserNotifications = token => async (dispatch) => {
  await dispatch(notificationLoader());
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  const response = await axios.get('/profiles/notifications', config);

  return dispatch(getNotifications(response.data.data, response.data.message));
};

export {
  getUserNotifications,
  getNotifications
};
