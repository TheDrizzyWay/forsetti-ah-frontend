import { hideSideDrawerAction, showSideDrawerAction } from '../../actions';

describe('Mobile view sideDrawer actions', () => {
  it('should return correct action for showSideDrawerAction ', () => {
    const action = showSideDrawerAction();
    expect(action).toEqual({
      type: 'SHOW_SIDEDRAWER',
    });
  });

  it('should return correct action for hideSideDrawerAction ', () => {
    const action = hideSideDrawerAction();
    expect(action).toEqual({
      type: 'HIDE_SIDEDRAWER',
    });
  });
});
