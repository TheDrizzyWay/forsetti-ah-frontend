import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { HorizontalListItems } from '../../../components';
import listItems from '../../../testUtils/testsMockData/verticalListItems.mock-data';

describe('<HorizontalListItems />', () => {
  let component;
  beforeAll(() => {
    component = mount(<HorizontalListItems items={listItems} />);
  });
  it('should have a ul element', () => {
    expect(component.find('ul')).toHaveLength(1);
  });
  it('should have 4 li elements', () => {
    expect(component.find('li')).toHaveLength(4);
  });
  it('renders correctly when there are props', () => {
    const tree = renderer.create(<HorizontalListItems items={listItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
