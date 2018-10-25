import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  searchButtonMain: {
    position: 'relative'
  },
  castImage:{
    width: 100, 
    height: 100,
    borderRadius: 50
  },
  name:{
    textAlign:"center"
  },
  character:{
    textAlign:"center"
  },
  peopleImage:{
    width: 100, 
    height: 150,
  },
  profileImageContainer:{
    height: 195
  },
  image:{
    //width: 300, 
    height: 100
  }
})
