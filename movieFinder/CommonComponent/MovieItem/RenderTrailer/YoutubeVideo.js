import React, { Component } from 'react'
import { View } from 'react-native';
import YouTube from 'react-native-youtube'
import ShareComponent from '../../ShareComponent';
import style from './YoutubeVideoStyle';
class YoutubeVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openFullScreen: false
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('trailerName', ''),
        };
    };
    render() {
        let { videoId, trailerUrl } = this.props.navigation.state.params;
        let { openFullScreen } = this.state;
        console.log("RENDER TRAILER......", videoId);

        return (
            <View style={style.youtubeMain}>
                <YouTube
                    videoId={videoId}   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={false}             // control whether the video should loop when ended
                    apiKey="AIzaSyBVLKFvkeWpXL7zJJeaf8BzCb36oydzQiY"
                    onReady={e => this.setState({ openFullScreen: true })}
                    lightboxMode={true}

                    style={{ alignSelf: 'stretch', height: 400 }}
                />
                <View style={style.youtubeShare}>
                    <ShareComponent
                        sharedUrl={trailerUrl}
                    />
                </View>
            </View>
        )
    }
}

export default YoutubeVideo;


