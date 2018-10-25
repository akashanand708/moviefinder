import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'


const ApplicationStyles = {
  screen: {
    listScroll: {
      height: (Metrics.screenHeight - 110),
    },
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background
    },
    mainHorizontalContainer: {
      //marginBottom:20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: Colors.transparent
    },
    linearGradient: {

    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },


    commonMargin:{
      marginTop: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
    },
    runtime:{
      fontFamily: Fonts.type.bold
    },
    underLine:{
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: Colors.subTitleColor
    },
    alignRowLeft:{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    alignRowCenter:{
      display:'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    },
    alignRowRight:{
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'flex-end',
    },
    alignColumnLeft:{
      display:'flex',
      flexDirection: 'column',
      alignItems:'flex-start',
      justifyContent: 'center',
    },
    alignColumnCenter:{
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    },
    alignColumnRight:{
      display:'flex',
      flexDirection: 'column',
      alignItems:'flex-end',
      justifyContent: 'center',
    },
    subtitle: {
      ...Fonts.style.subtitleFont,
      color: Colors.subTitleColor,
    },
    title: { 
      ...Fonts.style.titleFont,
      color: Colors.titleColor
    },
    infoSubtitle: {
      ...Fonts.style.infoSubtitleFont,
      color: Colors.subTitleColor
    },
    infoTitle: { 
      ...Fonts.style.infoTitleFont,
      color: Colors.titleColor
    },
    taglineFontSize:{
      ...Fonts.style.tagline
    },
    verticalListContainer: {
      //paddingTop: 10
      // height: Metrics.screenHeight
    },
    addElevation: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      backgroundColor: Colors.background
    },
    commonBoxShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    backArrow: {
      position: 'absolute',
      top: 45,
      left: 10
    },
    playButton: {
      position: 'absolute',
      top: '25%',
      left: '50%'
    },
    searchButton: {
      alignSelf: "flex-end",
      height: 35
    }
  },
  
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

export default ApplicationStyles
