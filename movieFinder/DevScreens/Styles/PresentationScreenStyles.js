import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    //marginBottom: 36,
    paddingTop: Metrics.section
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: Metrics.doubleBaseMargin
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    height: Metrics.screenHeight * (2 / 3)
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: Metrics.screenHeight / 3
  },
  upcomingButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  nowPlayingButton: {
    borderColor: Colors.border,
    borderBottomWidth: 1
  },
  mostPopularButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
  },
  topRatedButton: {
    borderColor: Colors.border,
  },
  sectionText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.text
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.banner,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow
  },
  headerMain:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelName: {
    fontSize: Fonts.size.h2,
    color: Colors.text
  },
  tagName: {
    color: Colors.text
  },
  icon: {
    color: Colors.iconColor
  }
})
