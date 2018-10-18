import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Images } from '../DevTheme'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
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
      <View style={styles.mainContainer}>
        <SearchButton
          searchType={Constants.PEOPLE}
          navigation={this.props.navigation}
        />
        <View style={styles.movieListContainer}>
          <RenderPeopleItem
            peopleType={Constants.POPULAR_PEOPLE}
            navigation={this.props.navigation}
            horizontal={false}
          />
        </View>
      </View >
    )
  }
}

export default People;