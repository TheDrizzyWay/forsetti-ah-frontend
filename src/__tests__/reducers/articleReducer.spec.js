import { singleArticleReducer } from '../../reducers';
import {
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_ERROR,
  POST_THREAD_COMMENT
} from '../../action-types';

const article = {
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
  title: 'Lorem ipsum dolor sit amet',
  success: true
};

const comment = {
  comment: {
    id: 'jhd672-sjd6',
    comment: 'comment',
    commentType: 'normal'
  }
}

const defaultState = {
  author: {
    id: '',
    bio: '',
    image: '',
    username: '',
  },
  id: '',
  body: '',
  claps: '',
  comments: [],
  description: '',
  rating: '',
  readingTime: '',
  slug: '',
  title: '',
  success: true
};
const error = {
  message: 'Article not found'
}
test('should return empty array default', () => {
  const reducer = singleArticleReducer(undefined, { type: '@@INIT' });

  expect(reducer).toEqual(defaultState);
});

test('should return a single article object', () => {
  const reducer = singleArticleReducer(defaultState, {
    type: GET_SINGLE_ARTICLE,
    article
  });
  expect(reducer).toEqual({ ...article });
});

test('should return article not found object', () => {
  const reducer = singleArticleReducer(defaultState, {
    type: ARTICLE_NOT_FOUND,
    error: error.message
  });
  expect(reducer).toEqual({
    ...defaultState,
    message: error.message,
    success: false
  });
});

it('should return POST_COMMENT_SUCCESS on succesful post', () => {
  expect(singleArticleReducer(defaultState, {
    type: POST_COMMENT_SUCCESS,
    payload: comment
  })).toEqual({
    ...defaultState,
    comments: [comment.comment]
  });
});

it('should return POST_COMMENT_ERROR on error state', () => {
  expect(singleArticleReducer(defaultState, {
    type: POST_COMMENT_ERROR,
    payload: 'error message'
  })).toEqual({
    ...defaultState,
    message: 'error message'
  });
});
