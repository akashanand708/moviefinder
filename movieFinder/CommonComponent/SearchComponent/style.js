import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  searchButtonMain: {
    position: 'relative'
  },
  searchButton: {
    height: '100%',
    width: 30,
  },
  searchHeader: {
    ...ApplicationStyles.screen.addElevation,
    backgroundColor: Colors.background
  }

})
