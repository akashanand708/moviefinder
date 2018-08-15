import { StyleSheet } from 'react-native'
import { Metrics, Fonts, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  trailer: {
    textAlign: 'center',
    width: Metrics.screenWidth - 10,
    height: Metrics.screenWidth / 2,
    marginTop: 10
  }
})
