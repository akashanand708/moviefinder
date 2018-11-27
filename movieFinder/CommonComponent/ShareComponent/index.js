import React from 'react';
import { Text, View, ScrollView, Share, TouchableOpacity,Platform } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { bindActionCreators } from 'redux'
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Colors from '../../DevScreens/DevTheme/Colors';
import Constants from '../../../App/Constants/Constants';

class ShareComponent extends React.Component {
  static defaultProps = {
    color: Colors.playButton,
    style: style.shareButton
  }
  shareExternal = () => {
    let { sharedUrl } = this.props;
    console.log("SHARED URL.....",sharedUrl);
    Share.share(
      {
        ...Platform.select({
          ios: {
            message: 'Have a look on : ',
            url: 'Install app : \n' + Constants.APP_URL +'\n'+ 'Have a look on : \n' + sharedUrl,
          },
          android: {
            message: 'Install app : \n' + Constants.APP_URL +'\n'+ 'Have a look on : \n' + sharedUrl
          }
        }),
        title: 'Wow, did you see that?'
      },
      {
        subject: 'To watch this video, click the link',
        dialogTitle: 'To watch this video, click the link'
      })
      .then((result) => {
        console.log("VIDEO EXTRANAL RESULT.....", result);
      })
      .catch((errorMsg) => {
        console.log("VIDEO EXTRANAL SHARE ERROR.....", errorMsg);
      })
  }

  render() {
    let { color, style } = this.props;
    return (
      <TouchableOpacity onPress={this.shareExternal} style={[style]}>
        <Icon name="share-alt" size={22} style={{ color: color }} />
      </TouchableOpacity>
    );
  }
}


export default ShareComponent;