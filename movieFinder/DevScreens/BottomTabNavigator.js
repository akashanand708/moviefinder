import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialTopTabNavigator, StackNavigator } from 'react-navigation'
import { ActivityIndicator, Text, View } from 'react-native'
import Movies from './Movies/index'
import People from './People/index'
import TvShows from './TvShows/index'
import { Colors } from './DevTheme';
import NetworkError from './NetworkError';
import MovieDetail from '../CommonComponent/MovieItem/MovieDetail';
import YoutubeVideo from '../CommonComponent/MovieItem/RenderTrailer/YoutubeVideo';
import HorizontalMovieList from './Movies/HorizontalMovieList';
import VerticalMovieList from './Movies/VerticalMovieList';
import Trailers from '../CommonComponent/MovieItem/Trailers';
import MovieDetailTabNavigator from '../CommonComponent/MovieItem/MovieDetailTabNavigator/MovieDetailTabNavigator';
import SearchComponent from '../CommonComponent/SearchComponent';
import VerticalTvshowList from './TvShows/VerticalTvshowList';

const TopBarNavigator = createMaterialTopTabNavigator(
  {
    Movies: { screen: Movies }, 
    People: { screen: People },
    TvShows: { screen: TvShows },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log("ROUTE NAME....", routeName)
        let iconName;
        if (routeName === 'Movies') {
          // iconName = `film${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'People') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'TvShows') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarPosition: 'bottom',
    lazy: true,
    //title: 'Movie Finder',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
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
    TopBarNavigator: { screen: TopBarNavigator },
    VerticalMovieList: { screen: VerticalMovieList },
    MovieDetail: { screen: MovieDetail },
    MovieDetailTabNavigator: { screen: MovieDetailTabNavigator },
    SearchComponent: {screen: SearchComponent},
    Trailers: { screen: Trailers },
    YoutubeVideo: { screen: YoutubeVideo },
    NetworkError: { screen: NetworkError },
    VerticalTvshowList: { screen: VerticalTvshowList },
  }, {
    // headerMode: 'none',
    initialRouteName: 'TopBarNavigator',
    navigationOptions: ({ navigation }) => ({
      title:"",
      headerTintColor: Colors.headerText,
      headerStyle: { backgroundColor: Colors.silver },
    })
  }
)