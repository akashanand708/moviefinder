import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../DevScreens/DevTheme'
import colors from '../../DevScreens/DevTheme/Colors';

export default StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.loaderBackgroundColor
  }
})
