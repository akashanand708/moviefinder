import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import { Platform } from 'react-native';
import thunk from 'redux-thunk';
import ScreenTracking from './ScreenTrackingMiddleware'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import rootReducer from './Reducers/index'
import devTools from 'remote-redux-devtools-sp'


/* ------------- Redux Configuration ------------- */

const middleware = []

/* ------------- Navigation Middleware ------------ */
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)
middleware.push(navigationMiddleware)

/* ------------- Analytics Middleware ------------- */
//middleware.push(ScreenTracking)

/* ------------- Thunk Middleware ------------- */
middleware.push(thunk)

const enhancer = compose(
  applyMiddleware(...middleware),
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 5679,
    realtime: true
  })
);

export default createStore(
  rootReducer,
  enhancer,
);
