import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { NavBarItems } from '../../../components';
import listItems from '../../../testUtils/testsMockData/navBarItems.mock-data';

describe('<VerticalListItems />', () => {
  let NavbarItemsComponent;
  beforeAll(() => {
    NavbarItemsComponent = mount(<NavBarItems menuItems={listItems} />);
  });
  it('should have a ul element', () => {
    expect(NavbarItemsComponent.find('ul')).toHaveLength(1);
  });
  it('should have 4 li elements', () => {
    expect(NavbarItemsComponent.find('li')).toHaveLength(4);
  });
  it('renders correctly when there are props', () => {
    const tree = renderer.create(<NavBarItems menuItems={listItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
