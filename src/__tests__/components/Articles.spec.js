import React from 'react';
import { shallow } from 'enzyme';
import { Articles } from '../../components';
import { articles as articlesMock } from '../../testUtils/testsMockData/articles.mock-data';

describe('<Articles />', () => {
  test('renders correctly', () => {
    const props = {
      articles: articlesMock,
      loadMore: jest.fn()
    };
    const tree = shallow(<Articles {...props} />);
    expect(tree).toMatchSnapshot(); 
  });
});
