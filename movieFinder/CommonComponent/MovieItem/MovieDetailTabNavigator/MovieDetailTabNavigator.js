import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialTopTabNavigator, StackNavigator } from 'react-navigation'
// Screens
import Info from './Info/index'
import Cast from './Cast/index'
import UserReviews from './UserReviews/index'
import Awards from './Awards/index'
import { Colors } from '../../../DevScreens/DevTheme';
import style from './style';

const MovieDetailTabNavigator = createMaterialTopTabNavigator(
  {
    Info: { screen: Info },
    Cast: { screen: Cast },
    UserReviews: { screen: UserReviews },
    Awards: { screen: Awards },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        console.log("ROUTE NAME....", routeName)
        let iconName;
        if (routeName === 'Info') {
          // iconName = `film${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'Cast') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'UserReviews') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'Awards') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarPosition: 'top',
    // lazy: true,
    // title:'Movie Finder',
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: style.addElevation,
      indicatorStyle: {
        backgroundColor: 'red'
      },
    },
  }
)

export default MovieDetailTabNavigator
// export default StackNavigator(
//   {
//     MovieDetailTabNavigator: { screen: MovieDetailTabNavigator },
//   }, {
//     initialRouteName: 'MovieDetailTabNavigator',
//     // navigationOptions: ({ navigation }) => ({
//     //   headerTintColor: Colors.headerText,
//     //   headerStyle: { backgroundColor: Colors.silver },
//     // })
//   }
// )