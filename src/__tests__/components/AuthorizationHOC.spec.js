import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { AuthorizationHOCUnit, AuthorizationHOC } from '../../components/AuthorizationHOC';
jest.mock('../../utils/tokenExpired.util');

const mockStore = configureMockStore();
let store;

describe('<AuthorizationHOC />', () => {
  let wrapper;

  it('should be a route component', () => {
    wrapper = shallow(<AuthorizationHOC />);
    expect(wrapper.is(Route)).toEqual(true);
  });

  it('renders authenticated route without crashing', () => {
    const wrapper = shallow(<AuthorizationHOC component={() => <div />} token />);
    const render = wrapper.prop('render')({ location: {} });
    const renderWrapper = shallow(render);
    expect(renderWrapper.is('div')).toBe(true);
  });

  it('should redirect unauthenticated request to landing page', () => {
    const wrapper = shallow(<AuthorizationHOC token={false} />);
    const render = wrapper.prop('render')({ location: {} });
    expect(render.props.to).toEqual('/');
  });
});
