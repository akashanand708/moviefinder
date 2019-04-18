import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Animated, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Styles from './PosterStyle'
import Constants from '../../../App/Constants/Constants';
import Shimmer from '../Shimmer/Shimmer';
import { Images } from '../../../App/Themes';

class Poster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoading: true,
            opacity: new Animated.Value(0),
            errorOpacity: new Animated.Value(0),
            imageError: false,
            errorImageUrl: Images.movie_placeholder,
            placeholderImage: Images.movie_placeholder,
            posterStyle: {}
        };
        this.posterInterval = null;
        this.errorInterval = null;
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.posterUrl === nextProps.posterUrl) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    componentWillUnmount() {
        clearInterval(this.posterInterval);
        clearInterval(this.errorInterval);
    }

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
        let { posterUrl, posterType, posterStyle, movieName } = this.props;
        let { imageError, opacity, errorImageUrl, errorOpacity, imageLoading, placeholderImage } = this.state,
            imageSize = Constants.IMAGE_SIZE.POSTER_IMAGE_SIZE;
        if (posterType === 'detail') {
            imageSize = Constants.IMAGE_SIZE.BACKDROP_IMAGE_SIZE;
        }
        let movieItemPosterUrl = { uri: `${Constants.POSTER_BASE_URL}/${imageSize}/${posterUrl}` };
        if (['people', 'cast_crew'].includes(posterType)) {
            errorImageUrl = Images.people_placeholder;
            placeholderImage = Images.people_placeholder;
            // console.log("IMAGE ERROR....", peopleName,posterType,movieItemPosterUrl);
        }
        return (
            <View style={[Styles.itemContainer,
            (posterType === 'cast_crew') ? { borderRadius: 50, height: 200 } : { borderRadius: 5 },
            (posterType === 'people') ? { height: '100%', borderRadius: 0 } : {},
            (posterType === 'detail') ? { margin: 0 } : ({ margin: 5, height: '100%' }, Styles.addElevation)]}>
                {/* <Shimmer autoRun={true} style={posterStyle} visible={!imageError && imageLoading}> */}
                {
                    !_.isEmpty(posterUrl) ?
                        (<React.Fragment>

                            {
                                !imageError &&
                                <Animated.Image
                                    ref={r => this.image = r}
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
                            {this.props.children}
                            {
                                posterType === 'detail' &&
                                <LinearGradient ref={r => this.gradiant = r} locations={[0, 1.0]} colors=
                                    {['rgba(255,255,255,0.00)', 'rgba(255,255,255,1)']}
                                    style={Styles.linearGradient}>
                                </LinearGradient>
                            }
                            {
                                imageLoading &&
                                <Image
                                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                                    source={placeholderImage}
                                />
                            }
                            {/* </Shimmer> */}
                        </React.Fragment>) :
                        (
                            <React.Fragment>
                                <Image
                                    style={posterStyle}
                                    source={placeholderImage}
                                />
                                <Text style={{ position: 'absolute', width: '100%',top: 50, left: 0, textAlign: 'center' }}>{movieName}</Text>
                            </React.Fragment>
                        )
                }
            </View>

        )
    }
}
Poster.propTypes = {
    Poster: PropTypes.object
}
export default Poster
