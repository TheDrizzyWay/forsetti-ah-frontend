import { authReducer, initialState } from '../../reducers/authReducer';

import {
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER
} from '../../action-types';

const successState = {
  isLoading: false,
  status: '',
  message: '',
  userObject: {
    firstname: '',
    lastname: ''
  },
  token: '',
  rememberToken: false
};

const payload = {
    status: '',
    message: '',
    data: {
      user: {
        firstname: '',
        lastname: ''
      },
      token: '',
    },
};


describe('Auth reducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, { type: '@@INIT'})).toEqual(
      initialState
    );
  });

  it('should return LOGIN_USER_BEGIN state for loading state', () => {
    expect(authReducer(undefined, {
      type: LOGIN_USER_BEGIN,
    })).toEqual({
      isLoading: true,
    });
  });

  it('should return LOGIN_USER_SUCCESS state for success', () => {
    const reducer = authReducer(initialState, {
      type: LOGIN_USER_SUCCESS,
      payload,
      rememberLogin: false,
    });
    expect(reducer).toEqual(
      successState,
    );
  });

  it('should return LOGIN_USER_FAILURE state for 400', () => {
    const reducer = authReducer(initialState, {
      type: LOGIN_USER_FAILURE,
      payload: {
        status: 400,
        message: 'Invalid credentials',
      }
    });
    expect(reducer).toEqual({
      isLoading: false,
      status: 400,
      message: 'Invalid credentials',
    })
  });

  it('should return LOGIN_USER_FAILURE state for 500', () => {
    const reducer = authReducer(initialState, {
      type: LOGIN_USER_FAILURE,
      payload: {
        status: 500,
      }
    });
    expect(reducer).toEqual({
      isLoading: false,
      status: 500,
      message: 'Some error occurred. Please try again',
    })
  });

  it('should return LOGIN_USER_FAILURE state for 500', () => {
    const reducer = authReducer(initialState, {
      type: LOGIN_USER_FAILURE,
      payload: {
        status: 500,
      }
    });
    expect(reducer).toEqual({
      isLoading: false,
      status: 500,
      message: 'Some error occurred. Please try again',
    })
  });
  it('should return default LOGIN_USER_FAILURE state', () => {
    const reducer = authReducer(initialState, {
      type: LOGIN_USER_FAILURE,
      payload: {
        status: 422,
      }
    });
    expect(reducer).toEqual({
      isLoading: false,
      status: 422,
      message: 'Something strange is happening.',
    })
  });

  it('should should return user logout object', () => {
    const reducer = authReducer(initialState, {
      type: LOGOUT_USER,
    });

    expect(reducer).toEqual(initialState);
  });
});
