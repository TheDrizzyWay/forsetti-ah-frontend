import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getUserDataSuccess, getUserDataFailure, getUserData } from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const user = {
  id: 'aa5dda36-0813-4edb-80f6-2f1d00095690',
  firstname: 'John',
  lastname: 'Doe',
  username: 'Johnny',
  email: 'john@doe.com',
};
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC…Dg3fQ.wzAZb7Kr';

const store = mockStore({});

const userArray = ['?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC…Dg3fQ.wzAZb7Kr',
  'userid=aa5dda36-0813-4edb-80f6-2f1d00095690', 'firstname=John', 'lastname=Doe',
  'username=Johnny', 'email=john@doe.com'];

const userArrayFail = ['?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZC…Dg3fQ.wzAZb7Kr',
  'userid=aa5dda36-0813-4edb-80f6-2f1d00095690', 'firstname=', 'lastname=Doe',
  'username=Johnny', 'email=john@doe.com'];

const userArrayError = ['?error=incompletedata'];

describe('Auth Actions', () => {
  it('should get an empty object with no data sent', () => {
    const action = getUserDataSuccess();
    expect(action).toEqual({
      type: 'GET_USER_DATA',
      payload: {
        user: {}
      }
    });
  });

  it('should get user data success with data sent', () => {
    const action = getUserDataSuccess(user);
    expect(action).toEqual({
      type: 'GET_USER_DATA',
      payload: {
        user,
        token: undefined
      }
    });
  });

  it('should fail in getting user data', () => {
    const action = getUserDataFailure();
    expect(action).toEqual({
      type: 'GET_USER_DATA_FAIL',
      payload: {
        error: 'You cannot be logged in'
      }
    });
  });

  it('should create an action to get user data', () => {
    store.dispatch(getUserData(userArray));
    expect(store.getActions()).toEqual([{
      type: 'GET_USER_DATA',
      payload: {
        user,
        token
      }
    }]);
  });

  it('should create an action to return get user failure', () => {
    store.dispatch(getUserData(userArrayFail));
    expect(store.getActions()).toEqual([{
      type: 'GET_USER_DATA',
      payload: {
        user,
        token
      }
    },
    {
      type: 'GET_USER_DATA_FAIL',
      payload: {
        error: 'You cannot be logged in'
      }
    }]);
  });

  it('should create an action to return get user failure', () => {
    store.dispatch(getUserData(userArrayError));
    expect(store.getActions()).toEqual([{
      type: 'GET_USER_DATA',
      payload: {
        user,
        token
      }
    },
    {
      type: 'GET_USER_DATA_FAIL',
      payload: {
        error: 'You cannot be logged in'
      }
    }, {
      type: 'GET_USER_DATA_FAIL',
      payload: {
        error: 'You cannot be logged in'
      }
    }]);
  });
});
