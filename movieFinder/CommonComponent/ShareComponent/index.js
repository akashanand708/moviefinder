import React from 'react';
import { Text, View, ScrollView, Share, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { bindActionCreators } from 'redux'
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import Colors from '../../DevScreens/DevTheme/Colors';

class ShareComponent extends React.Component {
  static defaultProps = {
    color: Colors.playButton,
    style: style.shareButton
  }
  shareExternal = () => {
    let { sharedUrl } = this.props;
    debugger;
    console.log("SHARED URL.....".sharedUrl);
    Share.share(
      {
        url: sharedUrl,
        message: 'Watch video',
        title: 'Watch this video'
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