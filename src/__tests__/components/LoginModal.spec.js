import React from 'react';
import { shallow } from 'enzyme';
import LoginModal from '../../components/LoginModal';

describe('<LoginModal />', () => {
  let LoginModalComponent;
  beforeAll(() => {
    const props = {
      isOpen: true,
      dispatch: jest.fn()
    }
    LoginModalComponent = shallow(<LoginModal {...props} />);
  });
  it('renders correctly', () => {
    expect(LoginModalComponent).toMatchSnapshot();
  });
});
