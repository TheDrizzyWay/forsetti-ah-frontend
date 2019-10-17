import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../../../containers/NotFoundPage';

describe('App', () => {
  it('Should render component successfully', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.length).toEqual(1);
  });
  test('Should maintain existing snapshot', () => {
    const component = renderer.create(
      <Router>
        <NotFound />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
