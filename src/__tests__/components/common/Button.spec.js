import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from '../../../components/common/Button';

describe('<ButtonComponent  />', () => {
  it('renders the ButtonComponent  correctly', () => {
    const tree = renderer.create(<ButtonComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
