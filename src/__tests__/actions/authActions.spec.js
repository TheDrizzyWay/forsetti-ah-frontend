import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../../action-types';
import {
  loginUser,
  loadingStateHandler,
  onLoginSuccessHandler,
  onFailureHandler,
  logoutUser
} from '../../actions/authActions';


const user= {
  email: 'd.mark@example.com',
  firstname: 'Dimkpa',
  id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e',
  lastname: 'Mark',
  username: 'Dimkpa'
};

const loginObject = {
  email: 'd.mark@example.com',
  password: 'soldier123'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Auth actions', () => {
  it('should return correct action for loadingStateHandler ', () => {
    const action = loadingStateHandler();
    expect(action).toEqual({
      type: LOGIN_USER_BEGIN
    });
  });

  it('should return correct action for onLoginSuccessHandler ', () => {
    const response = {};
    const rememberLogin = true;

    const action = onLoginSuccessHandler(response, rememberLogin);
    expect(action).toEqual({
      type: LOGIN_USER_SUCCESS,
      payload: response,
      rememberLogin
    });
  });

  it('should return correct action for onLoginSuccessHandler default', () => {

    const action = onLoginSuccessHandler();
    expect(action).toEqual({
      type: LOGIN_USER_SUCCESS,
      payload: {},
      rememberLogin: false
    });
  });

  it('should return correct action for onFailureHandler ', () => {
    const response = {};

    const action = onFailureHandler(response);
    expect(action).toEqual({
      type: LOGIN_USER_FAILURE,
      payload: response
    });
  });

  it('should return correct dispatch after API call', () => {

    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: user }));
    const expected = {
      type: LOGIN_USER_BEGIN,
      payload: user,
      rememberLogin: false
    };

    return store.dispatch(loginUser(loginObject, false))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });

  it('should return incorrect dispatch after API call', () => {
    const response = {
      response: {
        data: 'incorrect credentials'
      }
    }
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.reject(response));
    const expected = [LOGIN_USER_BEGIN, LOGIN_USER_FAILURE];

    return store.dispatch(loginUser(loginObject, false))
      .then(() => {
        const dispatchedActions = store.getActions();
        const actionTypes = dispatchedActions.map(action => action.type);
        expect(actionTypes).toEqual(expected);
      });
  });

  it('should return logout user action creator', () => {
    const store = mockedStore({});

    return store.dispatch(logoutUser())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(LOGOUT_USER)
    });
  });
});
