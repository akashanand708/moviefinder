import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  movieDetailHeader: {
    position: 'relative'
  },
  headerLower: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '90%',
    position: 'absolute',
    bottom: 20,
    left: '5%'
  },
  headerlowerRight: {
    flex: 1,
    paddingLeft: 10
  },
  heading: {
    ...ApplicationStyles.screen.title
  },
  subHeading: {
    ...ApplicationStyles.screen.subtitle,
    flex: 0.3
  },
  movieDbMain:{
    backgroundColor:'#081c24',
    borderColor:'#01d177',
    borderWidth:2,
    borderRadius:10

  },
  movieDb:{
    color:'#01d177',
    padding:5,
    fontFamily: Fonts.type.bold
  },
  releaseCountryTime: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  backDropImage: {
    width: Metrics.screenWidth,
    height: '85%',
    resizeMode: 'cover',
    borderRadius: 2,
  },
  posterImage: {
    width: 95,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 5,
  }
})
