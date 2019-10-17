import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import instance from '../../config/axiosConfig';
import { createArticleActionTypes } from '../../action-types';
import { setLoading, createArticle, createArticleError } from '../../actions';

const { CREATE_ARTICLE_LOADING, CREATE_ARTICLE, CREATE_ARTICLE_ERROR } = createArticleActionTypes;
const mockStore = configureMockStore([thunk]);
const store = mockStore({});

const articleInfo = {
  title: 'sample',
  description: 'sample article body...',
  body: 'sample article body',
  published: false
};

const mockPayload = {
  data: {
    article: {
      id: '3485268745682',
      slug: 'sample-74685638',
      title: 'sample',
      body: 'sample article body',
      description: 'sample article body...',
      published: false,
      createdAt: Date.now()
    },
    author: {
      firstname: 'Melanie',
      email: 'melanie@dara.com'
    }
  }
};

describe('create article actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('it should return correct action for loading state', () => {
    const action = setLoading(true);
    expect(action).toEqual({
      type: CREATE_ARTICLE_LOADING,
      payload: true
    });
  });

  test('it should return correct action for error state', () => {
    const action = createArticleError('error message');
    expect(action).toEqual({
      type: CREATE_ARTICLE_ERROR,
      payload: 'error message'
    });
  });

  test('should dispatch CREATE_ARTICLE on successfull post', () => {
    instance.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockPayload }));

    const expectedAction = [
      {
        type: CREATE_ARTICLE_LOADING,
        payload: true
      },
      {
        type: CREATE_ARTICLE,
        payload: mockPayload.data
      }
    ];

    store.dispatch(createArticle(articleInfo)).then(() => {
      expect(store.getActions()[0].type).toEqual(expectedAction[0].type);
      expect(store.getActions()[1].type).toEqual(expectedAction[1].type);
    });
  });

  test('should dispatch CREATE_ARTICLE_ERROR on error response', () => {
    instance.post = jest.fn().mockReturnValue(Promise.reject({ response: { data: { message: 'error message' } } }));

    const expectedAction = [
      {
        type: CREATE_ARTICLE_LOADING,
        payload: true
      }
    ];

    return store.dispatch(createArticle(articleInfo)).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
});
