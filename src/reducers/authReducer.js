import {
  GET_USER_DATA,
  GET_USER_DATA_FAIL,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_USER
} from '../action-types';

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  userObject: '',
  token: '',
  rememberToken: false,
  redirect: false,
  submit: false,
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  username: '',
  errors: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_BEGIN':
      return {
        isLoading: true,
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        userObject: action.payload.data.user,
        token: action.payload.data.token,
        rememberToken: action.rememberLogin
      };
    case 'LOGIN_USER_FAILURE':
      if (action.payload.status === 400) {
        return {
          isLoading: false,
          status: action.payload.status,
          message: action.payload.message,
        };
      } if (action.payload.status >= 500) {
        return {
          isLoading: false,
          status: action.payload.status,
          message: 'Some error occurred. Please try again',
        };
      }
      return {
        isLoading: false,
        status: action.payload.status,
        message: 'Something strange is happening.',
      };

    case GET_USER_DATA:
      return {
        ...state,
        redirect: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case GET_USER_DATA_FAIL:
      return {
        ...state,
        redirect: false,
        error: action.payload.error,
      };
    case SIGNUP_BEGIN:
      return {
        submit: true,
        isLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        submit: false,
        redirect: true,
        user: action.payload.userObject,
        message: action.payload.message,
        token: action.payload.token,
        isLoading: false
      };
    case SIGNUP_FAILURE:
      return {
        submit: false,
        redirect: false,
        message: action.message,
        isLoading: false
      };
    case LOGOUT_USER:
      return {
        ...initialState,
      };

    default:
      return {
        ...state,
        isLoading: false
      };
  }
};

export { authReducer, initialState };
