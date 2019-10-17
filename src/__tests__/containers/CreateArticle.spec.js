import React from 'react';
import { shallow } from 'enzyme';
import CreateArticlePage from '../../containers/CreateArticle';

describe('Create Article Page', () => {
  it('Should render component successfully', async () => {
    const wrapper = await shallow(<CreateArticlePage />);
    expect(wrapper.length).toEqual(1);
  });

  test('Should maintain existing snapshot', () => {
    const wrapper = shallow(<CreateArticlePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
