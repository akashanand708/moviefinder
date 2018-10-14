import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SuperGridSectionList } from 'react-native-super-grid';
import * as fetchMoviesActions from '../../../../App/Actions/fetchMovieActions'
import MovieItem from '../MovieItem';
import AdvertisementBanner from '../../AdvertisementBanner/AdvertisementBanner';
import style from '../MovieItemStyle';
import Constants from '../../../../App/Constants/Constants';
import SuperGridSectionListCustom from '../../SuperGridSectionListCustom';

class RenderMovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 1
        }
    }
    componentDidMount() {
        let { movieType } = this.props;
        if (movieType !== Constants.SEARCHED_MOVIES) {
            this.fetchMovies();
        }
    }

    componentWillUnmount() {
        //this.props.actions.resetPopularMoviesState();
    }
    fetchMovies = () => {
        let { pageNo } = this.state;
        let { movieType, horizontal } = this.props;
        return this.props.actions.fetchMovies(pageNo, movieType, horizontal);
    }
    fetchSearchResult = () => {
        let { pageNo } = this.state;
        let { queryString } = this.props;
        console.log("Render Item query string....", queryString);
        return this.props.actions.searchMovies(queryString, pageNo);
    }
    handleEnd = () => {
        let { movieType, totalPages, totalNowPlayingPages,
            totalPopularPages, totalTopRatedPages, totalUpcomingPages, horizontal, searchedTotalPages,queryString } = this.props;
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
        } else {
            if (movieType === Constants.SEARCHED_MOVIES) {
                totalPages = searchedTotalPages
            }
        }
        let nextPage = this.state.pageNo + 1;
        if (nextPage <= totalPages) {
            this.setState(state => ({ pageNo: state.pageNo + 1 }), () => {

                if (movieType !== Constants.SEARCHED_MOVIES) {
                    this.fetchMovies()
                        .then(() => {
                            this.onEndReachedCalledDuringMomentum = true;
                        })
                } else {
                    this.fetchSearchResult()
                        .then(() => {
                            this.onEndReachedCalledDuringMomentum = true;
                        })
                }
            })
        }
    }
    _keyExtractor = (item, index) => index;

    renderItem = (item) => {
        console.log("Render Movie Items......");
        return <MovieItem
            movieItem={item}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { searchedMoviesFetching, searchedMoviesList, moviesList, moviesFetching, horizontal, nowPlayingMoviesList, popularMoviesList,
            topRatedMoviesList, upcomingMoviesList,
            nowPlayingMoviesFetching, popularMoviesFetching, topRatedMoviesFetching, upcomingMoviesFetching,
            movieType } = this.props;
        console.log("nowPlayingMoviesFetching......", nowPlayingMoviesFetching);
        let staticDimension = 0,
            gridHeight = {},
            spacing = 18;
        if (horizontal) {
            staticDimension = 110;
            gridHeight = { height: 195 };
            spacing = 1;
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
        } else {
            if (movieType === Constants.SEARCHED_MOVIES) {
                moviesList = searchedMoviesList;
                moviesFetching = searchedMoviesFetching;
            }
        }
        console.log("Render Items......");
        return (
            <View>
                {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
                <SuperGridSectionListCustom
                    itemList={moviesList}
                    gridHeight={gridHeight}
                    spacing={spacing}
                    horizontal={horizontal}
                    staticDimension={staticDimension}
                    handleEnd={this.handleEnd}
                    renderItem={this.renderItem}
                    navigation={this.props.navigation}
                    moviesFetching={moviesFetching}
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
        totalPages: state.data.movies.totalPages,

        searchedMoviesList: state.data.searchedMovies.searchedMoviesList,
        searchedMoviesFetching: state.data.searchedMovies.moviesFetching,
        searchedTotalPages: state.data.searchedMovies.totalPages,
    };
};
export default connect(mapStateToProps, mapDispatch)(RenderMovieItem);