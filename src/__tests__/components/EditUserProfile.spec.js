import React from 'react';
import { shallow } from 'enzyme';
import { EditUserProfile, mapStateToProps } from '../../components/EditUserProfile';

const props = {
  profile: {
    data: [{
      firstname: '',
      lastname: '',
      bio: '',
      image: ''
    }]
  }
}
const profileUpdate = jest.fn();

describe('<EditUserProfile />', () => {
it('renders correctly', () => {
    let EditUserProfileComponent;
      EditUserProfileComponent = shallow(<EditUserProfile profile = {props} profileUpdate={profileUpdate}/>);
  
      expect(EditUserProfileComponent).toMatchSnapshot();
  });

  it('checks the content of the props', () => {
    const action = mapStateToProps(props);
    
    expect(action).toEqual({
      profile: props.profile
    });
  });

  it('checks if the content of firstname input textbox is the same as its value', () => {
    const wrapper = shallow(<EditUserProfile profile = {props} profileUpdate={profileUpdate}/>);
    const value = 'samson';
    wrapper.find('input').at(1).simulate('change', {
      target: {value}
    });

    expect(wrapper.state('firstname')).toBe(value);
  });

  it('checks if the content of lastname input textbox is the same as its value', () => {
    const wrapper = shallow(<EditUserProfile profile = {props} profileUpdate={profileUpdate}/>);
    const value = 'abosede';
    wrapper.find('input').at(2).simulate('change', {
      target: {value}
    });

    expect(wrapper.state('lastname')).toBe(value);
  });

  it('checks if the content of textarea is the same as its value', () => {
    const wrapper = shallow(<EditUserProfile profile = {props} profileUpdate={profileUpdate}/>);
    wrapper.find('textarea').simulate('change', {
      target: {value: ''}
    });

    expect(wrapper.state('bio')).toBe('');
  });

  it('simulates the submit function', () => {
    const wrapper = shallow(<EditUserProfile profile = {props} profileUpdate={profileUpdate}/>);
    global.preventDefault = jest.fn();
    wrapper.setState({
      firstnameError: '',
      lastnameError: ''
    });

    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
  });
})
