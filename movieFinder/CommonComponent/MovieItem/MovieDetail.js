import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Styles from './MovieDetailStyle'
import { connect } from 'react-redux'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { bindActionCreators } from 'redux'
import { Fonts } from '../../../App/Themes'
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import Poster from './Poster';
import RenderTrailerItem from './RenderTrailerItem';
import { Colors } from '../../DevScreens/DevTheme';
class MovieDetail extends Component {

    componentDidMount() {
        let { movieId } = this.props.navigation.state.params;
        this.props.actions.fetchMovieDetail(movieId);
    }
    componentWillUnmount() {
        this.props.actions.resetMovieDetailState();
    }
    goBack = () => {
        this.props.navigation.goBack();
        this.props.actions.backAction();
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('movieName', ''),
        };
    };
    render() {
        let { movieDetail, movieDetailFetching } = this.props;
        let releaseDate = new Date(movieDetail.release_date);
        let releaseYear = releaseDate.getFullYear();
        let votePercentage = movieDetail.vote_average;
        console.log("VOTE PERCENTAGE.....", votePercentage);
        if (votePercentage !== undefined && votePercentage > 0) {
            votePercentage = votePercentage * 10;
        }

        let trailerVideoLength = 0;
        if (movieDetail.videos && movieDetail.videos.results.length > 0) {
            trailerVideoLength = movieDetail.videos.results.length;
        }
        return (
            <View style={Styles.mainContainer}>
                {
                    movieDetail && !movieDetailFetching &&
                    <View>
                        {/* <View style={{
                            position: 'absolute',
                            paddingTop: 30,
                            paddingHorizontal: 5,
                            zIndex: 10
                        }}>
                            <TouchableOpacity onPress={this.goBack} style={{
                                marginLeft: 10
                            }}>
                                <Icon name="arrow-circle-left" size={30} style={{ color: Colors.backArrow }} />
                            </TouchableOpacity>
                        </View> */}

                        <ScrollView>
                            <Poster
                                posterUrl={movieDetail.backdrop_path}
                                posterStyle={Styles.image}
                                posterType="detail"
                            />
                            <View style={Styles.description}>
                                <View style={[Styles.title]}>
                                    <Text style={[Styles.detailColor, Styles.titleDetail]}>
                                        {`${movieDetail.original_title} (${releaseYear})`}
                                    </Text>
                                </View>

                                <View style={[Styles.detailMargin, Styles.overview]}>
                                    <Text style={[Styles.detailColor, Fonts.style.h4, Styles.overviewText]}>
                                        Overview:
                                    </Text>
                                    <Text style={[Styles.detailColor, Fonts.style.description, Styles.overviewDetail]}>
                                        {movieDetail.overview}
                                    </Text>
                                </View>
                                <View style={[Styles.detailMargin, Styles.releaseDate]}>
                                    <View style={{}}>
                                        <Text style={[Styles.detailColor, Fonts.style.h4, Styles.releaseDateText]}>
                                            Relese date:
                                        </Text>
                                        <Text style={[Styles.detailColor, Styles.releaseDateDetail]}>
                                            {movieDetail.release_date}
                                        </Text>
                                    </View>
                                    <View style={{}}>
                                        {
                                            votePercentage !== undefined && votePercentage > 0 &&
                                            <View style={Styles.userScores}>
                                                <AnimatedCircularProgress
                                                    size={50}
                                                    width={5}
                                                    fill={votePercentage}
                                                    tintColor="#00e0ff"
                                                    rotation={0}
                                                    onAnimationComplete={() => console.log('onAnimationComplete')}
                                                    backgroundColor="#3d5875"
                                                >
                                                    {
                                                        (fill) => (
                                                            <Text style={{ color: Colors.snow }}>
                                                                {`${votePercentage}%`}
                                                            </Text>
                                                        )
                                                    }
                                                </AnimatedCircularProgress>
                                                <Text style={[Styles.detailColor, Fonts.style.h6, Styles.userScoresText]}>
                                                    User score
                                                </Text>
                                            </View>
                                        }
                                    </View>
                                </View>
                                <View style={[Styles.detailMargin, Styles.status]}>
                                    <Text style={[Styles.detailColor, Fonts.style.h4, Styles.releaseDateText]}>
                                        Status:
                                    </Text>
                                    <Text style={[Styles.detailColor, Styles.statusDetail]}>
                                        {movieDetail.status}
                                    </Text>
                                </View>
                                <View style={[Styles.detailMargin, Styles.trailer]}>
                                    <Text style={[Styles.detailColor, Fonts.style.h4, Styles.trailerText]}>
                                        Trailer:
                                    </Text>
                                    {
                                        trailerVideoLength === 0 &&
                                        <Text style={[Styles.detailColor, Styles.trailerText]}>
                                            Not available
                                        </Text>
                                    }
                                    {
                                        trailerVideoLength > 0 &&
                                        <RenderTrailerItem
                                            trailerList={(movieDetail.videos && movieDetail.videos.results) || []}
                                            navigation={this.props.navigation}
                                        />
                                    }
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                }
                <ActivityIndicator animating={movieDetailFetching} size="large" />
            </View >
        )
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
        movieDetail: state.data.movieDetail.movieDetail,
        movieDetailFetching: state.data.movieDetail.movieDetailFetching,
    };
};

export default connect(mapStateToProps, mapDispatch)(MovieDetail);


