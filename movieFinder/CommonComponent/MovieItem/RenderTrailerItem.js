// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { Animated, View, FlatList } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Styles from './RenderTrailerItemStyle';
import Constants from '../../../App/Constants/Constants';
import Shimmer from '../Shimmer/Shimmer';
import TrailerItem from './TrailerItem';

class RenderTrailerItem extends React.Component {
  
    render() {
        let { trailerList } = this.props;
        console.log("Trailer List....", trailerList)
        return (
            trailerList &&
            <View style={{ flex: 1 }}>
                <FlatList
                    data={trailerList}
                    renderItem={({ item }) => (
                        <TrailerItem
                            trailerItem={item}
                        />
                    )}
                />
            </View>
        )
    }
}
export default RenderTrailerItem;