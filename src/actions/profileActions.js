import axios from '../config/axiosConfig';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  UPDATE_PROFILE,
  OPEN_READ_STATS_MODAL,
  CLOSE_READ_STATS_MODAL
} from '../action-types';

export const setProfileLoading = () => ({
  type: PROFILE_LOADING
});

export const currentProfile = data => ({
  type: GET_PROFILE,
  payload: data
});

export const openReadStatsModal = () => ({
  type: OPEN_READ_STATS_MODAL
});

export const closeReadStatsModal = () => ({
  type: CLOSE_READ_STATS_MODAL
});

export const getCurrentProfile = (id, token) => async (dispatch) => {
  dispatch(setProfileLoading());
  try {
    const { data } = await axios.get(`/profiles/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    dispatch(currentProfile(data.data));
  } catch ({ response: { status } }) {
    switch (status) {
      case 404:
        return 'Not found.';
      case 500:
        return 'Server error';
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

export const updateProfile = (data, token) => async (dispatch) => {
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
        return 'Server error.';
      default:
        return 'Unknown error.';
    }
  }
  return true;
};
