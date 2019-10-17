import {
  CLOSE_FORGOT_MODAL, OPEN_FORGOT_MODAL, FORGOT_PASSWORD_BEGIN, FORGOT_PASSWORD_SUCCESS, GET_RESET_TOKEN,
  FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_BEGIN, RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE, OPEN_RESET_MODAL, CLOSE_RESET_MODAL
} from '../action-types';

const initialState = {
  isModalOpen: false,
  isResetModalOpen: false,
  submit: false,
  message: '',
  status: '',
  token: ''
};

const resetPasswordReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case CLOSE_FORGOT_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case OPEN_FORGOT_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case OPEN_RESET_MODAL:
      return {
        ...state,
        isResetModalOpen: true,
      };
    case CLOSE_RESET_MODAL:
      return {
        ...state,
        isResetModalOpen: false,
      };
    case GET_RESET_TOKEN:
      return {
        ...state,
        token: actions.payload.token
      };
    case FORGOT_PASSWORD_BEGIN:
      return {
        ...state,
        submit: true
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        message: actions.payload.message,
        status: actions.payload.status,
        submit: false,
        isModalOpen: false,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        message: actions.payload.message,
        status: actions.payload.status,
        submit: false
      };
    case RESET_PASSWORD_BEGIN:
      return {
        ...state,
        submit: true,
        message: '',
        status: ''
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        message: actions.payload.message,
        status: actions.payload.status,
        submit: false
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        message: actions.payload.message,
        status: actions.payload.status,
        submit: false
      };
    default:
      return state;
  }
};

export { resetPasswordReducers, initialState };
