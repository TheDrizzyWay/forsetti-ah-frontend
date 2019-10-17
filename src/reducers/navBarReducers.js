const initialState = {
  showSideDrawer: false,
};

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_SIDEDRAWER':
      return {
        ...state,
        showSideDrawer: true,
      };
    case 'HIDE_SIDEDRAWER':
      return {
        ...state,
        showSideDrawer: false,
      };
    default:
      return state;
  }
};

export { navBarReducer, initialState };
