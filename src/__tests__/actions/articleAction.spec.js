import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { getSingleArticle, singleArticle } from '../../actions';
import { GET_SINGLE_ARTICLE, ARTICLE_NOT_FOUND } from '../../action-types';
import axios from '../../config/axiosConfig';

const article = {
  data: { data: [{
    author: {
      id: 'ffffabd5-4a5b',
      bio: 'test bio',
      image: 'image',
      username: 'john doe',
    },
    id: 'ffffabd5-4a5b',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    claps: '2 claps',
    comments: '0 comments',
    description: 'Lorem ipsum dolor sit amet',
    rating: '0',
    readingTime: '2',
    slug: 'Lorem ipsum dolor sit amet-12345',
    title: 'Lorem ipsum dolor sit amet'
  }]
}
};

const error = {
  message: 'Article not found'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Get Single article actions', () => {
  test('should return default state', () => {
    const action = singleArticle();
    expect(action).toEqual({
      type: GET_SINGLE_ARTICLE,
      article: {}
    });
  });

  test('should return an single article data', () => {
    const action = singleArticle(article);
    expect(action).toEqual({
      type: GET_SINGLE_ARTICLE,
      article: article.data.data[0]
    });
  });

  test('should return get single article object', () => {
    const store = mockedStore({});
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: article }));
    const expected = [{
      type: GET_SINGLE_ARTICLE,
      article: article.data.data[0]
    }];

    return store.dispatch(getSingleArticle('1a74970d-ddc4-4097-93be-6264dcdc7f7c'))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected[0].type);
      });
  });

  test('should return article not found object', () => {
    const store = mockedStore({});
    axios.get = jest.fn().mockReturnValue(Promise.reject({ data: article }));
    const expected = [{
      type: ARTICLE_NOT_FOUND,
      error: error.message
    }];

    return store.dispatch(getSingleArticle('1a74970d-ddc4-4097-93be-6261fcdc7g7c'))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected[0].type);
      });
  });
});
