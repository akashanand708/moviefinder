import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableOpacity } from 'react-native';
import Styles from './RenderTrailerItemStyle';
import Constants from '../../../App/Constants/Constants';

class TrailerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoLoading: true
        };
        this.trailerInterval = null;
    }
    openYouTubeVideo = (trailerItem) => {
        this.props.navigation.navigate({
            key: 'YoutubeVideo',
            routeName: 'YoutubeVideo',
            params: { videoId: trailerItem.key, trailerName: trailerItem.name }
        })
    }
    render() {
        let { trailerItem } = this.props;
        console.log("ITEM...", trailerItem);
        let youtubeThumbnailUrl = `${Constants.YOUTUBE_THUMBNAIL_BASE_URL}/${trailerItem.key}/hqdefault.jpg`
        return (
            <View>
                {
                    <TouchableOpacity
                        onPress={() => this.openYouTubeVideo(trailerItem)}
                    >
                        <Image
                            style={Styles.trailer}
                            source={{ uri: youtubeThumbnailUrl }}
                        />
                    </TouchableOpacity>

                }
            </View>
        )
    }
}
TrailerItem.propTypes = {
    trailerItem: PropTypes.object
}

export default TrailerItem;
