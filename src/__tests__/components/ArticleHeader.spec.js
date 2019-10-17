import React from 'react';
import { shallow } from 'enzyme';
import ArticleHeader from '../../components/ArticleHeader';

describe('Article header component', () => {
  test('should render Article header component correctly', () => {
    const headerProps = {
      title: 'title',
      image: null,
      username: 'username',
      readingTime: 2.5,
      articleImage: null,
      createdAt: '2019-05-14T13:28:50.503Z'
    };
    const wrapper = shallow(<ArticleHeader {...headerProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render Article header component correctly', () => {
    const headerProps = {
      title: 'title', image: 'image', username: 'username', readingTime: 2.5
    };
    const wrapper = shallow(<ArticleHeader {...headerProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
