import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 5,
    //margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  }
})
