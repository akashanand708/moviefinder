import React from 'react'
import { View, Text, Image } from 'react-native'
import { Images } from './DevTheme'
import styles from './Styles/DeviceInfoScreenStyles'


export default class NetworkError extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.errorMian}>
          <View style={styles.errorImage}>
            <Image source={Images.networkErrorImage} style={styles.errorIcon} />
          </View>
          <View style={styles.errorText}>
            <Text style={styles.subtitle}>Can't load searched results</Text>
          </View>
        </View>
      </View>
    )
  }
}
