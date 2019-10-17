import articleReducer from '../../reducers/createArticle.reducers';
import { createArticleActionTypes } from '../../action-types';

const initialState = {
  isLoading: false,
  saved: false
};

const payload = {
  title: 'sample',
  body: 'sample article body',
};

const { CREATE_ARTICLE_LOADING, CREATE_ARTICLE, CREATE_ARTICLE_ERROR } = createArticleActionTypes;

describe('Create Article Reducer', () => {
  it('should return initial state', () => {
    expect(articleReducer(undefined, { type: '@@INIT'})).toEqual(initialState);
  });

  it('should return CREATE_ARTICLE_LOADING state when loading', () => {
    expect(articleReducer(undefined, {
      type: CREATE_ARTICLE_LOADING,
      payload: true
    })).toEqual({
      isLoading: true,
      saved: false
    });
  });

  it('should return CREATE_ARTICLE_ERROR state when creation is unsuccessful', () => {
    expect(articleReducer(undefined, {
      type: CREATE_ARTICLE_ERROR,
      payload: 'error'
    })).toEqual({ error: 'error', isLoading: false });
  });

  it('should return CREATE_ARTICLE on succesful post', () => {
    expect(articleReducer(undefined, {
      type: CREATE_ARTICLE,
      payload
    })).toEqual({
      createArticle: payload,
      isLoading: false,
      saved: true
    });
  });

  it('should return CREATE_ARTICLE_PUBLISHED on succesful post', () => {
    expect(articleReducer(undefined, {
      type: 'CREATE_ARTICLE_PUBLISHED',
      payload
    })).toEqual({
      createArticle: payload,
      isLoading: false,
      published: true,
    });
  });
});
