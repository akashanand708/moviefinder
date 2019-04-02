import React, { Component } from 'react';

import { ScrollView, StyleSheet, View, Animated, Text, Platform, ActivityIndicator } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types'
import _ from 'lodash';
import styles from './MovieDetailTabNavigator/style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import MovieDetailTabNavigator from './MovieDetailTabNavigator/MovieDetailTabNavigator';
import MovieDetailHeader from './MovieDetailHeader';
import Utils from '../../Utility/Utils';
import BackButton from '../BackButton';
import Constants from '../../../App/Constants/Constants';

const Header_Maximum_Height = 300;

const Header_Minimum_Height = 60;

class MovieDetail extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.AnimatedHeaderValue = new Animated.Value(0);

    }
    componentWillMount() {
        this.props.actions.resetMovieDetailState();
    }
    componentDidMount() {
        this.props.actions.setTab('Info');
        this.props.navigation.addListener("didFocus", () => {
            let { movieId, movieOrTvshow } = this.props.navigation.state.params;
            let { movieDetail } = this.props;
            if (movieId !== movieDetail.id) {
                this.props.actions.fetchMovieDetail(movieId, movieOrTvshow);
            }
        });
    }
    componentWillUnmount() {
        this.props.actions.resetMovieDetailState();
    }
    goBack = () => {
        this.props.navigation.pop();
        this.props.actions.backAction();
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
        };
    };

    render() {
        let { movieDetail, movieDetailFetching, curretnTab } = this.props;
        let { movieOrTvshow } = this.props.navigation.state.params;
        let releasedYear = Utils.getYear(movieDetail.release_date || movieDetail.first_air_date);
        const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

                outputRange: ['#009688', '#00BCD4'],

                extrapolate: 'clamp'
            });

        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [0, (Header_Maximum_Height - Header_Minimum_Height)],

                outputRange: [Header_Maximum_Height, Header_Minimum_Height],

                extrapolate: 'clamp'
            });

        console.log('Enabled...', movieDetail);
        return (
            <HeaderImageScrollView
                maxOverlayOpacity={0.1}
                minOverlayOpacity={0}
                fadeOutForeground={true}
                ScrollViewComponent={'ListView'}
                foregroundParallaxRatio={1.5}
                useNativeDriver={true}
                maxHeight={Header_Maximum_Height}
                minHeight={Header_Minimum_Height}
                renderFixedForeground={() => (
                    <View>
                        {
                            !_.isEmpty(movieDetail) ?
                                <Animatable.View
                                    style={styles.navTitleView}
                                    ref={navTitleView => {
                                        this.navTitleView = navTitleView;
                                    }}>
                                    <BackButton
                                        navigation={this.props.navigation}
                                        style={{}}
                                    />
                                    <Text
                                        style={styles.navTitle}
                                        numberOfLines={1}
                                        ellipsizeMode={"tail"}>
                                        {movieDetail.title || movieDetail.original_name}, ({releasedYear})
                                    </Text>
                                </Animatable.View>
                                : null
                        }
                    </View>
                )}
                renderForeground={() => (
                    <View >
                        {
                            !_.isEmpty(movieDetail) ?
                                <View>
                                    {
                                        movieDetail && !movieDetailFetching &&
                                        <MovieDetailHeader
                                            goBack={this.goBack}
                                            navigation={this.props.navigation}
                                            movieOrTvshow={movieOrTvshow}
                                        />
                                    }
                                </View> : null
                        }
                    </View>
                )}
            >
                <TriggeringView>
                    {
                        !_.isEmpty(movieDetail) ?
                            (<View style={curretnTab === 'Info' ? styles.tabDetailStyle : styles.otherDetailStyle}>
                                {
                                    movieDetail && !movieDetailFetching &&
                                    <MovieDetailTabNavigator
                                        screenProps={{
                                            movieOrTvshow,
                                            navigation: this.props.navigation,
                                            setTabAction: this.props.actions.setTab,
                                        }}
                                    />
                                }
                            </View>) : null
                    }
                </TriggeringView>
            </HeaderImageScrollView>
        );
    }
}

MovieDetail.propTypes = {
    movieItem: PropTypes.object
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchMoviesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        movieDetailFetching: state.data.movieDetail.movieDetailFetching,
        movieDetail: state.data.movieDetail.movieDetail,
        curretnTab: state.data.movieDetail.curretnTab
    };
};

export default connect(mapStateToProps, mapDispatch)(MovieDetail);