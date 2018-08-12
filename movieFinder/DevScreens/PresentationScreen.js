import React from 'react'
import { ScrollView, Text, Image, View, StatusBar, NetInfo } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { StackNavigator, NavigationActions } from 'react-navigation'
// Screens
import PopularMovies from './PopularMovies'
import UpcomingMovies from './UpcomingMovies'
import LatestMovies from './LatestMovies'
import NowPlaying from './NowPlaying'
import TopRated from './TopRated'

// Styles
import styles from './Styles/PresentationScreenStyles'
import MovieDetail from '../CommonComponent/MovieItem/MovieDetail';
import NetworkError from './NetworkError';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../App/Actions/fetchMovieActions'
import { CustomToast } from '../CommonComponent/CommonToast/CommonToast';
import Constants from '../../App/Constants/Constants';
import { Colors } from '../../App/Themes';
import AdvertisementBanner from '../CommonComponent/AdvertisementBanner/AdvertisementBanner';

class PresentationScreen extends React.Component {
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
    // TODO this.props.actions.fetchMoviesForJson(1,Constants.POPULAR_MOVIES);
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleFirstConnectivityChange
    );
  }
  openPopularMovies = () => {
    this.navigate('PopularMovies');
  }

  openUpcomingMovies = () => {
    this.navigate('UpcomingMovies');
  }

  openLatestMovies = () => {
    this.navigate('LatestMovies');
  }

  openNowPlaying = () => {
    this.navigate('NowPlaying');
  }

  openTopRated = () => {
    this.navigate('TopRated');
  }

  navigate = (routeName) => {
    // this.props.navigation.navigate('NetworkError');
    let { connectionType } = this.props;
    if (['none', 'unknown'].includes(connectionType)) {
      this.props.navigation.navigate('NetworkError');
    } else {
      this.props.navigation.navigate({ routeName: routeName })
    }
  }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.eggplantDark} hidden={false} />
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            {/* <Image source={Images.movieTrailer} style={styles.logo} /> */}
            <Icon name='film' size={70} style={styles.icon} />
            <View style={styles.headerMain}>
              <Text style={styles.labelName}>Movie Trailers</Text>
              <Text style={styles.tagName}>At your fingertips</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openUpcomingMovies} style={styles.upcomingButton} iconStyle={styles.icon} iconName="film" text='Upcoming' />
            <ButtonBox onPress={this.openNowPlaying} style={styles.nowPlayingButton} iconStyle={styles.icon} iconName="film" text='Now Playing' />
            <ButtonBox onPress={this.openPopularMovies} style={styles.mostPopularButton} iconStyle={styles.icon} iconName="film" text='Most Popular' />
            <ButtonBox onPress={this.openTopRated} style={styles.topRatedButton} iconStyle={styles.icon} iconName="film" text='Top Rated' />
            {/* <ButtonBox onPress={this.openLatestMovies} style={styles.topRatedButton} iconStyle={styles.icon} iconName="film" text='Latest' /> */}
          </View>
        </ScrollView>
        <AdvertisementBanner />
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

const PresentationScreenUI = connect(mapStateToProps, mapDispatch)(PresentationScreen);

export default StackNavigator({
  PresentationScreen: { screen: PresentationScreenUI },
  PopularMovies: { screen: PopularMovies },
  UpcomingMovies: { screen: UpcomingMovies },
  LatestMovies: { screen: LatestMovies },
  NowPlaying: { screen: NowPlaying },
  TopRated: { screen: TopRated },
  MovieDetail: { screen: MovieDetail },
  NetworkError: { screen: NetworkError }
}, {
    cardStyle: {
      opacity: 1,
      backgroundColor: '#3e243f'
    },
    initialRouteName: 'PresentationScreen',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.bloodOrange,
      headerStyle: { backgroundColor: Colors.eggplant },
    })
  })
