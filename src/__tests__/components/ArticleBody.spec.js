import React from 'react';
import { shallow } from 'enzyme';
import ArticleBody from '../../components/ArticleBody';

describe('Article body component', () => {
  test('should render comment component correctly', () => {
    const bodyProps = {
      body: 'this is the body', claps: 0
    };
    const wrapper = shallow(<ArticleBody {...bodyProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Simulate a click on the bookmark button', () => {
    const createBookmark = jest.fn();
    const wrapper = shallow(<ArticleBody createBookmark={createBookmark} status={201} />);
    wrapper.find('.bookmark').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
