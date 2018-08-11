import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native';
import WebView from 'react-native-android-fullscreen-webview-video'
import Styles from './RenderTrailerItemStyle';
import Constants from '../../../App/Constants/Constants';
import Shimmer from '../Shimmer/Shimmer';

class TrailerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoLoading: true
        };
        this.trailerInterval = null;
    }
    // componentWillMount() {
    //     let { trailerItem } = this.props;
    //     console.log("TRAILER WILL MOUNT....", trailerItem.key)
    //     setTimeout(() => {
    //         this.setState({
    //             videoLoading: false
    //         })
    //     }, 3000)
    // }

    videoLoadComplete = () => {
        console.log('LOADING COMPLETE.....');
        //this.setState({ videoLoading: false })
        //debugger;
        // this.setState({ videoLoading: false })
        // if (this.trailerInterval !== null)
        //     clearInterval(this.trailerInterval);
        // this.trailerInterval = setTimeout(() => {
        //     this.setState({ videoLoading: true })
        // }, 1000)
    }
    render() {
        let { trailerItem } = this.props;
        console.log("ITEM...", trailerItem);
        let videoUrl = `${Constants.YOUTUBE_BASE_URL}/embed/${trailerItem.key}`;
        console.log("VIDEOURL...", videoUrl);
        let { videoLoading } = this.state;
        console.log("Trailer item videoLoading...", videoLoading);
        return (
            // <Shimmer autoRun={true} style={Styles.trailer} visible={videoLoading}>
            <View>
                {

                    <WebView
                        style={Styles.trailer}
                        scalesPageToFit={false}
                        startInLoadingState={true}
                        //onLoad={this.videoLoadComplete}
                        source={{ uri: videoUrl }}
                    />
                }
            </View>
            // </Shimmer>
        )
    }
}
TrailerItem.propTypes = {
    trailerItem: PropTypes.object
}

export default TrailerItem;
