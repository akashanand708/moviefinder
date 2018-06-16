import AppNavigation from '../../Navigation/AppNavigation'

export const navigationReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
