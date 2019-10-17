const initialState = {
  showModal: false,
  showTagsModal: false,
  displayModal: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        showModal: false,
      };
    case 'OPEN_TAGS_MODAL':
      return {
        ...state,
        showTagsModal: true
      };
    case 'CLOSE_TAGS_MODAL':
      return {
        ...state,
        showTagsModal: false
      };
    case 'OPEN_SIGNUP_MODAL':
      return {
        displayModal: true
      };
    case 'CLOSE_SIGNUP_MODAL':
      return {
        displayModal: false,
      };
    default:
      return state;
  }
};

export { modalReducer, initialState };
