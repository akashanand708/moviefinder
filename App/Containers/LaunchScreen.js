import React, { Component } from 'react'
import { Image, View } from 'react-native'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
import PresentationScreen from '../../movieFinder/DevScreens/PresentationScreen.js';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <PresentationScreen />
      </View>
    )
  }
}
