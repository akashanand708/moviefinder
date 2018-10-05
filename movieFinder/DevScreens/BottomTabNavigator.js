import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialTopTabNavigator, StackNavigator } from 'react-navigation'
// Screens
import Movies from './Movies/index'
import People from './People/index'
import TvShows from './TvShows/index'
import { Colors } from './DevTheme';
import NetworkError from './NetworkError';
import MovieDetail from '../CommonComponent/MovieItem/MovieDetail';
import YoutubeVideo from '../CommonComponent/MovieItem/YoutubeVideo';
import HorizontalMovieList from './Movies/HorizontalMovieList';
import VerticalMovieList from './Movies/VerticalMovieList';

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
        console.log("ROUTE NAME....",routeName)
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
    tabBarPosition:'bottom',
    lazy: true,
    title:'Movie Finder',
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
    NetworkError: { screen: NetworkError },
    YoutubeVideo: { screen: YoutubeVideo }
  }, {
    initialRouteName: 'TopBarNavigator',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: Colors.headerText,
      headerStyle: { backgroundColor: Colors.silver },
    })
  }
)