import {
  openModalAction,
  closeModalAction,
  openTagsModal,
  closeTagsModal,
  openSignupModalAction,
  closeSignUpModalAction,
} from'../../actions';

describe('Toggle modal actions', () => {
  it('should return correct action for open modal state ', () => {
    const action = openModalAction();
    expect(action).toEqual({
      type: 'OPEN_MODAL',
    });
  });

  it('should return correct action for close modal state ', () => {
    const action = closeModalAction();
    expect(action).toEqual({
      type: 'CLOSE_MODAL',
    });
  });

  it('should return correct action for open modal state ', () => {
    const action = openTagsModal();
    expect(action).toEqual({
      type: 'OPEN_TAGS_MODAL',
    });
  });

  it('should return correct action for close modal state ', () => {
    const action = closeTagsModal();
    expect(action).toEqual({
      type: 'CLOSE_TAGS_MODAL',
    });
  });

  it('should return correct action for open modal state ', () => {
    const action = openSignupModalAction();
    expect(action).toEqual({
      type: 'OPEN_SIGNUP_MODAL',
    });
  });

  it('should return correct action for close modal state ', () => {
    const action = closeSignUpModalAction();
    expect(action).toEqual({
      type: 'CLOSE_SIGNUP_MODAL',
    });
  });
});
