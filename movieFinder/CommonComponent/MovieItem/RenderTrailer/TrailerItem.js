import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import style from './RenderTrailerItemStyle';
import Constants from '../../../../App/Constants/Constants';
import { Colors } from '../../../DevScreens/DevTheme';
import ShareComponent from '../../ShareComponent';

class TrailerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoLoading: true
        };
        this.trailerInterval = null;
    }
    openYouTubeVideo = (trailerItem) => {
        let trailerUrl = `${Constants.YOUTUBE_BASE_URL}/watch?v=${trailerItem.key}`;
        this.props.navigation.navigate({
            key: 'YoutubeVideo',
            routeName: 'YoutubeVideo',
            params: { videoId: trailerItem.key, trailerName: trailerItem.name, trailerUrl }
        })
    }
    render() {
        let { trailerItem } = this.props;
        let youtubeThumbnailUrl = `${Constants.YOUTUBE_THUMBNAIL_BASE_URL}/${trailerItem.key}/hqdefault.jpg`
        let trailerUrl = `${Constants.YOUTUBE_BASE_URL}/watch?v=${trailerItem.key}`;
        console.log("TRAILER ITEM......", trailerItem);
        return (
            <View style={[style.addElevation, style.trailerItemMain]}>
                <View style={[style.trailerItem]}>
                    <Text style={style.trailerName}>{trailerItem.name}</Text>
                    <ShareComponent
                        sharedUrl={trailerUrl}
                    />
                </View>
                {
                    <TouchableOpacity
                        onPress={() => this.openYouTubeVideo(trailerItem)}
                    >
                        <Image
                            style={style.trailer}
                            source={{ uri: youtubeThumbnailUrl }}
                        />
                        <View style={style.trailerOverlay}>
                            <Icon name="play" size={40} style={[style.commonBoxShadow, { color: Colors.youtubeButton }]} />
                        </View>
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
