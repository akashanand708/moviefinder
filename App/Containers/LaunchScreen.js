import React, { Component } from 'react'
import { View, NetInfo } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../App/Actions/fetchMovieActions'
import { CustomToast } from '../../movieFinder/CommonComponent/CommonToast/CommonToast'


import styles from './Styles/LaunchScreenStyles'
import BottomTabNavigator from '../../movieFinder/DevScreens/BottomTabNavigator';
import CommonLoader from '../../movieFinder/CommonComponent/CommonLoader/CommonLoader';

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
    let { dataFetching } = this.props;
    console.log("PROPS.....", dataFetching);
    return (
      <React.Fragment>
        <View style={styles.mainContainer}>
          <BottomTabNavigator />
        </View>
        {
          dataFetching &&
          <CommonLoader />
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    connectionType: state.ui.networkInfo.connectionType,
    dataFetching: state.ui.filterCountry.data_fetching
  };
};
const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fetchMoviesActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatch)(LaunchScreen);