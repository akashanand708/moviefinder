import React from 'react'
import { BackHandler, Platform } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppNavigation from './AppNavigation'
import * as fetchMovieActions from '../Actions/fetchMovieActions'

class ReduxNavigation extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props

      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }
  componentDidMount() {
    console.log("ACTIONS.......", this.props.fetchMovieActions);
    this.props.fetchMovieActions.fetchPopularMovies();
  }
  render() {
    console.log("State.......", this.props.state);
    return <AppNavigation navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener: createReduxBoundAddListener('root') })} />
  }
}

const mapStateToProps = state => ({ nav: state.nav, state: state });
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieActions: bindActionCreators(fetchMovieActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation)
