import React from 'react';
import { shallow, mount } from 'enzyme';
import SingleComment from '../../components/SingleComment';

const props = {
  comment: 'sample comment',
  usercomments: {
    username: 'username',
    firstname: 'firstname',
    image: 'imageurl'
  },
  threadcomments: [],
  postNewThreadComment: jest.fn(),
  token: '',
  history: []
 };
let wrapper;

describe('<SingleComment />', () => {
  test('should render comment component correctly', () => {
    wrapper = shallow(<SingleComment {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  test('should open thread modal successfully', () => {
    wrapper = mount(<SingleComment {...props} />);
    wrapper.find('Button').at(0).simulate('click');

    expect(wrapper.state().open).toEqual(true);
  });

  test('should close thread modal successfully', () => {
    wrapper = mount(<SingleComment {...props} />);
    wrapper.find('Button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state().open).toEqual(false);
  });

  test('should correctly update state', () => {
    props.token = 'token';
    wrapper = mount(<SingleComment {...props} />);
    wrapper.find('Button').at(0).simulate('click');
    wrapper.find('textarea').simulate('change', { target: { value: 'comment' } });
    wrapper.find('select').simulate('change', { target: { value: 'criticism' } });

    expect(wrapper.state().threadComment).toEqual('comment');
    expect(wrapper.state().select).toEqual('criticism');

    wrapper.find('Button').at(1).simulate('click');
    expect(props.postNewThreadComment).toHaveBeenCalled();
  });
});
