import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Images } from '../DevTheme'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/DeviceInfoScreenStyles'
import Constants from '../../../App/Constants/Constants';
import { Colors } from '../DevTheme';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SearchButton from '../../CommonComponent/SearchComponent/SearchButton';
import RenderPeopleItem from './RenderPeopleItem';

class People extends React.Component {

  render() {
    return (
      <LinearGradient colors={['#FFFFFF', '#D8D8D8', '#B0B0B0']} style={[styles.linearGradient]}>
        <SearchButton
          searchType={Constants.PEOPLE}
          navigation={this.props.navigation}
          horizontal={true}
        />
        <View style={[styles.movieListContainer, { marginBottom: 50 }]}>
          <RenderPeopleItem
            peopleType={Constants.POPULAR_PEOPLE}
            navigation={this.props.navigation}
            horizontal={false}
          />
        </View >
      </LinearGradient>
    )
  }
}

export default People;