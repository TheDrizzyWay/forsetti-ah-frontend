import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL
} from '../action-types';

/**
 * open the modal
 * @returns {obect} action object
 */
const openModalAction = () => ({
  type: OPEN_MODAL,
});

/**
 * close the modal
 * @returns {obect} action object
 */
const closeModalAction = () => ({
  type: CLOSE_MODAL,
});

const openTagsModal = () => ({
  type: OPEN_TAGS_MODAL
});

const closeTagsModal = () => ({
  type: CLOSE_TAGS_MODAL
});

const openSignupModalAction = () => ({
  type: OPEN_SIGNUP_MODAL,
});

const closeSignUpModalAction = () => ({
  type: CLOSE_SIGNUP_MODAL
});

export {
  openModalAction,
  closeModalAction,
  openTagsModal,
  closeTagsModal,
  openSignupModalAction,
  closeSignUpModalAction
};
