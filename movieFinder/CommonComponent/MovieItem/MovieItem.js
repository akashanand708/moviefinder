import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Text, Image, NetInfo, TouchableOpacity, Animated } from 'react-native'
import MovieItemStyle from './MovieItemStyle'
import images from '../../DevScreens/DevTheme/Images'

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const POSTER_ON_ERROR = '';
const POSTER_ON_LOADING = '';
class MovieItem extends Component {
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.movieItem.title !== nextProps.movieItem.title) {
            return true;
        }
        return false;
    }
    render() {
        let { movieItem } = this.props;
        let { imageError, opacity, errorImageUrl, errorOpacity, imageLoaded, imageLoading } = this.state;
        let movieItemPosterUrl = { uri: `${POSTER_BASE_URL}/${movieItem.poster_path}` };
        // console.log("Image url...", movieItemPosterUrl);
        // console.log('Render item....', movieItem.id);
        return (
            <View style={MovieItemStyle.itemContainer}>
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
                            MovieItemStyle.image
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
                            MovieItemStyle.image
                        ]}
                    />
                }

            </View>
        )
    }
}
MovieItem.propTypes = {
    movieItem: PropTypes.object
}
export default MovieItem;


