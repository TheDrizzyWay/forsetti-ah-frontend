import React from 'react';
import { shallow, mount } from 'enzyme';
import { UserProfile, mapStateToProps } from '../../components/UserProfile';

const props = {
  profile: {
    data: [{
      firstname: 'Samson',
      lastname: '',
      bio: '',
      image: '',
      articlesWrittenList: [{
        slug: 'bisjbhdiuaghfdiuabivf',
        title: 'jbfhjbhufbdhdfvbjhf'
      }],
      articlesReadList: []
    }],
  },
}
const auth = {
  userObject: {
    id:'ffffabd5-4a5b-45eb-8247-ba47a978070e'
  }
};
const Params = {params: {
  params: {
    id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e'
  }
}
};
describe('<UserProfile />', () => {
it('renders correctly', () => {
    let UserProfileComponent;
      beforeAll(() => {
        const props = {
            profile: {},
            loading: true,
        }
        UserProfileComponent = mount(<UserProfile {...props} />);
    
        expect(UserProfileComponent).toMatchSnapshot();
      });
    });
})

it('simulate the mapstatetoprops', () => {
  const action = mapStateToProps(props);
  
  expect(action).toEqual({
    profile: props.profile
  });
});

it('does not render correctlly if props are not defined', () => {
  let UserProfileComponent;
    beforeAll(() => {
      const undefinedProps = {
          profile: {},
          loading: true,
          isLoading: undefined
      }
      UserProfileComponent = mount(<UserProfile {...undefinedProps} />);
  
      expect(UserProfileComponent).toMatchSnapshot();
    })
  });

  it('should simulate the click button on the profile page', () => {
    beforeAll(() => {
      const props = {
          profile: {},
          loading: true,
      }
    const component = mount(<UserProfile {...props} />);
    const editProfileButton = component.find('.editButton').simulate('click');
    expect(editProfileButton).toMatchSnapshot();
  });
});

it('should take a snapshot of the current profile details', () => {
  const currentProfile = jest.fn()
  const component = shallow(<UserProfile 
    profile={props}
    currentProfile={currentProfile}
    auth={auth}
    match={Params}
    />);

  expect(component).toMatchSnapshot();
});
