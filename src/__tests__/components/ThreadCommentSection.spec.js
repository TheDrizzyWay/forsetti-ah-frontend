import React from 'react';
import { shallow, mount } from 'enzyme';
import ThreadCommentSection from '../../components/ThreadCommentSection';

const props = {
  threadComment: [{ id: 1, comment: 'comment'}]
 };
let wrapper;

describe('<ThreadComment />', () => {
  test('should render comment component correctly', () => {
    wrapper = shallow(<ThreadCommentSection {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
