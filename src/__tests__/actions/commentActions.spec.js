import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import instance from '../../config/axiosConfig';
import {
  COMMENT_LOADING,
POST_COMMENT_SUCCESS,
POST_COMMENT_ERROR,
POST_THREAD_COMMENT
} from '../../action-types';
import {
  postComment,
  postCommentError,
  postThreadComment,
  commentLoading
} from '../../actions';

const mockStore = configureMockStore([thunk]);
let store = mockStore({});

const commentObject = {
  comment: 'sample',
  commentType: 'comment',
  slug: 'jdgdj-78687'
};

const mockPayload = {
  data: {
      id: 'jhdg-347673hj',
      articleId: 'gdg648-ksjkdh76',
      comment: 'sample',
      commentType: 'comment',
      createdAt: Date.now(),
      userId: 'hdjfg-364-sjh6',
      usercomments: {
        firstname: 'Dimkpa',
        lastname: 'Mark',
        image: ''
      }
  }
};

describe('create comment actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('it should return correct action for loading state', () => {
    const action = commentLoading(true);
    expect(action).toEqual({
      type: COMMENT_LOADING,
      payload: true
    });
  });

  test('it should return correct action for error state', () => {
    const action = postCommentError('error message');
    expect(action).toEqual({
      type: POST_COMMENT_ERROR,
      payload: 'error message'
    });
  });

  test('should dispatch POST_COMMENT_SUCCESS on successfull post', async () => {
    instance.post = await jest.fn().mockReturnValue(Promise.resolve({ data: mockPayload }));

    const expectedAction = [
      {
        type: COMMENT_LOADING,
        payload: true
      },
      {
        type: COMMENT_LOADING,
        payload: false
      },
      {
        type: POST_COMMENT_SUCCESS,
        payload: mockPayload.data
      }
    ];
    store.dispatch(postComment(commentObject)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('should dispatch POST_THREAD_COMMENT on successfull thread post', async () => {
    instance.post = await jest.fn().mockReturnValue(Promise.resolve({ data: mockPayload }));

    const expectedAction = [
      {
        type: POST_THREAD_COMMENT,
        payload: mockPayload.data
      }
    ];
    store.dispatch(postThreadComment(commentObject)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  test('should return error object', async () => {
      instance.post = await jest.fn().mockReturnValue(Promise.reject({ response: { data: { message: 'error message' } } }));
      const expectedActions = [
        {
          type: COMMENT_LOADING,
          payload: false
        },
        {
          type: POST_COMMENT_ERROR,
          payload: 'error message'
        }
      ];
      return store.dispatch(postComment(commentObject)).catch(() => {
                expect(store.getActions()).toEqual(expectedAction);
           });
        });

        test('should return error objectfor thread comments', async () => {
            instance.post = await jest.fn().mockReturnValue(Promise.reject({ response: { data: { message: 'error message' } } }));
            const expectedActions = [{ type: POST_COMMENT_ERROR, payload: 'error message' }];
            return store.dispatch(postThreadComment(commentObject)).catch(() => {
                      expect(store.getActions()).toEqual(expectedAction);
                 });
              });
    });
