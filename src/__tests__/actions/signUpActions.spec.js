import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  signupBegin,
  signupSuccess,
  signupFailure,
  signUpUser
} from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const user = {
  firstname: 'John',
  lastname: 'Doe',
  username: 'Johnny29383',
  email: 'john@doe.com',
  password: 'johnny29383'
};

const token = 'mynameis7t890w084';

describe('Signup Auth Actions', () => {
  it('should begin the signup actions', () => {
    const action = signupBegin();
    expect(action).toEqual({
      type: 'SIGNUP_BEGIN'
    });
  });

  it('should create a success action', () => {
    const action = signupSuccess();
    expect(action).toEqual({
      type: 'SIGNUP_SUCCESS',
      payload: {}
    });
  });

  it('should create a failure action', () => {
    const action = signupFailure();
    expect(action).toEqual({
      type: 'SIGNUP_FAILURE',
      message: {}
    });
  });

  it('should dispatch the signup begin action', () => {
    store.dispatch(signUpUser(user));
    expect(store.getActions()).toEqual([{
      type: 'SIGNUP_BEGIN',
    },
    ]);
  });
});
