import React, { Component } from 'react'
import YouTube from 'react-native-youtube'
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
        let { videoId } = this.props.navigation.state.params;
        let { openFullScreen } = this.state;
        return (
            <YouTube
                videoId={videoId}   // The YouTube video ID
                play={true}             // control playback of video with true/false
                fullscreen={openFullScreen}       // control whether the video should play in fullscreen or inline
                loop={false}             // control whether the video should loop when ended
                apiKey="AIzaSyBVLKFvkeWpXL7zJJeaf8BzCb36oydzQiY"
                onReady={e => this.setState({ openFullScreen: true })}
                lightboxMode={true}

                style={{ alignSelf: 'stretch', height: 400 }}
            />
        )
    }
}

export default YoutubeVideo;


