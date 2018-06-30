import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Animated } from 'react-native'
import Styles from './PosterStyle'
import images from '../../DevScreens/DevTheme/Images'
import Constants from '../../../App/Constants/Constants';

class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoading: false,
            imageLoaded: false,
            opacity: new Animated.Value(0),
            errorOpacity: new Animated.Value(0),
            imageError: false,
            errorImageUrl: images.errorImage
        }
    }

    imageLoadingStart = () => {
        this.setState({ imageLoading: true });
    }
    imageLoadingComplete = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start((() => {
            this.setState({ imageLoaded: true, imageLoading: false })
        }));
    }
    startErrorAnimation = () => {
        Animated.timing(this.state.errorOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }
    imageLoadingError = () => {
        this.setState({ imageLoaded: false, imageError: true, imageLoading: false }, this.startErrorAnimation());
    }

    render() {
        let { posterUrl,posterStyle } = this.props;
        let { imageError, opacity, errorImageUrl, errorOpacity, imageLoaded, imageLoading } = this.state;
        let movieItemPosterUrl = { uri: `${Constants.POSTER_BASE_URL}/${posterUrl}` };
        return (
                <View style={Styles.itemContainer}>
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
                            onLoadStart={this.imageLoadingStart}
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

                </View>
        )
    }
}
Poster.propTypes = {
    Poster: PropTypes.object
}
export default Poster
