import React from 'react';
import { shallow } from 'enzyme';
import NotificationCard from '../../../components/common/noficationCard';

describe('Notification Card', () => {
  it('should render NotificationCard correctly', () => {
      const wrapper = shallow(<NotificationCard />);
      expect(wrapper).toMatchSnapshot();
  });

  it('should render NotificationCard with article type props', () => {
    const notices = {
        type: 'article'
    }
    const wrapper = shallow(<NotificationCard {...notices} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render NotificationCard with comment type props', () => {
    const notices = {
        type: 'comment'
    }
    const wrapper = shallow(<NotificationCard {...notices} />);
    expect(wrapper).toMatchSnapshot();
  });
});
