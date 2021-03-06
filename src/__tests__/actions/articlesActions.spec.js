import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';
import {
    loadingStateHandler,
    getArticles,
    getArticlesSuccessHandler,
    getArticlesFailureHandler
} from '../../actions';
import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAIL, GET_ARTICLES_BEGIN } from '../../action-types';
import { articles as articlesMock, articleFail } from '../../__mocks__/testsMockData/articles.mock-data';

describe('Get articles actions', () => {
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    test('should setup loading state action object', () => {
        expect(loadingStateHandler()).toEqual({
            type: GET_ARTICLES_BEGIN
        });
    });

    test('should setup article success action object', () => {
        expect(getArticlesSuccessHandler(articlesMock, 0)).toEqual({
            type: GET_ARTICLES_SUCCESS,
            payload: articlesMock,
            nextpage: true
        });
    });

    test('should setup article fail action object', () => {
        expect(getArticlesFailureHandler(articleFail)).toEqual({
            type: GET_ARTICLES_FAIL,
            payload: articleFail
        });
    });

    test('should get all articles', () => {
        const payload = {
            data: {
                articles: {
                    nextpage: true,
                    rows: articlesMock
                },
                pages: 1
            }
        };
        const store = mockStore({ articles: [] });
        axiosInstance.get = jest.fn().mockReturnValue(Promise.resolve({data: payload}))
        const expectedActions = [{ type: GET_ARTICLES_BEGIN }, { type: GET_ARTICLES_SUCCESS, payload, count: 1 }];
        return store.dispatch(getArticles(1))
                .then(() => {
                    expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                })
    });

    test('should return error object', () => {
        const payload = 'error message';
        const store = mockStore({ articles: [] });
        axiosInstance.get = jest.fn().mockReturnValue(Promise.reject({data: payload}))
        const expectedActions = [{ type: GET_ARTICLES_BEGIN }, { type: GET_ARTICLES_FAIL, payload, count: 1 }];
        return store.dispatch(getArticles(1))
                .then(() => {
                    expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
                })
    });
});
