// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'
import Constants from '../../App/Constants/Constants';
import RenderMovieItem from '../CommonComponent/MovieItem/RenderMovieItem';

export default class UpcomingMovies extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <View>
          <RenderMovieItem
            movieType={Constants.UPCOMING_MOVIES}
          />
        </View>
      </View>
    )
  }
}
