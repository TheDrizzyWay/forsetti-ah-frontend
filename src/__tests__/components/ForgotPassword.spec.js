import React from 'react';
import { shallow } from 'enzyme';
import { ForgotPasswordComponent } from '../../components/resetPassword/ForgotPassword';
import { Spinner } from 'reactstrap';

describe('<ForgotPasswordComponent />', () => {
  let component;
  beforeAll(() => {
    const props = {
      reset: {
        isModalOpen: false,
        submit: false,
        message: '',
        status: ''
      }
    }
    component = shallow(<ForgotPasswordComponent {...props} />);
  });

  it('correctly sets state for email input', () => {
    const input = component.find('Input').at(0);
    input.value = 'test@example.com';
    const mockedInputEvent = { target: {
      id: 'email',
      value: 'test@example.com'
    }};
    input.simulate('change', mockedInputEvent);
    expect(component.state().email).toEqual('test@example.com');
  });

  it('correctly sets state when email is invalid', () => {
    const input = component.find('Input').at(0);
    input.value = 'testexample.com';
    const mockedInputEvent = { target: {
      id: 'email',
      value: 'testexample.com'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(component.state().emailError).toEqual('Email is invalid');
  });

  it('correctly sets state when email is valid', () => {
    const input = component.find('Input').at(0);
    input.value = 'test@example.com';
    const mockedInputEvent = { target: {
      id: 'email',
      value: 'test@example.com'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(component.state().emailError).toEqual('');
  });

  it('should not render the spinner when rendering submit is false', () => {
    const props = {
      auth: {
        submit: false,
      }
    };
    component = shallow(<ForgotPasswordComponent {...props} />);
    expect(component.find(Spinner)).toHaveLength(0);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
