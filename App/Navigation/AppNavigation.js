import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import MovieDetail from '../../movieFinder/CommonComponent/MovieItem/MovieDetail';
import NetworkError from '../../movieFinder/DevScreens/NetworkError';

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  // PopularMovies: { screen: PopularMovies },
  // UpcomingMovies: { screen: UpcomingMovies },
  // LatestMovies: { screen: LatestMovies },
  // NowPlaying: { screen: NowPlaying },
  // TopRated: { screen: TopRated },
  MovieDetail: { screen: MovieDetail },
  NetworkError: { screen: NetworkError }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
