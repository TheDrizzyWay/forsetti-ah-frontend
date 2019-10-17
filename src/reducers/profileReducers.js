import {
  GET_PROFILE,
  PROFILE_LOADING,
  UPDATE_PROFILE,
  OPEN_READ_STATS_MODAL,
  CLOSE_READ_STATS_MODAL
} from '../action-types';

const initialState = {
  profile: {},
  loading: false,
  isReadStatsModalOpen: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload.data,
        loading: false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case OPEN_READ_STATS_MODAL:
      return {
        ...state,
        isReadStatsModalOpen: true
      };
    case CLOSE_READ_STATS_MODAL:
      return {
        ...state,
        isReadStatsModalOpen: false
      };
    default:
      return state;
  }
};
export default profileReducer;
