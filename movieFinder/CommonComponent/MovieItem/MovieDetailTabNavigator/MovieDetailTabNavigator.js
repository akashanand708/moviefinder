import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialTopTabNavigator,StackNavigator } from 'react-navigation'
// Screens
import Info from './Info/index'
import Cast from './Cast/index'
import UserReviews from './UserReviews/index'
import Images from './Images/index'
import style from './style';
import PeopleDetail from '../../People/PeopleDetail';

const tempInfo = (props) => (<Info movieOrTvshow={props.screenProps.movieOrTvshow} />);
const tempCast = (props) => (<Cast navigation={props.screenProps.navigation} />);
const tempReview = (props) => (<UserReviews navigation={props.screenProps.navigation} />);

const MovieDetailTabNavigator = createMaterialTopTabNavigator(
  {
    Info: tempInfo,
    ["Cast & Crew"]: tempCast,
    ["User Reviews"]: tempReview,
    Images: { screen: Images },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Info') {
          // iconName = `film${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'Cast & Crew') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'User Reviews') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        } else if (routeName === 'Images') {
          // iconName = `ios-options${focused ? '' : '-outline'}`;
          iconName = 'film';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarPosition: 'top',
    lazy: true,
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