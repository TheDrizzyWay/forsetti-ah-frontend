import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../components/common/Header';

const props = {
  history: {
    location: {
      pathname: ''
    }
  }
};

describe('<Header />', () => {
  const notification = {
    notification : {
      count: 0
    }
  }
  it('renders correctly', () => {
    const tree = shallow(<Header {...props} notifications={notification} />);
    expect(tree).toMatchSnapshot();
  });
});
