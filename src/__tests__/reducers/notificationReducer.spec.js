import { GET_NOTIFICATION, LOADING_NOTIFICATION } from '../../action-types';
import { notificationReducers } from '../../reducers';

const defaultState = {
    notifications: [],
    message: '',
    count: ''
};
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
const message = 'This is a test';

describe('Notification Reducer', () => {
  it('should return defualt state', () => {
      const reducer = notificationReducers(undefined, { type: '@@INIT'});

      expect(reducer).toEqual(defaultState);
  });

  it('should return get notification state', () => {
    const reducer = notificationReducers(defaultState, {
        type: GET_NOTIFICATION,
        message,
        payload
    });

    expect(reducer).toEqual({
        notifications: payload,
        message,
        count: 2,
        isLoading:false
    })
  });

  it('should return loading notification state', () => {
    const reducer = notificationReducers(defaultState, {
        type: LOADING_NOTIFICATION,
    });

    expect(reducer).toEqual({
        isLoading:true
    })
  });
});
