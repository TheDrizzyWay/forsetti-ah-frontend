import profileReducer from '../../reducers/profileReducers';

const initialState = {
    isReadStatsModalOpen: false,
    profile: {},
    loading: false,
};

const loadingState = {
    profile: {},
    loading: true,
    isReadStatsModalOpen: false,
};

const profile =  {
    articlesRead: "You have read 1 article(s).",
    articlesReadList: [],
    articlesWritten: "2 articles written.",
    articlesWrittenList: [],
    bio: "I am",
    firstname: "gj",
    followers: "You have 0 followers.",
    image: "https://res.cloudinary.com/forsetti/image/upload/v1557757972/forsetti/fxv4zhlflmqv0ao9tlna.png",
    lastname: "Abosede",
    username: "Melanie"
};

const auth = {
    userObject: {
      id:'ffffabd5-4a5b-45eb-8247-ba47a978070e'
    }
  };

const Params = {params: {
    params: { id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e' }
    }
  };

describe('userProfileReducer', () => {
test('return default route', () => {
const reducer = profileReducer(undefined, {type: '@@INIT'});

expect(reducer).toEqual(initialState);
});

test('should handle PROFILE_LOADING action', () => {
    const reducer = profileReducer(undefined, {type: 'PROFILE_LOADING'});

    expect(reducer).toEqual(loadingState);
});

it('should handle GET_PROFILE action', () => {
    const state = profileReducer(initialState, {
        type: 'GET_PROFILE',
        payload: [profile],
        loading: false
    });
    expect(state).toEqual(
        { profile:
               { 
                 articlesRead: 'You have read 1 article(s).',
                 articlesReadList: [],
                 articlesWritten: '2 articles written.',
                 articlesWrittenList: [],
                 bio: 'I am',
                 firstname: 'gj',
                 followers: 'You have 0 followers.',
                 image:
                  'https://res.cloudinary.com/forsetti/image/upload/v1557757972/forsetti/fxv4zhlflmqv0ao9tlna.png',
                 lastname: 'Abosede',
                 username: 'Melanie' 
                },
            loading: false,
            isReadStatsModalOpen: false
          }
    );
});

describe('userProfileReducer', () => {
  it('should return OPEN_READ_STATS_MODAL', () => {
    const reducer = profileReducer(initialState, {
      type: 'OPEN_READ_STATS_MODAL'
    });
    expect(reducer).toEqual({
      ...initialState,
      isReadStatsModalOpen: true
    })
  });

  it('should return CLOSE_READ_STATS_MODAL', () => {
    const reducer = profileReducer(initialState, {
      type: 'CLOSE_READ_STATS_MODAL'
    });
    expect(reducer).toEqual({
      ...initialState,
      isReadStatsModalOpen: false
    })
  });
});
});
