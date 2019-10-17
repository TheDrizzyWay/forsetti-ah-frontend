import React from 'react';
import { shallow } from 'enzyme';
import { ResetPasswordComponent } from '../../components/resetPassword/ResetPassword';
import { Spinner } from 'reactstrap';

describe('<ResetPasswordComponent />', () => {
  let component;
  beforeAll(() => {
    const props = {
      reset: {
        submit: false,
        message: '',
        status: ''
      }
    }
    component = shallow(<ResetPasswordComponent {...props} />);
  });

  it('correctly sets state for password input', () => {
    const input = component.find('Input').at(0);
    input.value = 'Password2333';
    const mockedInputEvent = { target: {
      id: 'password',
      value: 'Password2333'
    }};
    input.simulate('change', mockedInputEvent);
    expect(component.state().password).toEqual('Password2333');
  });

  it('correctly sets state when password is invalid', () => {
    const input = component.find('Input').at(0);
    input.value = 'Password2333';
    const mockedInputEvent = { target: {
      id: 'password',
      value: 'Passwo'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(component.state().passwordError).toEqual('Should be alphanumeric and atleast 8 characters long');
  });

  it('correctly sets state when password is valid', () => {
    const input = component.find('Input').at(0);
    input.value = 'Password2333';
    const mockedInputEvent = { target: {
      id: 'password',
      value: 'Password2333'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(component.state().passwordError).toEqual('');
  });

  it('should not render the spinner when rendering submit is false', () => {
    const props = {
      auth: {
        submit: false,
      }
    };
    component = shallow(<ResetPasswordComponent {...props} />);
    expect(component.find(Spinner)).toHaveLength(0);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
