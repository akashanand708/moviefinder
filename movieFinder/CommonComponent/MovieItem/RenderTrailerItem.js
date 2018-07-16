// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { ActivityIndicator, TouchableOpacity, View, Text, FlatList } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Styles from './RenderTrailerItemStyle';
import Constants from '../../../App/Constants/Constants';

class RenderTrailerItem extends React.Component {

    loadVideo = () => {
        console.log("LOAD......");
        // Later to trigger fullscreen
        this.player.presentFullscreenPlayer()

        // Disable fullscreen
        this.player.dismissFullscreenPlayer()

        // To set video position in seconds (seek)
        this.player.seek(0)
    }
    renderTrailerItem = (item) => {
        console.log("ITEM...", item);
        let videoUrl = `${Constants.YOUTUBE_BASE_URL}/embed/${item.key}`;
        console.log("VIDEOURL...", videoUrl);
        return (
            <WebView
                style={Styles.trailer}
                scalesPageToFit={false}
                //javaScriptEnabled={true}
                //domStorageEnabled={true}
                source={{ uri: videoUrl }}
            />
        )
    }
    render() {
        let { trailerList } = this.props;
        console.log("Trailer List....", trailerList)
        return (
            trailerList &&
            <View style={{ flex: 1 }}>
                <FlatList
                    data={trailerList}
                    renderItem={({ item }) => this.renderTrailerItem(item)}
                />
            </View>
        )
    }
}
export default RenderTrailerItem;