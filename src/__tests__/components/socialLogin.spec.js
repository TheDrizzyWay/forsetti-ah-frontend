import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { SocialLogin } from '../../components';

configure({ adapter: new Adapter() });

describe('<SocialLogin />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SocialLogin />);
  });
  it('should check for the divs', () => {
    expect(component.find('div')).toHaveLength(4);
  });
  it('should check for the images', () => {
    expect(component.find('img')).toHaveLength(3);
  });
  it('renders correctly when there are no props', () => {
    const tree = renderer.create(<SocialLogin />).toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});
