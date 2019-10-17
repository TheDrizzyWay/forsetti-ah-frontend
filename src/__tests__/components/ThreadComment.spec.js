import React from 'react';
import { shallow } from 'enzyme';
import ThreadComment from '../../components/ThreadComment';

const props = {
  comment: 'sample comment',
  commentType: 'criticism',
  usercomments: {
    username: 'username',
    firstname: 'firstname',
    image: 'imageurl'
  },
 };
let wrapper;

describe('<ThreadComment />', () => {
  test('should render comment component correctly', () => {
    wrapper = shallow(<ThreadComment {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
