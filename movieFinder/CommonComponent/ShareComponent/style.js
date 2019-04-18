import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  shareButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  shareText: {

  }
})
