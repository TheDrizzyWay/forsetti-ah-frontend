import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Backdrop } from '../../../components';

describe('<Backdrop />', () => {
  it('should contain div if props is true', () => {
    const props = {
      open: false,
    };
    const BackdropComponent = shallow(<Backdrop {...props} />);
    expect(BackdropComponent.containsMatchingElement(<div style={{ display: 'block' }} className="backdrop" />))
      .toEqual(false);
  });
  it('should contain div if props is true', () => {
    const props = {
      open: true,
    };
    const BackdropComponent = shallow(<Backdrop {...props} />);
    expect(BackdropComponent.containsMatchingElement(<div style={{ display: 'block' }} className="backdrop" />))
      .toEqual(true);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Backdrop open />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
