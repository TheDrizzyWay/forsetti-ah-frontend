import { GET_NOTIFICATION, LOADING_NOTIFICATION } from '../action-types';

const defaultState = {
  notifications: [],
  message: '',
  count: ''
};

/**
 * get notification reducers
 * @param {object} state
 * @param {object} action
 */
const getNotifications = (state = defaultState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        message: action.message,
        notifications: action.payload,
        count: action.payload.length,
        isLoading: false,
      };

    case LOADING_NOTIFICATION:
      return {
        isLoading: true,
      };

    default:
      return state;
  }
};

export default getNotifications;
