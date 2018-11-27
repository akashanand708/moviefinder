import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Styles/DeviceInfoScreenStyles'
import Constants from '../../../App/Constants/Constants';
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