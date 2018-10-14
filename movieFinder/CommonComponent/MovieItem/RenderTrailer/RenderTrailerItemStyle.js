import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  trailer: {
    width: Metrics.screenWidth,
    height: 216,
  },
  trailerItemMain: {
    marginBottom: 20
  },
  trailerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: 40,
    position: 'relative'
  },
  trailerName: {
    width: '80%'
  },
  trailerOverlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
})
