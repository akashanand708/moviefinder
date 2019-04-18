import { StyleSheet, Platform } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../../DevScreens/DevTheme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  detail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitleView: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navTitle: {
    width: Metrics.screenWidth - 60,
    fontSize: 20,
    color: Colors.subTitleColor,
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  tabDetailStyle: {
    height: Metrics.screenHeight + 200
  },
  otherDetailStyle: {
    height: Metrics.screenHeight - 75
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth / 2,
    resizeMode: 'cover',
    borderRadius: 2,
  },
  MainContainer:
  {
    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
  },

  HeaderStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: (Platform.OS == 'ios') ? 20 : 0,
  },

  HeaderInsideTextStyle:
  {
    color: "#fff",
    fontSize: 18,
    textAlign: 'center'
  },

  TextViewStyle:
  {
    textAlign: 'center',
    color: "#000",
    fontSize: 18,
    margin: 5,
    padding: 7,
    backgroundColor: "#ECEFF1"
  }
})
