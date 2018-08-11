import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Image } from 'react-native'
import Styles from './PosterStyle'
import images from '../../DevScreens/DevTheme/Images'
import Constants from '../../../App/Constants/Constants';
import Shimmer from '../Shimmer/Shimmer';
import { Colors } from '../../../App/Themes';

class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoading: false,
            opacity: new Animated.Value(0),
            errorOpacity: new Animated.Value(0),
            imageError: false,
            errorImageUrl: images.loadingImage,
            posterStyle: {}
        };
        this.posterInterval = null;
        this.errorInterval = null;
    }
    // TODO componentWillMount() {
    //     let { posterUrl } = this.props;
    //     let { posterStyle } = this.state;
    //     let movieItemPosterUrl = `${Constants.POSTER_BASE_URL}/${posterUrl}`;
    //     Image.getSize(movieItemPosterUrl, (width, height) => {
    //         console.log("Image width height...", posterStyle);
    //         let updatedWidth = width,
    //             updatedHeight = height;
    //         if (posterStyle.width && !posterStyle.height) {
    //             // this.setState({ width: posterStyle.width, height: height * (posterStyle.width / width) });
    //             updatedWidth = posterStyle.width;
    //             updatedHeight = height * (posterStyle.width / width);
    //         } else if (!posterStyle.width && posterStyle.height) {
    //             // this.setState({ width: width * (posterStyle.height / height), height: posterStyle.height });
    //             updatedWidth = width * (posterStyle.height / height);
    //             updatedHeight = posterStyle.height;
    //         }

    //         this.setState({
    //             posterStyle: {
    //                 // width: updatedWidth / 2 - 10,
    //                 // height: updatedHeight / 2 + 10,
    //                 width: updatedWidth,
    //                 height: updatedHeight,
    //                 resizeMode: 'contain',
    //                 margin: 10
    //             }
    //         });
    //     });
    // }
    componentWillUnmount() {
        clearInterval(this.posterInterval);
        clearInterval(this.errorInterval);
    }
    // imageLoadingstart = () => {
    //     console.log("IMAGE loading start.....");
    //     this.setState({ imageLoading: true });
    // }
    imageLoadingComplete = () => {
        this.setState({ imageLoading: false }, () => {
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
            clearInterval(this.posterInterval);
        })
    }
    imageLoadingError = () => {
        this.setState({ imageError: true, imageLoading: false }, () => {
            Animated.timing(this.state.errorOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
            clearInterval(this.errorInterval);
        })
    }

    render() {
        let { posterUrl, posterType, posterStyle } = this.props;
        let { imageError, opacity, errorImageUrl, errorOpacity, imageLoading } = this.state;
        let movieItemPosterUrl = { uri: `${Constants.POSTER_BASE_URL}/${posterUrl}` };
        if (posterType === 'detail') {
            errorImageUrl = images.errorPosterDetailImage;
        }
        console.log("poster Image loading....", imageLoading)
        return (
            <View style={Styles.itemContainer}>
                {/* <Shimmer autoRun={true} style={posterStyle} visible={imageLoading}> */}
                {
                    !imageError &&
                    <Animated.Image
                        source={movieItemPosterUrl}
                        style={[
                            {
                                opacity: opacity,
                                transform: [
                                    {
                                        scale: opacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.85, 1],
                                        })
                                    },
                                ],
                            },
                            posterStyle
                        ]}
                        defaultSource={images.loadingImage}
                        //onLoadStart={this.imageLoadingstart}
                        onLoad={this.imageLoadingComplete}
                        onError={this.imageLoadingError}
                    />
                }
                {
                    imageError &&
                    <Animated.Image
                        source={errorImageUrl}
                        style={[
                            {
                                opacity: errorOpacity,
                                transform: [
                                    {
                                        scale: errorOpacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.85, 1],
                                        })
                                    },
                                ],
                            },
                            posterStyle
                        ]}
                    />
                }
                {/* </Shimmer> */}
            </View>
        )
    }
}
Poster.propTypes = {
    Poster: PropTypes.object
}
export default Poster
