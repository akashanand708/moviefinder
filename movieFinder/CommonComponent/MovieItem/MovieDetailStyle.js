import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth/2,
    resizeMode: 'cover',
    borderRadius: 2,
    margin: Metrics.baseMargin
  }
})
