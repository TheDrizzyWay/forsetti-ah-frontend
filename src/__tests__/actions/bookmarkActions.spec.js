import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { BOOKMARK_ARTICLE_SUCCESS, BOOKMARK_ARTICLE_FAILURE } from '../../action-types';
import { bookmarkArticle,
    bookmarkArticleSuccessHandler,
    bookmarkArticleFailureHandler } from '../../actions';

const payload = {
    status: 200,
}

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Bookmark actions', () => {
  it('should return correct action for bookmarkArticleSuccessHandler ', () => {
    const action = bookmarkArticleSuccessHandler();
    expect(action).toEqual({
      type: BOOKMARK_ARTICLE_SUCCESS
    });
  });
  it('should return correct action for bookmarkArticleSuccessHandler ', () => {
    const action = bookmarkArticleFailureHandler();
    expect(action).toEqual({
      type: BOOKMARK_ARTICLE_FAILURE
    });
  });

  it('should return correct dispatch after API call', () => {
    const response = {
      status: 200,
    }
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve(response));
    const expected = 'BOOKMARK_ARTICLE_SUCCESS';

    return store.dispatch(bookmarkArticle(payload, false))
      .then(() => {
        const dispatchedActions = store.getActions()[0];
        expect(dispatchedActions.type).toEqual(expected);
      });
  });

  it('should return incorrect dispatch after API call', () => {
    const response = {
      status: 200,
      data: {
        message: 'Article has been successfully bookmarked'
      }
    }
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.reject(response));
    const expected = 'BOOKMARK_ARTICLE_FAILURE';

    return store.dispatch(bookmarkArticle(payload, false))
      .then(() => {
        const dispatchedActions = store.getActions()[0];
        expect(dispatchedActions.type).toEqual(expected);
      });
  });
});