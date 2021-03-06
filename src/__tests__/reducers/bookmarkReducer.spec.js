import bookmarkReducer from '../../reducers/bookmarkReducer';
import { BOOKMARK_ARTICLE_SUCCESS, BOOKMARK_ARTICLE_FAILURE } from '../../action-types';

const initialState = {
  bookmarked: false,
  error: null
  };

  describe('Bookmark reducer', () => {
    it('should return initial state', () => {
      expect(bookmarkReducer(undefined, { type: '@@INIT'})).toEqual(
        initialState
      );
    });
  
    it('should return BOOKMARK_ARTICLE_SUCCESS state for loading state', () => {
      expect(bookmarkReducer(initialState, {
        type: BOOKMARK_ARTICLE_SUCCESS
      })).toEqual({
        bookmarked: true,
        error: null
      });
    });

    it('should return BOOKMARK_ARTICLE_FAILURE state for loading state', () => {
      expect(bookmarkReducer(initialState, {
        type: BOOKMARK_ARTICLE_FAILURE,
        payload: 'error'
      })).toEqual({
        bookmarked: false,
        error: 'error'
      });
    });
  });
