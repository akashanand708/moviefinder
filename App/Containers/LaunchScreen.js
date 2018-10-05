import React, { Component } from 'react'
import { Image, View, NetInfo } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../App/Actions/fetchMovieActions'
import { CustomToast } from '../../movieFinder/CommonComponent/CommonToast/CommonToast'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import BottomTabNavigator from '../../movieFinder/DevScreens/BottomTabNavigator';

class LaunchScreen extends Component {
  handleFirstConnectivityChange = (connectionInfo) => {
    this.props.actions.updateNetworkInfo(connectionInfo.type);
    if (['none', 'unknown'].includes(connectionInfo.type)) {
      CustomToast.showToast("No connection");
    } else {
      CustomToast.showToast("Back online", 'success');
    }
  }

  componentDidMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.props.actions.updateNetworkInfo(connectionInfo.type);
    });

    NetInfo.addEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
        <BottomTabNavigator />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    connectionType: state.ui.networkInfo.connectionType
  };
};
const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatch)(LaunchScreen);