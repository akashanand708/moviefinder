import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth / 2,
    resizeMode: 'cover',
    borderRadius: 2,
    //margin: Metrics.baseMargin
  },
  detailColor: {
    color: Colors.text
  },
  detailMargin: {
    marginTop: Metrics.doubleBaseMargin
  },
  description: {
    padding: 10
  },
  title: {

  },
  titleText: {

  },
  titleDetail: {
    fontWeight: 'bold',
    fontSize: 25
  },
  overview: {

  },
  overviewText: {

  },
  overviewDetail: {

  },
  releaseDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  releaseDateText: {

  },
  releaseDateDetail: {

  },
  userScores:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userScoresText:{
    padding: 5
  },
  status: {

  },
  statusDetail: {

  },
  trailer: {

  },
  trailerText: {

  },
  trailerDetail: {

  }
})
