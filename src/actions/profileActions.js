import axios from '../config/axiosConfig';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  UPDATE_PROFILE,
  OPEN_READ_STATS_MODAL,
  CLOSE_READ_STATS_MODAL
} from '../action-types';

const token = window.localStorage.getItem('token');

export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});


export const currentProfile = data => ({
  type: GET_PROFILE,
  payload: { data }
});

export const openReadStatsModal = () => ({
  type: OPEN_READ_STATS_MODAL
});

export const closeReadStatsModal = () => ({
  type: CLOSE_READ_STATS_MODAL
});

export const getCurrentProfile = id => async (dispatch) => {
  dispatch(setProfileLoading());
  try {
    const res = await axios.get(`/profiles/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const { data } = res;
    dispatch(currentProfile(data));
  } catch ({ response: { status } }) {
    switch (status) {
      case 404:
        return 'Not found.';

      case 500:
      case 502:
        return 'Server error.';

      default:
        return 'Unknown error.';
    }
  }
  return true;
};


export const newProfile = data => ({
  type: UPDATE_PROFILE,
  payload: { data }
});

export const updateProfile = data => async (dispatch) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    await dispatch(setProfileLoading());
    const res = await axios.patch('/profiles', formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    await dispatch(newProfile(res));
  } catch ({ response: { status } }) {
    switch (status) {
      case 404:
        return 'Not found.';
      case 400:
        return 'Image size should not be greater than 500kb';
      case 500:
      case 502:
        return 'Server error.';

      default:
        return 'Unknown error.';
    }
  }
  return true;
};
