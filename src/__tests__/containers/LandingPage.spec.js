import React from 'react';
import { shallow } from 'enzyme';
import { articles as articlesMock } from '../../testUtils/testsMockData/articles.mock-data';
import { LandingPage } from '../../containers/LandingPage';

describe('<LandingPage />', () => {
  const props = {
    showSideDrawer: {
      showSideDrawer: false,
    },
    modal: {
      showModal: false,
    },
    articles: {
      isLoading: false,
      aritcles: articlesMock
    },
    getAllArticles: jest.fn(),
    history: {
      action: 'POP'
    },
    openModal: jest.fn()
  };

  it('renders correctly', () => {
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(LandingPageComponent).toMatchSnapshot();
  });

  it('opens login modal on redirect', () => {
    const props = {
      showSideDrawer: {
        showSideDrawer: false,
      },
      modal: {
        showModal: false,
      },
      articles: {
        isLoading: false,
        aritcles: articlesMock
      },
      getAllArticles: jest.fn(),
      history: {
        action: 'REPLACE'
      },
      openModal: jest.fn()
    };
    const LandingPageComponent = shallow(<LandingPage {...props} />);
    expect(props.openModal).toHaveBeenCalled();
  })
});
