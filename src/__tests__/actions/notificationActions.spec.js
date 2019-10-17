import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import instance from '../../config/axiosConfig';
import { GET_NOTIFICATION, LOADING_NOTIFICATION } from '../../action-types';
import { getNotifications, getUserNotifications } from '../../actions';

const message = 'You have 2 new notifications.';

const payload = [{
    id: 'fd20295d-4ba4-4d5f-9073-9a8d6dbcf09e',
    notification: 'Samorano David has published a new article',
    type: 'article', 
    isSeen: false, 
    typeId: 'ddbc0491-f25b-44c1-a5df-25795fc7fada',
    createdAt: '2019-05-11T19:58:07.100Z'
    },
    { id: 'd6ddf3d0-1f4a-483b-8cc2-52224ead077b',
    isSeen: false,
    notification: '<i>Mofe Okoro</i> is now following you.',
    type: 'follow',
    typeId: '7139d3af-b8b4-44f6-a49f-9305791700f4',
    updatedAt: '2019-05-11T19:58:07.100Z',
    userId: 'ffffabd5-4a5b-45eb-8247-ba47a978070e',
}];

describe('User Notifications', () => {
    const middleWares = [thunk]
    const mockStore = configureStore(middleWares);

    beforeEach(() => {
        moxios.install(instance);
      });
    afterEach(() => {
    moxios.uninstall(instance);
    });
  it('should render default values for action', () => {
      const action = getNotifications();

      expect(action).toEqual({
          type: GET_NOTIFICATION,
          message: '',
          payload: []
      })
  });

  it('should render default values for action', () => {
    const action = getNotifications(payload,message);

        expect(action).toEqual({
            type: GET_NOTIFICATION,
            message,
            payload
        })
    });

    it('should test get notifications action creator', () => {
        const payload = {
            payload : [] 
        };
        moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: payload,
        });
        });
        const store = mockStore({ notifications: [] });

        const expected = [LOADING_NOTIFICATION, GET_NOTIFICATION ]
        return store.dispatch(getUserNotifications()).then(() => {
            const dispatchedActions = store.getActions();
            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expected);
        });
    });
});
