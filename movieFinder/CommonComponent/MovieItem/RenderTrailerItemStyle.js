import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  trailer: {
    width: Metrics.screenWidth-10,
    height: Metrics.screenWidth / 2,
    marginTop: 10
  }
})
