import { router } from '../navigations';

// import type { NavigationState, NavigationAction } from '../types';

export default (state, action) => {
  const newState = router.getStateForAction(action, state);
  return newState || state;
}
