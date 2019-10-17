import React from 'react';
import { shallow } from 'enzyme';
import ToastMessage from '../../../components/common/ToastMessage';

describe('Toast Message ', () => {
  it('should render ToastMessage correctly', () => {
      const wrapper = shallow(<ToastMessage />);

      expect(wrapper).toMatchSnapshot();
  });
});
