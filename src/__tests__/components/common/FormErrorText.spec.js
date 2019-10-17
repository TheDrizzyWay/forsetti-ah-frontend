import React from 'react';
import renderer from 'react-test-renderer';
import { FormErrorText } from '../../../components';

describe('<FormErrorText />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FormErrorText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
