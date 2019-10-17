import commentsReducer from '../../reducers/comments.reducers';
import { COMMENT_LOADING, POST_COMMENT_ERROR } from '../../action-types';

const initialState = { isLoading: false };

describe('comments reducer', () => {
  it('should return initial state', () => {
      expect(commentsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should return COMMENT_LOADING state when loading', () => {
      expect(commentsReducer(undefined, {
          type: COMMENT_LOADING,
          payload: true
      })).toEqual({ isLoading: true });
  });

  it('should return POST_COMMENT_ERROR state when meetups are not retrieved', () => {
      expect(commentsReducer(undefined, {
          type: POST_COMMENT_ERROR,
          payload: 'error'
      })).toEqual({
          error: 'error',
          isLoading: false,
      });
  });
});
