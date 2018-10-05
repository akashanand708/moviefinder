import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../DevScreens/DevTheme'
import { Colors } from '../../../App/Themes';

export default StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  dimension:{
    width: Metrics.screenWidth,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 5
    //margin: Metrics.baseMargin
    //backgroundColor: Colors.banner,
  }
})
