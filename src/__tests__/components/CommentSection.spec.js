import React from 'react';
import { shallow } from 'enzyme';
import CommentSection from '../../components/CommentSection';

const props = {
  commentsList: [{ id: 1 }],
  commentCount: 1
};

let wrapper;

describe('<CommentSection />', () => {
  test('should render comment component correctly', () => {
    const wrapper = shallow(<CommentSection />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should contain comments if any', () => {
    wrapper = shallow(<CommentSection {...props} />);
    expect(wrapper.exists('SingleComment')).toEqual(true);
  });
});
