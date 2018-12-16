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
  peopleDetailMain:{
    padding: 10
  },
  character:{
    textAlign:"center"
  },
  peopleImage:{
    width: 100, 
    height: 150,
  },
  readMoreLess:{
    color: Colors.linkColor,
    marginBottom: 10
  },
  personalInfoMain:{
    marginTop: -27
  },
  socialMedia:{
    display: 'flex',
    flexDirection: 'row',
    margin: 4,
    width: 'auto'
  },
  socialMediaIcon:{
    margin: 4
  },
  peopleImageMain:{
    width: Metrics.screenWidth, 
    height: 150,
    display: 'flex',
    alignItems: 'center'
  },
  profilePic:{
    marginBottom: 10
  },
  biography:{
    marginTop: 30
  },
  profileImageContainer:{
    height: 195
  },
  image:{
    //width: 300, 
    height: 100
  }
})
