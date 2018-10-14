import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts,ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  itemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    //margin: 5,
  },
  linearGradient:{
    position:'absolute',
    width:'100%',
    height:'85%'
  }
})
