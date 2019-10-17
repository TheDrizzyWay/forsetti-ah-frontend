import React from 'react';
import { shallow } from 'enzyme';
import {  SideDrawer } from '../../components/SideDrawer';

const props = {
  history: {
    location: {
      pathname: ''
    }
  }
};

describe('Side Drawer', () => {
  test('should render side drawer correctly', () => {
    const wrapper = shallow(<SideDrawer show='true' {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
