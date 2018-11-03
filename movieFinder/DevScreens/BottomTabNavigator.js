import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialTopTabNavigator, StackNavigator } from 'react-navigation'
import Movies from './Movies/index'
import People from './People/index'
import TvShows from './TvShows/index'
import { Colors } from './DevTheme';
import NetworkError from './NetworkError';
import MovieDetail from '../CommonComponent/MovieItem/MovieDetail';
import YoutubeVideo from '../CommonComponent/MovieItem/RenderTrailer/YoutubeVideo';
import VerticalMovieList from './Movies/VerticalMovieList';
import Trailers from '../CommonComponent/MovieItem/Trailers';
import MovieDetailTabNavigator from '../CommonComponent/MovieItem/MovieDetailTabNavigator/MovieDetailTabNavigator';
import SearchComponent from '../CommonComponent/SearchComponent';
import VerticalTvshowList from './TvShows/VerticalTvshowList';
import PeopleDetail from '../CommonComponent/People/PeopleDetail';
import ReviewDetail from '../CommonComponent/MovieItem/MovieDetailTabNavigator/UserReviews/ReviewDetail';


class TopBarNavigatorComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  render() {
    return <TopBarNavigator screenProps={{ navigation: this.props.navigation }} />
  }
}

const tempMovie = (props) => (<Movies navigation={props.screenProps.navigation} />);
const tempPeople = (props) => (<People navigation={props.screenProps.navigation} />);
const tempTvShows = (props) => (<TvShows navigation={props.screenProps.navigation} />);
const TopBarNavigator = createMaterialTopTabNavigator(
  {
    Movies: tempMovie,
    Celebs: tempPeople,
    TvShows: tempTvShows,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Movies') {
          iconName = 'film';
        } else if (routeName === 'Celebs') {
          iconName = 'users';
        } else if (routeName === 'TvShows') {
          iconName = 'tv';
        }
        return <Icon name={iconName} size={15} color={tintColor} />;
      }
    }),
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        height: 50,

      },
      labelStyle:{
        margin: 2
      },
      style: {
        backgroundColor: Colors.background
      },
      indicatorStyle: {
        backgroundColor: 'red'
      },
    },
  }
)


export default StackNavigator(
  {
    TopBarNavigator: { screen: TopBarNavigatorComponent },
    MovieDetailTabNavigator: { screen: MovieDetailTabNavigator },
    VerticalMovieList: { screen: VerticalMovieList },
    MovieDetail: { screen: MovieDetail },
    ReviewDetail: { screen: ReviewDetail },
    PeopleDetail: { screen: PeopleDetail },
    Trailers: { screen: Trailers },
    YoutubeVideo: { screen: YoutubeVideo },
    NetworkError: { screen: NetworkError },
    VerticalTvshowList: { screen: VerticalTvshowList },
    SearchComponent: { screen: SearchComponent },

  }, {
    initialRouteName: 'TopBarNavigator',
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerTintColor: Colors.headerText,
      headerStyle: { backgroundColor: Colors.silver },
    })
  }
)