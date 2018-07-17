import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, NetInfo } from 'react-native'
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

class PresentationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionInfo: ''

    }
    // this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);
  }
  handleFirstConnectivityChange = (connectionInfo) => {
    console.log("CONNECTION INFO....", connectionInfo);
    this.props.actions.updateNetworkInfo(connectionInfo.type);
    this.setState({
      connectionInfo: connectionInfo.type
    })
    console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    // if (['none', 'unknown'].includes(connectionInfo.type)) {
    //   this.props.navigation.navigate('NetworkError');
    // } else {
    //   this.props.navigation.goBack();
    //   this.props
    //     .navigation
    //     .dispatch({ type: NavigationActions.BACK });

    //   // this.props
    //   //   .navigation
    //   //   .dispatch(NavigationActions.reset(
    //   //     {
    //   //       index: 0,
    //   //       actions: [
    //   //         NavigationActions.navigate()
    //   //       ]
    //   //     }));
    //   // this.props.navigation.navigate('PresentationScreen');
    // }
  }

  componentDidMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.setState({
        connectionInfo: connectionInfo.type
      })
      console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
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
    let { connectionType } = this.props;
    if (['none', 'unknown'].includes(connectionType)) {
      this.props.navigation.navigate('NetworkError');
    } else {
      this.props.navigation.navigate({ routeName: routeName })
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
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
          </View>
        </ScrollView>
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
    headerMode: 'none',
    // Keeping this here for future when we can make
    navigationOptions: {
      header: {
        // left: (
        //   <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{ marginHorizontal: 10 }} /></TouchableOpacity>
        // ),
        style: {
          backgroundColor: '#3e243f'
        }
      }
    }
  })
