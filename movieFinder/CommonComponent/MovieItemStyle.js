import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../DevScreens/DevTheme'

export default StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white'
  },
  image: {
    width: Metrics.screenWidth / 2 - 10,
    height: Metrics.screenWidth / 2 + 60,
    resizeMode: 'contain',
    margin: Metrics.baseMargin
  }
})
