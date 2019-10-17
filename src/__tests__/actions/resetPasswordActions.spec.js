import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import {
  CLOSE_FORGOT_MODAL, FORGOT_PASSWORD_BEGIN, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_BEGIN, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
  OPEN_FORGOT_MODAL, OPEN_RESET_MODAL, GET_RESET_TOKEN, CLOSE_RESET_MODAL
 } from '../../action-types';
import { closeModal, forgotPassword, forgotPasswordBegin, forgotPasswordSuccess, forgotPasswordFailure,
  resetPasswordBegin, resetPasswordSuccess, resetPasswordFailure, resetPassword,
  openModal, openResetModal, closeResetModal, getResetToken } from '../../actions/resetPasswordActions';

const emailResponse = {
  status: 200,
  message: 'An email has been sent to you'
};

const passwordResponse = {
  status: 200,
  message: 'Password changed'
};

const email = {
  email: 'd.mark@example.com'
};

const password = {
  password: 'Hallo123343'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Reset Password actions', () => {
  it('should return correct action for closeModal ', () => {
    const action = closeModal();
    expect(action).toEqual({
      type: CLOSE_FORGOT_MODAL
    });
  });

  it('should return correct action for opening forgot password modal', () => {
    const action = openModal();
    expect(action).toEqual({
      type: OPEN_FORGOT_MODAL
    });
  });

  it('should return correct action for closing reset modal', () => {
    const action = closeResetModal();
    expect(action).toEqual({
      type: CLOSE_RESET_MODAL
    });
  });

  it('should return correct action for opening reset password modal', () => {
    const action = openResetModal();
    expect(action).toEqual({
      type: OPEN_RESET_MODAL
    });
  });

  it('should return correct action for getting the reset token', () => {
    const action = getResetToken();
    expect(action).toEqual({
      type: GET_RESET_TOKEN,
      payload: {
        token: ''
      }
    });
  });

  it('should return correct action for forgotPasswordBegin', () => {
    const action = forgotPasswordBegin();
    expect(action).toEqual({
      type: FORGOT_PASSWORD_BEGIN
    });
  });

  it('should return correct action for resetPasswordBegin', () => {
    const action = resetPasswordBegin();
    expect(action).toEqual({
      type: RESET_PASSWORD_BEGIN
    });
  });

  it('should return correct action for forgotPasswordSuccess', () => {
    const action = forgotPasswordSuccess();
    expect(action).toEqual({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: {}
    });
  });

  it('should return correct action for resetPasswordSuccess', () => {
    const action = resetPasswordSuccess();
    expect(action).toEqual({
      type: RESET_PASSWORD_SUCCESS,
      payload: {}
    });
  });

  it('should return correct action for forgotPasswordFailure', () => {
    const action = forgotPasswordFailure();
    expect(action).toEqual({
      type: FORGOT_PASSWORD_FAILURE,
      payload: {}
    });
  });

  it('should return correct action for resetforgotPasswordFailure', () => {
    const action = resetPasswordFailure();
    expect(action).toEqual({
      type: RESET_PASSWORD_FAILURE,
      payload: {}
    });
  });

  it('should return correct dispatch after API call for forgot password', () => {

    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: emailResponse }));
    const expected = {
      type: FORGOT_PASSWORD_BEGIN,
      payload: emailResponse
    };

    return store.dispatch(forgotPassword(email))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });

  it('should return correct dispatch after API call for reset password', () => {

    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: passwordResponse }));
    const expected = {
      type: RESET_PASSWORD_BEGIN,
      payload: passwordResponse
    };

    return store.dispatch(resetPassword(password))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });
});
