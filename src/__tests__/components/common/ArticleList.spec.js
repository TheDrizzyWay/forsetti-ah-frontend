import React from 'react';
import { shallow } from 'enzyme';
import { ArticleList } from '../../../components/common/ArticleList';

const props = {
  title: 'I am a very good boy',
  description: 'I dont know what to say like seriously',
  readingTime: '0.03',
  createdAt: '2019-05-15T10:59:12.703Z',
  image: 'https://res.cloudinary.com/forsetti/image/upload/v1557849271/forsetti/s1tujji64ai6wrdc3h93.jpg',
  slug: 'i-am-a-very-good-boy-1233343',
  dispatch: jest.fn(),
  history: {
    push: jest.fn()
  }
};
describe('App', () => {
  test('Should render component successfully', () => {
    const wrapper = shallow(<ArticleList { ...props } />);
    expect(wrapper.length).toEqual(1);
  });
  
  test('should', () => {
    const wrapper = shallow(<ArticleList {...props} />);

    wrapper.find('.ArticleList').simulate('click', {
      history: () => {}
    });
  });
  test('Should maintain existing snapshot', () => {
    const wrapper = shallow(<ArticleList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
