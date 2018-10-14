import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  movieDetailHeader: {
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative'
  },
  headerLower: {
    justifyContent: 'center',
    alignItems: 'center',
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

  },
  subHeading: {

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
