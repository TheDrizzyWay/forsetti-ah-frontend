import React from 'react';
import { shallow, mount } from 'enzyme';

import { ArticleForm } from '../../components/ArticleForm';

describe('Article Form', () => {
  let wrapper;
  let tagsWrapper;
  const props = {
    article: {
      isLoading: false,
      saved: false
    },
    createArticle: jest.fn()
  };

  test('Should render component successfully', () => {
    wrapper = shallow(<ArticleForm {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  test('Should maintain existing snapshot', () => {
    wrapper = shallow(<ArticleForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should correctly set state for user input', () => {
    wrapper = shallow(<ArticleForm {...props} />);

    const title = wrapper.find('Input').at(0);
    const model = wrapper.find('t').at(1);

    title.simulate('change', { target: { value: 'sample title' } });
    model.simulate('change', { target: { value: 'sample article body' } });

    expect(wrapper.state().title).toEqual('sample title');
    expect(wrapper.state().hasChanges).toEqual(true);
  });

  test('should correctly set state on publish', () => {
    wrapper = shallow(<ArticleForm {...props} />);

    const title = wrapper.find('Input').at(0);
    const model = wrapper.find('t').at(1);
    const tags = wrapper.find('.mt-50');

    title.simulate('change', { target: { value: 'sample title' } });
    model.simulate('change', { target: { value: 'sample article body' } });
    tags.prop('publishHandler')(['tag1']);

    expect(wrapper.state().published).toEqual(true);
    expect(wrapper.state().tagList).toEqual(['tag1']);
  });
});
