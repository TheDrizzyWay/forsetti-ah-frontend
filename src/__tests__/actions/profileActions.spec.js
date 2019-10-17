import thunk from 'redux-thunk';
import moxios from 'moxios';
import { setProfileLoading, getCurrentProfile, updateProfile, currentProfile, newProfile} from '../../actions/profileActions';
import { GET_PROFILE, PROFILE_LOADING, UPDATE_PROFILE } from '../../action-types/profileActionTypes';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { openReadStatsModal, closeReadStatsModal } from '../../actions';


const middlewares = [thunk];
const mockedStore = configureMockStore(middlewares);

const profile = {
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
describe('Profile Actions', () => {
    it('should get an empty object with no data sent', () => {
      const action = setProfileLoading();
      expect(action).toEqual({
        type: 'PROFILE_LOADING'
      });
    });

    it('should get profile data', () => {
        const action = currentProfile({data: profile});
        expect(action).toEqual({
          type: 'GET_PROFILE',
          payload: {data: { data: {...profile}}}
        });
      });

      it('should update a profile data', () => {
        const action = newProfile({data: profile});
        expect(action).toEqual({
          type: 'UPDATE_PROFILE',
          payload: {data: { data: {...profile}}}
        });
      });

      it('should return correct dispatch after api call', () => {
          const store = mockedStore({});
          axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: profile}));
          const expected = {
            type: 'PROFILE_LOADING',
            payload: profile
          };

          return store.dispatch(getCurrentProfile(profile, false))
            .then(() => {
              expect(store.getActions()[0].type).toEqual(expected.type);
            });
      });


      beforeEach(() => {
        moxios.install(axios);
      });
      afterEach(() => {
        moxios.uninstall(axios);
      });
      it('should return correct dispatch after api call', () => {
        const payload = {
          bucketlists: [] };
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: payload,
          });
        });
        const store = mockedStore({});
        const expected = {
          type: 'PROFILE_LOADING',
          payload: profile
        };

        return store.dispatch(updateProfile(profile, false))
          .then(() => {
            expect(store.getActions()[0].type).toEqual(expected.type);
          });
    });




})


describe('Profile Actions', () => {
  it('should open the read stats modal', () => {
    const action = openReadStatsModal();
    expect(action).toEqual({
      type: 'OPEN_READ_STATS_MODAL'
    });
  });

  it('should close the read stats modal', () => {
    const action = closeReadStatsModal();
    expect(action).toEqual({
      type: 'CLOSE_READ_STATS_MODAL'
    });
  });
});
