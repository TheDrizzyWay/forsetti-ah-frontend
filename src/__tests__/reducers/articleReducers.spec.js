import { articleReducer, initialState } from '../../reducers/articleReducers';

import { GET_ARTICLES_BEGIN, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL } from '../../action-types';
import { articles as articlesMock } from '../../testUtils/testsMockData/articles.mock-data';

describe('articleReducers', () => {
  test('should return initial state', () => {
    expect(articleReducer(undefined, {})).toEqual({
        ...initialState
    });
  });

  test('should handle GET_ARTICLES_BEGIN action', () => {
    expect(articleReducer(initialState, 
        {type: GET_ARTICLES_BEGIN}
    )).toEqual({
        ...initialState,
        isLoading: true
    });
  });

  test('should handle GET_ARTICLES_SUCCESS action', () => {
    expect(articleReducer(initialState, 
        { type: GET_ARTICLES_SUCCESS, payload: articlesMock, count: 1 }
    )).toEqual({
        ...initialState,
        articles: articlesMock,
        count: 1,
        isLoading: false
    });
  });

  test('should handle GET_ARTICLES_FAIL action', () => {
    expect(articleReducer(initialState, 
        { type: GET_ARTICLES_FAIL, payload: 'Request failed with status code 404' }
    )).toEqual({
        ...initialState,
        articlesError: expect.any(String),
        isLoading: false
    });
  });
});
