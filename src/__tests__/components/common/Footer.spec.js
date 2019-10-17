import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Footer } from '../../../components';

describe('<Footer />', () => {
  let component;
  beforeAll(() => {
    component = mount(<Footer />);
  });
  it('should have a ul element', () => {
    expect(component.find('footer')).toHaveLength(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
