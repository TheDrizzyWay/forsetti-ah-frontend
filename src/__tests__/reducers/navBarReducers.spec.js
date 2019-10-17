import { navBarReducer, initialState } from '../../reducers/navBarReducers';

import { HIDE_SIDEDRAWER, SHOW_SIDEDRAWER } from '../../action-types';

describe('navBarReducer', () => {
  it('should return initial state', () => {
    expect(navBarReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should handle SHOW_SIDEDRAWER action', () => {
    expect(navBarReducer(initialState, {
      type: SHOW_SIDEDRAWER,
      payload: null
    })).toEqual({
      ...initialState,
      showSideDrawer: true,
    });
  });

  it('should handle HIDE_SIDEDRAWER action', () => {
    expect(navBarReducer(initialState, {
      type: HIDE_SIDEDRAWER,
      payload: null
    })).toEqual({
      ...initialState,
      showSideDrawer: false,
    });
  });
});
