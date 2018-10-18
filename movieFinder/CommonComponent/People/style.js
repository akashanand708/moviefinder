import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  searchButtonMain: {
    position: 'relative'
  },
  peopleMain:{
    height: 195,
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  castImage:{
    width: 100, 
    height: 100,
    borderRadius: 50
  },
  peopleImage:{
    width: 100, 
    height: 100
  }

})
