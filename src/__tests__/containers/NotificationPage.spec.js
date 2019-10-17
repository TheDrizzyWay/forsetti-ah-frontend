import React from 'react';
import { shallow } from 'enzyme';
import { Notification, mapStateToProps } from '../../containers/NotificationPage';

const payload = {
    notifications: [{
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
    }],
}
describe('Notification page', () => {
  it('should render Notification page component', () => {
      const getNotifications = jest.fn();
      const wrapper = shallow(<Notification 
        notifications={{notifications: payload.notifications}}
        getNotifications={getNotifications}
         />);

      expect(wrapper).toMatchSnapshot();
  });

  it('should render Notification page component with condition', () => {
    const getNotifications = jest.fn();
    const wrapper = shallow(<Notification 
      notifications={{notifications: []}}
      getNotifications={getNotifications}
       />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render Notification page component with condition', () => {
    const getNotifications = jest.fn();
    const wrapper = shallow(<Notification 
      notifications={{notifications: []}}
      getNotifications={getNotifications}
      isLoading={true}
      />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should return mapStateToProps object', () => {
      const action = mapStateToProps(payload);
      
      expect(action).toEqual({
          notifications: payload.notifications
      });
  });
});
