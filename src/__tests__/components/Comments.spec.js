import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../../components/Comments';

const props = {
  commentLoading: false,
  postNewComment: jest.fn(),
  token: 'token',
  history: []
 };
let wrapper;

describe('Comment component', () => {
  test('should render comment component correctly', () => {
    wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain spinner when loading', () => {
    props.commentLoading = true;
    wrapper = shallow(<Comments {...props} />);

    expect(wrapper.exists('Spinner')).toEqual(true);
  });

  test('should correctly set state for user input', () => {
    wrapper = shallow(<Comments {...props} />);
    wrapper.find('textarea').simulate('change', { target: { value: 'comment' } });
    wrapper.find('select').simulate('change', { target: { value: 'criticism' } });

    expect(wrapper.state().comment).toEqual('comment');
    expect(wrapper.state().select).toEqual('criticism');
  });

  test('should post comment on clicking submit button', () => {
    wrapper = shallow(<Comments {...props} />);
    wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } });
    wrapper.find('ButtonComponent').simulate('click');

    expect(props.postNewComment).toHaveBeenCalled();
    expect(wrapper.state().comment).toEqual('');
    expect(wrapper.state().select).toEqual('comment');
  });
});
