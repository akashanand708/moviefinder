// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'
import RenderMovieItem from '../CommonComponent/MovieItem/RenderMovieItem';
import Constants from '../../App/Constants/Constants';
import { Colors } from '../../App/Themes';


export default class NetworkError extends React.Component {
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
          <Icon name="arrow-circle-left" size={30} style={{ color: Colors.backArrow }} />
        </TouchableOpacity>
        <View style={styles.movieListContainer}>
          <Text>NetworkError</Text>
        </View>
      </View>
    )
  }
}
