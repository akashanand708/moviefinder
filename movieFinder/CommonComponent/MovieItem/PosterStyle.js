import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '85%'
  }
})
