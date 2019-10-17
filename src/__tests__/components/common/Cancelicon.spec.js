import React from 'react';
import { shallow } from 'enzyme';
import CancelIcon from '../../../components/common/CancelIcon';

describe('Cancel Icon', () => {
    const clicked = jest.fn();
    const event = {
        clicked
    }
  test('should render cancel icon', () => {
    const icon = shallow(<CancelIcon {...event} />);
  });
});

