import React from 'react';
import { shallow, mount } from 'enzyme';
import TagsModal from '../../components/TagsModal';

describe('Tags Modal', () => {
  let wrapper;
  const props = {
    tagsmodal: { showTagsModal: false },
    closetagsmodal: jest.fn(),
    publishHandler: jest.fn()
  };

  test('Should render component successfully', () => {
    wrapper = shallow(<TagsModal.WrappedComponent {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  test('Should maintain existing snapshot', () => {
    wrapper = shallow(<TagsModal.WrappedComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should correctly set state for tags modal', () => {
    wrapper = shallow(<TagsModal.WrappedComponent {...props} />);

    const tagsInput = wrapper.find('TagsInput');
    tagsInput.simulate('change', ['tag1', 'tag2']);

    expect(wrapper.state().tags).toEqual(['tag1', 'tag2']);
  });

  test('should call appropriate function on submit', () => {
    wrapper = shallow(<TagsModal.WrappedComponent {...props} />);

    const submitButton = wrapper.find('Button');
    submitButton.simulate('click');

    expect(props.publishHandler).toHaveBeenCalled();
  });
});
