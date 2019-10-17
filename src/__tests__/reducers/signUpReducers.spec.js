import { authReducer, initialState } from '../../reducers/authReducer';
import { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../action-types';

const userObject = {
  firstname: 'John',
  lastname: 'Doe',
  username: 'Johnny4444',
  email: 'john@doe.com',
  password: 'johnny3334'
};

const error = {};

describe('authReducer', () => {

  it('should handle SIGNUP_BEGIN', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_BEGIN
    })).toEqual({
      submit: true,
      isLoading: true
    });
  });

  it('should handle SIGNUP_SUCCESS', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_SUCCESS,
      payload: { userObject, message: 'Signed up successfully', token: '1234567890' }
    })).toEqual({
      submit: false,
      redirect: true,
      user: userObject,
      message: 'Signed up successfully',
      token: '1234567890',
      isLoading: false
    });
  });

  it('should handle SIGNUP_FAILURE', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_FAILURE,
      message: 'Something very strange happened'
    })).toEqual({
      redirect: false,
      submit: false,
      message: 'Something very strange happened',
      isLoading: false
    });
  });
});
