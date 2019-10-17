import { GET_USER_DATA, GET_USER_DATA_FAIL } from '../../action-types';
import { authReducer, initialState } from '../../reducers/authReducer'

const user = {
  firstname: 'John',
  lastname: 'Doe',
  username: 'Johnny',
  email: 'john@doe.com',
};

const error = 'You cannot be logged in';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC…Dg3fQ.wzAZb7Kr';

describe('authReducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      ...initialState
    });
  });
  it('should handle GET_USER_DATA', () => {
    expect(authReducer(initialState, {
      type: GET_USER_DATA,
      payload: { user }
    })).toEqual({
      ...initialState,
      redirect: true,
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
      },
      token: undefined,
    });
  });
  it('should handle GET_USER_DATA_FAIL', () => {
    expect(authReducer(initialState, {
      type: GET_USER_DATA_FAIL,
      payload: { error }
    })).toEqual({
      ...initialState,
      redirect: false,
      error,
    });
  });
});
