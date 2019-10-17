import { SHOW_SIDEDRAWER, HIDE_SIDEDRAWER } from '../action-types';


/**
 * Shows the sideDrawer for mobile view
 */
const showSideDrawerAction = () => ({ type: SHOW_SIDEDRAWER });

/**
 * Hides the sideDrawer for mobile view
 */
const hideSideDrawerAction = () => ({ type: HIDE_SIDEDRAWER });


export { showSideDrawerAction, hideSideDrawerAction };
