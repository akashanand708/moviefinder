import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../DevScreens/DevTheme'
import { Colors } from '../../../App/Themes';

export default StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10
  },
  image: {
    width: Metrics.screenWidth / 2 - 10,
    height: Metrics.screenWidth / 2 + 60,
    resizeMode: 'contain',
    //margin: Metrics.baseMargin
    backgroundColor: Colors.banner
  }
})
