import { resetPasswordReducers, initialState } from '../../reducers/resetPasswordReducers';

import { CLOSE_FORGOT_MODAL,  FORGOT_PASSWORD_BEGIN, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE,
  OPEN_FORGOT_MODAL, OPEN_RESET_MODAL, CLOSE_RESET_MODAL, GET_RESET_TOKEN } from '../../action-types';

describe('Forgot/Reset Password reducer', () => {
  it('should return initial state', () => {
    expect(resetPasswordReducers(undefined, { type: '@@INIT'})).toEqual(
      initialState
    );
  });

  it('should return CLOSE_FORGOT_MODAL', () => {
    expect(resetPasswordReducers(initialState, {
      type: CLOSE_FORGOT_MODAL,
    })).toEqual({
      ...initialState,
      isModalOpen: false,
    });
  });

  it('should return OPEN_FORGOT_MODAL', () => {
    expect(resetPasswordReducers(initialState, {
      type: OPEN_FORGOT_MODAL,
    })).toEqual({
      ...initialState,
      isModalOpen: true,
    });
  });

  it('should return OPEN_RESET_MODAL', () => {
    expect(resetPasswordReducers(initialState, {
      type: OPEN_RESET_MODAL,
    })).toEqual({
      ...initialState,
      isResetModalOpen: true,
    });
  });

  it('should return CLOSE_RESET_MODAL', () => {
    expect(resetPasswordReducers(initialState, {
      type: CLOSE_RESET_MODAL,
    })).toEqual({
      ...initialState,
      isResetModalOpen: false,
    });
  });

  it('should return FORGOT_PASSWORD_BEGIN', () => {
    expect(resetPasswordReducers(initialState, {
      type: FORGOT_PASSWORD_BEGIN,
    })).toEqual({
      ...initialState,
      submit: true,
    });
  });

  it('should return FORGOT_PASSWORD_SUCCESS', () => {
    expect(resetPasswordReducers(initialState, {
      type: FORGOT_PASSWORD_SUCCESS,
      payload: {
        status: 200,
        message: 'A mail has been sent to your mail'
      }
    })).toEqual({
      ...initialState,
      status: 200,
      message: 'A mail has been sent to your mail'
    });
  });

  it('should return FORGOT_PASSWORD_FAILURE', () => {
    expect(resetPasswordReducers(initialState, {
      type: FORGOT_PASSWORD_FAILURE,
      payload: {
        status: 404,
        message: 'The email does not exist'
      }
    })).toEqual({
      ...initialState,
      submit: false,
      status: 404,
      message: 'The email does not exist'
    });
  });

  it('should return GET_RESET_TOKEN', () => {
    expect(resetPasswordReducers(initialState, {
      type: GET_RESET_TOKEN,
      payload: {
        token: 'hjfjkahfkjfha8833'
      }
    })).toEqual({
      ...initialState,
      token: 'hjfjkahfkjfha8833'
    });
  });
});
