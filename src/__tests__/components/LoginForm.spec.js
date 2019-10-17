import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../components/LoginForm';
import { Spinner } from 'reactstrap';

describe('<LoginForm />', () => {
  let LoginFormComponent;
  beforeAll(() => {
    const props = {
      auth: {
        isLoading: true,
      }
    }
    LoginFormComponent = shallow(<LoginForm {...props} />);
  });

  it('correctly sets state for email input', () => {
    const input = LoginFormComponent.find('Input').at(0);
    input.value = 'test@example.com';
    const mockedInputEvent = { target: {
      id: 'email',
      value: 'test@example.com'
    }};
    input.simulate('change', mockedInputEvent);
    expect(LoginFormComponent.state().email).toEqual('test@example.com');
  });

  it('correctly sets state for password input', () => {
    const input = LoginFormComponent.find('Input').at(1);
    input.value = '123456';
    const mockedInputEvent = { target: {
      id: 'password',
      value: '123456'
    }};
    input.simulate('change', mockedInputEvent);
    expect(LoginFormComponent.state().password).toEqual('123456');
  });

  it('correctly sets state for remember me checkbox', () => {
    const input = LoginFormComponent.find('Input').at(2);
    input.checked = true;
    const mockedInputEvent = { target: {
      id: 'rememberLogin',
      checked: true
    }};
    input.simulate('click', mockedInputEvent);
    expect(LoginFormComponent.state().rememberLogin).toEqual(true);
  });

  it('correctly sets state when email is invalid', () => {
    const input = LoginFormComponent.find('Input').at(0);
    input.value = 'testexample.com';
    const mockedInputEvent = { target: {
      id: 'email',
      value: 'testexample.com'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(LoginFormComponent.state().emailError).toEqual('Email is invalid');
    expect(LoginFormComponent.state().isEmailValid).toEqual(false);
  });

  it('correctly sets state when email is valid', () => {
    const input = LoginFormComponent.find('Input').at(0);
    input.value = 'test@example.com';
    const mockedInputEvent = { target: {
      id: 'email',
      value: 'test@example.com'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(LoginFormComponent.state().emailError).toEqual('');
    expect(LoginFormComponent.state().isEmailValid).toEqual(true);
  });

  it('correctly sets state when password is invalid', () => {
    const input = LoginFormComponent.find('Input').at(1);
    input.value = '123456';
    const mockedInputEvent = { target: {
      id: 'password',
      value: '123456'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(LoginFormComponent.state().passwordError).toEqual('Should be alphanumeric and atleast 8 characters long');
    expect(LoginFormComponent.state().isPasswordValid).toEqual(false);
  });

  it('correctly sets state when password is valid', () => {
    const input = LoginFormComponent.find('Input').at(1);
    input.value = 'forsetti-ah-1234';
    const mockedInputEvent = { target: {
      id: 'password',
      value: 'forsetti-ah-1234'
    }};
    input.simulate('keyup', mockedInputEvent);
    expect(LoginFormComponent.state().passwordError).toEqual('');
    expect(LoginFormComponent.state().isPasswordValid).toEqual(true);
  });

  it('correctly resets state when email input is in focus', () => {
    const input = LoginFormComponent.find('Input').at(0);
    const mockedInputEvent = { target: {
      id: 'email',
    }};
    input.simulate('focus', mockedInputEvent);
    expect(LoginFormComponent.state().emailError).toEqual('');
    expect(LoginFormComponent.state().isEmailValid).toEqual(false);
  });

  it('correctly resets state when password input is in focus', () => {
    const input = LoginFormComponent.find('Input').at(1);
    const mockedInputEvent = { target: {
      id: 'password',
    }};
    input.simulate('focus', mockedInputEvent);
    expect(LoginFormComponent.state().passwordError).toEqual('');
    expect(LoginFormComponent.state().isPasswordValid).toEqual(false);
  });

  it('should render the spinner when rendering isLoading is true', () => {
    const props = {
      auth: {
        isLoading: true,
      }
    };
    LoginFormComponent = shallow(<LoginForm {...props} />);
    expect(LoginFormComponent.find(Spinner)).toHaveLength(1);
    });

    it('should not render the spinner when rendering isLoading is false', () => {
      const props = {
        auth: {
          isLoading: false,
        }
      };
      LoginFormComponent = shallow(<LoginForm {...props} />);
      expect(LoginFormComponent.find(Spinner)).toHaveLength(0);
      });

  it('renders correctly', () => {
    expect(LoginFormComponent).toMatchSnapshot();
  });
});
