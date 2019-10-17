import React from 'react';
import { shallow } from 'enzyme';
import { GetSingleArticle, mapStateToProps } from '../../components/GetSingleArticle';
import { getSingleArticle } from '../../actions';

const article = {
  article: {
    author: {
      id: 'ffffabd5-4a5b',
      bio: 'test bio',
      image: 'image',
      username: 'john doe',
    },
    id: 'ffffabd5-4a5b',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    claps: '2 claps',
    comments: '0 comments',
    description: 'Lorem ipsum dolor sit amet',
    rating: '0',
    image: null,
    readingTime: '2',
    slug: 'Lorem ipsum dolor sit amet-12345',
    title: 'Lorem ipsum dolor sit amet',
    success: true
  },
  comments: { isLoading: false },
  auth: { token: ''}
};
const error = {
  article: {
    success: false
  }
}

const auth = {
  article: {
    article: ''
  },
  auth: {
    token: 'jhkjkjhjh'
  }
}
describe('Get single article component', () => {
  test('should render get single article component', () => {
    const wrapper = shallow(<GetSingleArticle
      match={{
        params: { slug: 'ffffabd5-4a5b' }
      }}
      getOneArticle={getSingleArticle}
      {...article}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render 404 page when single article not found', () => {
    const wrapper = shallow(<GetSingleArticle
      match={{
        params: { slug: 'ffffabd5-4a5b' }
      }}
      getOneArticle={getSingleArticle}
      {...error}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should return mapStateToProps object', () => {
    const action = mapStateToProps(article);
    expect(action).toEqual({
      article: article.article,
      commentLoading: article.comments.isLoading,
      token: ''
    });
  });
});
