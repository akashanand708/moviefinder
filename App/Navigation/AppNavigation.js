import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'
import MovieDetail from '../../movieFinder/CommonComponent/MovieItem/MovieDetail';
import NetworkError from '../../movieFinder/DevScreens/NetworkError';

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MovieDetail: { screen: MovieDetail },
  NetworkError: { screen: NetworkError }
}, {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
