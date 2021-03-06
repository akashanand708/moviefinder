import React from 'react'
import { InteractionManager, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Metrics } from '../../../../App/Themes';
import * as fetchMoviesActions from '../../../../App/Actions/fetchMovieActions'
import MovieItem from '../MovieItem';
import AdvertisementBanner from '../../AdvertisementBanner/AdvertisementBanner';
import Constants from '../../../../App/Constants/Constants';
import SuperGridSectionListCustom from '../../SuperGridSectionListCustom';

class RenderMovieItem extends React.PureComponent {

    componentDidMount() {
        let { movieType, horizontal } = this.props;
        InteractionManager.runAfterInteractions(() => {
            if (movieType !== Constants.SEARCHED_MOVIES && horizontal) {
                this.fetchMoviesCommon("");
            }
        })

    }

    fetchMoviesCommon = (refresh) => {
        let pageNo = 1;
        let { movieType,
            pageNoNowPlayingPages, pageNoPopularPages,
            pageNoTopRatedPages, pageNoUpcomingPages } = this.props;

        switch (movieType) {
            case Constants.NOW_PLAYING_MOVIES:
                pageNo = pageNoNowPlayingPages
                break;
            case Constants.POPULAR_MOVIES:
                pageNo = pageNoPopularPages;
                break;
            case Constants.TOP_RATED_MOVIES:
                pageNo = pageNoTopRatedPages
                break;
            case Constants.UPCOMING_MOVIES:
                pageNo = pageNoUpcomingPages
                break;
            default:
                break;
        }
        if (refresh === Constants.REFRESH) {
            pageNo = 1;
        }
        this.fetchMovies(pageNo, refresh);
    }

    componentWillUnmount() {
        //this.props.actions.resetPopularMoviesState();
    }
    fetchMovies = (pageNo, refresh) => {
        let { movieType, countryCode } = this.props;
        return this.props.actions.fetchMovies(pageNo, movieType, countryCode, refresh);
    }
    fetchSearchResult = (pageNo, refresh) => {
        let { queryString } = this.props;
        return this.props.actions.searchMovies(queryString, pageNo, refresh);
    }
    fetchSearchResultCommon = (refresh) => {
        let pageNo = 1;
        this.fetchSearchResult(pageNo, refresh);
    }
    handleEnd = () => {
        let { movieType, totalNowPlayingPages,
            totalPopularPages, totalTopRatedPages, totalUpcomingPages, searchedTotalPages,
            pageNoNowPlayingPages, pageNoPopularPages,
            pageNoTopRatedPages, pageNoUpcomingPages, pageNoSearched } = this.props;
        let totalPages = 0;
        let pageNo = 0;
        switch (movieType) {
            case Constants.NOW_PLAYING_MOVIES:
                totalPages = totalNowPlayingPages;
                pageNo = pageNoNowPlayingPages
                break;
            case Constants.POPULAR_MOVIES:
                totalPages = totalPopularPages;
                pageNo = pageNoPopularPages;
                break;
            case Constants.TOP_RATED_MOVIES:
                totalPages = totalTopRatedPages;
                pageNo = pageNoTopRatedPages
                break;
            case Constants.UPCOMING_MOVIES:
                totalPages = totalUpcomingPages;
                pageNo = pageNoUpcomingPages
                break;
            case Constants.SEARCHED_MOVIES:
                totalPages = searchedTotalPages;
                pageNo = pageNoSearched;
                break;
            default:
                break;
        }

        let nextPage = pageNo + 1;
        if (nextPage <= totalPages) {
            this.props.actions.updatePageNo(movieType, nextPage);
            if (movieType !== Constants.SEARCHED_MOVIES) {
                this.fetchMovies(nextPage, "")
                    .then(() => {
                        this.onEndReachedCalledDuringMomentum = true;


                    })
            } else {
                this.fetchSearchResult(nextPage, "")
                    .then(() => {
                        this.onEndReachedCalledDuringMomentum = true;
                        // this.props.actions.updatePageNo(movieType, nextPage);
                    })
            }
        }
    }
    refreshList = () => {
        let { movieType } = this.props
        switch (movieType) {
            case Constants.NOW_PLAYING_MOVIES:
                this.props.actions.resetNowPlayingMoviesState();
                this.fetchMoviesCommon(Constants.REFRESH);
                break;
            case Constants.POPULAR_MOVIES:
                this.props.actions.resetPopularMoviesState();
                this.fetchMoviesCommon(Constants.REFRESH);
                break;
            case Constants.TOP_RATED_MOVIES:
                this.props.actions.resetTopRatedMoviesState();
                this.fetchMoviesCommon(Constants.REFRESH);
                break;
            case Constants.UPCOMING_MOVIES:
                this.props.actions.resetUpcomingMoviesState();
                this.fetchMoviesCommon(Constants.REFRESH);
                break;
            case Constants.SEARCHED_MOVIES:
                this.props.actions.resetSearchedMovies();
                this.fetchSearchResultCommon(Constants.REFRESH);
                break;
            default:
                break;
        }

    }
    _keyExtractor = (item, index) => item.id;

    renderItem = (item) => {
        return <MovieItem
            movieItem={item}
            key={item.id}
            navigation={this.props.navigation}
        />
    }
    render() {
        let { searchedMoviesFetching, searchedMoviesList, horizontal, nowPlayingMoviesList, popularMoviesList,
            topRatedMoviesList, upcomingMoviesList,
            nowPlayingMoviesFetching, popularMoviesFetching, topRatedMoviesFetching, upcomingMoviesFetching,
            movieType } = this.props;
        let moviesList = [],
            moviesFetching = false;
        let staticDimension = Metrics.screenWidth,
            gridHeight = { height: Metrics.screenHeight - 100 },
            spacing = 12;
        if (horizontal) {
            staticDimension = 110;
            gridHeight = { height: 185 };
            spacing = 1;
        }
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
            case Constants.SEARCHED_MOVIES:
                moviesList = searchedMoviesList;
                moviesFetching = searchedMoviesFetching;
                break;
            default:
                break;
        }


        return (
            <View>
                {/* <AdvertisementBanner
                    authUnitID="ca-app-pub-7021272264047080/8588748681"
                /> */}
                < SuperGridSectionListCustom
                    itemList={moviesList}
                    gridHeight={gridHeight}
                    spacing={spacing}
                    horizontal={horizontal}
                    staticDimension={staticDimension}
                    handleEnd={this.handleEnd}
                    renderItem={this.renderItem}
                    navigation={this.props.navigation}
                    refreshList={this.refreshList}
                    moviesFetching={moviesFetching}
                />
            </View >

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

        pageNoNowPlayingPages: state.data.nowPlayingMovies.pageNo,
        pageNoPopularPages: state.data.popularMovies.pageNo,
        pageNoTopRatedPages: state.data.topRatedMovies.pageNo,
        pageNoUpcomingPages: state.data.upcomingMovies.pageNo,
        pageNoSearched: state.data.searchedMovies.pageNo,


        nowPlayingMoviesFetching: state.data.nowPlayingMovies.moviesFetching,
        popularMoviesFetching: state.data.popularMovies.moviesFetching,
        topRatedMoviesFetching: state.data.topRatedMovies.moviesFetching,
        upcomingMoviesFetching: state.data.upcomingMovies.moviesFetching,

        searchedMoviesList: state.data.searchedMovies.searchedMoviesList,
        searchedMoviesFetching: state.data.searchedMovies.moviesFetching,
        searchedTotalPages: state.data.searchedMovies.totalPages,

        countryCode: state.ui.filterCountry.selected_country
    };
};
export default connect(mapStateToProps, mapDispatch)(RenderMovieItem);