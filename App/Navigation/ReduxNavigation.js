import React from 'react'
import { BackHandler, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMovieActions from '../Actions/fetchMovieActions'
import LaunchScreen from '../Containers/LaunchScreen';

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
      Alert.alert(
        'Confirm Exit...',
        'Are you sure you want to exit?',
        [
          { text: 'No', onPress: () => console.log('Cancel Pressed') },
          { text: 'Yes', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      )
      // dispatch({ type: 'Navigation/BACK' })
      if (dispatch !== undefined) {
        dispatch({ type: 'Navigation/BACK' })
      }
      return true
    })
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render() {
    return (
        <LaunchScreen />
    )
  }
}

const mapStateToProps = state => ({ nav: state.nav, state: state });
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieActions: bindActionCreators(fetchMovieActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation)
