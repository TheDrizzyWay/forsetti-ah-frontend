import React from 'react';
import { shallow } from 'enzyme';
import Article from '../../containers/Article';

describe('Article Container', () => {
  test('should render Article container container', () => {
    const container = shallow(<Article />);

    expect(container).toMatchSnapshot();
  });
});
