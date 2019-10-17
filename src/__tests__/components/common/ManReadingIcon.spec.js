import React from 'react';
import { shallow } from 'enzyme';
import ManReadingIcon from '../../../components/common/ManReadingIcon';

describe('Man Reading Icon ', () => {
  it('should render ManReadingIcon correctly', () => {
      const wrapper = shallow(<ManReadingIcon />);

      expect(wrapper).toMatchSnapshot();
  });
});
