import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SuperGridSectionList } from 'react-native-super-grid';
import * as fetchMoviesActions from '../../../App/Actions/fetchMovieActions'
import MovieItem from './MovieItem';
import AdvertisementBanner from '../AdvertisementBanner/AdvertisementBanner';
import style from './MovieItemStyle';
import Constants from '../../../App/Constants/Constants';

class RenderMovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1
        }
    }
    componentDidMount() {
        this.fetchMovies();
    }

    componentWillUnmount() {
        this.props.actions.resetPopularMoviesState();
    }
    fetchMovies = () => {
        let { pageNo } = this.state;
        let { movieType, horizontal } = this.props;
        return this.props.actions.fetchMovies(pageNo, movieType, horizontal);
    }
    handleEnd = () => {
        let { movieType, totalPages, totalNowPlayingPages,
            totalPopularPages, totalTopRatedPages, totalUpcomingPages, horizontal } = this.props;
        if (horizontal) {
            switch (movieType) {
                case Constants.NOW_PLAYING_MOVIES:
                    totalPages = totalNowPlayingPages;
                    break;
                case Constants.POPULAR_MOVIES:
                    totalPages = totalPopularPages;
                    break;
                case Constants.TOP_RATED_MOVIES:
                    totalPages = totalTopRatedPages;
                    break;
                case Constants.UPCOMING_MOVIES:
                    totalPages = totalUpcomingPages;
                    break;
                default:
                    break;
            }
        }
        let nextPage = this.state.pageNo + 1;
        if (nextPage <= totalPages) {
            this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {
                this.fetchMovies()
                    .then(() => {
                        this.onEndReachedCalledDuringMomentum = true;
                    })
            })
        }
    }
    _keyExtractor = (item, index) => index;

    _shouldItemUpdate = (prev, next) => {
        return prev.item !== next.item;
    }
    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };
    render() {
        let { moviesList, moviesFetching, horizontal, nowPlayingMoviesList, popularMoviesList,
            topRatedMoviesList, upcomingMoviesList,
            nowPlayingMoviesFetching, popularMoviesFetching, topRatedMoviesFetching, upcomingMoviesFetching,
            movieType } = this.props;
        console.log("nowPlayingMoviesFetching......", nowPlayingMoviesFetching);
        let staticDimension = 0,
            gridHeight = {};
        if (horizontal) {
            staticDimension = 110;
            gridHeight = { height: 195 }
        }
        if (horizontal) {
            switch (movieType) {
                case Constants.NOW_PLAYING_MOVIES:
                    moviesList = nowPlayingMoviesList;
                    moviesFetching = nowPlayingMoviesFetching;
                    break;
                case Constants.POPULAR_MOVIES:
                    moviesList = popularMoviesList;
                    moviesFetching = popularMoviesFetching;
                    break;
                case Constants.TOP_RATED_MOVIES:
                    moviesList = topRatedMoviesList;
                    moviesFetching = topRatedMoviesFetching;
                    break;
                case Constants.UPCOMING_MOVIES:
                    moviesList = upcomingMoviesList;
                    moviesFetching = upcomingMoviesFetching
                    break;
                default:
                    break;
            }
        }
        return (
            <View>
                {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
                <SuperGridSectionList
                    itemDimension={100}
                    sections={[
                        {
                            title: '',
                            data: moviesList
                        }
                    ]}
                    style={gridHeight}
                    spacing={2}
                    fixed={true}
                    keyExtractor={this._keyExtractor}
                    ListFooterComponent={() => { return <ActivityIndicator animating={true} size="large" /> }}
                    initialNumToRender={1}
                    onEndReached={() => this.handleEnd()}
                    onEndReachedThreshold={0.8}
                    horizontal={horizontal}
                    staticDimension={staticDimension}
                    renderItem={({ item }) => (
                        <MovieItem
                            movieItem={item}
                            navigation={this.props.navigation}
                        />
                    )}
                    renderSectionHeader={({ section }) => (
                        <Text style={{ color: 'green' }}>{section.title}</Text>
                    )}
                />
            </View>

        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(fetchMoviesActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {
        nowPlayingMoviesList: state.data.nowPlayingMovies.nowPlayingMoviesList,
        popularMoviesList: state.data.popularMovies.popularMoviesList,
        topRatedMoviesList: state.data.topRatedMovies.topRatedMoviesList,
        upcomingMoviesList: state.data.upcomingMovies.upcomingMoviesList,

        totalNowPlayingPages: state.data.nowPlayingMovies.totalPages,
        totalPopularPages: state.data.popularMovies.totalPages,
        totalTopRatedPages: state.data.topRatedMovies.totalPages,
        totalUpcomingPages: state.data.upcomingMovies.totalPages,

        nowPlayingMoviesFetching: state.data.nowPlayingMovies.moviesFetching,
        popularMoviesFetching: state.data.popularMovies.moviesFetching,
        topRatedMoviesFetching: state.data.topRatedMovies.moviesFetching,
        upcomingMoviesFetching: state.data.upcomingMovies.moviesFetching,

        moviesList: state.data.movies.moviesList,
        moviesFetching: state.data.movies.moviesFetching,
        totalPages: state.data.movies.totalPages
    };
};
export default connect(mapStateToProps, mapDispatch)(RenderMovieItem);