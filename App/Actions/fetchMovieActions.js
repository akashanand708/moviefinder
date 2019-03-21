import { NavigationActions } from 'react-navigation'
import * as fetchMovieApis from '../../movie-finder-endpoints';
import {
    MOVIES, SEARCHED_MOVIES, RESET_SEARCHED_MOVIES,
    RESET_POPULAR_MOVIES, MOVIE_DETAIL, RESET_MOVIE_DETAIL,
    UPDATE_NETWORK_INFO, NOW_PLAYING_MOVIES, POPULAR_MOVIES,
    TOP_RATED_MOVIES, UPCOMING_MOVIES, NOW_PLAYING_MOVIES_PAGENO,
    POPULAR_MOVIES_PAGENO, TOP_RATED_MOVIES_PAGENO, SEARCHED_MOVIES_PAGENO,
    UPCOMING_MOVIES_PAGENO, RESET_UPCOMING_MOVIES, RESET_TOP_RATED_MOVIES,
    RESET_NOW_PLAYING_MOVIES, SET_COUNTRY, DATA_FETCHING
} from '../ActionTypes/moviesActionTypes';
import { ROUTE_NAME } from '../Constants/RouteNameConstant';
import Constants from '../Constants/Constants';

const path = '/Users/dhruva/Desktop/popular.json';
export const backAction = () => {
    return (dispatch) => {
        dispatch({ type: NavigationActions.BACK });
    }
}

export const setDataFetching = (value) => {
    return { type: DATA_FETCHING, payload: value };
}

export const updatePageNo = (movieType, nextPage) => {
    return (dispatch) => {
        switch (movieType) {
            case Constants.NOW_PLAYING_MOVIES:
                dispatch({ type: NOW_PLAYING_MOVIES_PAGENO, payload: nextPage });
                break;
            case Constants.POPULAR_MOVIES:
                dispatch({ type: POPULAR_MOVIES_PAGENO, payload: nextPage });
                break;
            case Constants.TOP_RATED_MOVIES:
                dispatch({ type: TOP_RATED_MOVIES_PAGENO, payload: nextPage });
                break;
            case Constants.UPCOMING_MOVIES:
                dispatch({ type: UPCOMING_MOVIES_PAGENO, payload: nextPage });
                break;
            case Constants.SEARCHED_MOVIES:
                dispatch({ type: SEARCHED_MOVIES_PAGENO, payload: nextPage });
                break;
            default:
                break;
        }

    }
}

export const updateNetworkInfo = (connectionType) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_NETWORK_INFO, payload: connectionType });
    }
}

export const resetSearchedMovies = () => {
    return (dispatch) => {
        dispatch({ type: RESET_SEARCHED_MOVIES });
    }
}
export const searchMovies = (queryString, pageNo, refresh) => {
    return (dispatch) => {
        if (pageNo < 2) {
            dispatch(setDataFetching(true));
        } else {
            dispatch({ type: SEARCHED_MOVIES.PENDING })
        }
        return fetchMovieApis.searchMovies(queryString, pageNo)
            .then((response) => {
                dispatch({ type: SEARCHED_MOVIES.SUCCESS, payload: { searchMovieList: response.data, refresh } });
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                }
                return response;
            }).catch((error) => {
                console.log(error)
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                } else {
                    dispatch({ type: SEARCHED_MOVIES.ERROR })
                }
                return error;
            })
    }
}

export const fetchMovies = (pageNo, movieType, countryCode, refresh) => {
    return (dispatch) => {
        switch (movieType) {
            case Constants.NOW_PLAYING_MOVIES:
                dispatch({ type: NOW_PLAYING_MOVIES.PENDING })
                break;
            case Constants.POPULAR_MOVIES:
                dispatch({ type: POPULAR_MOVIES.PENDING })
                break;
            case Constants.TOP_RATED_MOVIES:
                dispatch({ type: TOP_RATED_MOVIES.PENDING })
                break;
            case Constants.UPCOMING_MOVIES:
                dispatch({ type: UPCOMING_MOVIES.PENDING })
                break;
            default:
                break;
        }
        if (pageNo < 2) {
            dispatch(setDataFetching(true));
        } else {
            dispatch({ type: MOVIES.PENDING })
        }
        return fetchMovieApis.fetchMovies(pageNo, movieType, countryCode)
            .then((response) => {
                switch (movieType) {
                    case Constants.NOW_PLAYING_MOVIES:
                        dispatch({ type: NOW_PLAYING_MOVIES.SUCCESS, payload: { movieList: response.data, refresh } });
                        break;
                    case Constants.POPULAR_MOVIES:
                        dispatch({ type: POPULAR_MOVIES.SUCCESS, payload: { movieList: response.data, refresh } });
                        break;
                    case Constants.TOP_RATED_MOVIES:
                        dispatch({ type: TOP_RATED_MOVIES.SUCCESS, payload: { movieList: response.data, refresh } });
                        break;
                    case Constants.UPCOMING_MOVIES:
                        dispatch({ type: UPCOMING_MOVIES.SUCCESS, payload: { movieList: response.data, refresh } });
                        break;
                    default:
                        break;
                }
                // dispatch(NavigationActions.push(ROUTE_NAME[movieType]));
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                }
                return response;
            }).catch((error) => {
                console.log(error)
                switch (movieType) {
                    case Constants.NOW_PLAYING_MOVIES:
                        dispatch({ type: NOW_PLAYING_MOVIES.ERROR })
                        break;
                    case Constants.POPULAR_MOVIES:
                        dispatch({ type: POPULAR_MOVIES.ERROR })
                        break;
                    case Constants.TOP_RATED_MOVIES:
                        dispatch({ type: TOP_RATED_MOVIES.ERROR })
                        break;
                    case Constants.UPCOMING_MOVIES:
                        dispatch({ type: UPCOMING_MOVIES.ERROR })
                        break;
                    default:
                        break;
                }
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                }
                return error;
            })
    }
}

export const resetNowPlayingMoviesState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_NOW_PLAYING_MOVIES });
    }
}
export const resetPopularMoviesState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_POPULAR_MOVIES });
    }
}
export const resetTopRatedMoviesState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_TOP_RATED_MOVIES });
    }
}
export const resetUpcomingMoviesState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_UPCOMING_MOVIES });
    }
}


export const fetchMovieDetail = (movieId, movieOrTvshow) => {
    return (dispatch) => {
        dispatch(setDataFetching(true));
        dispatch({ type: MOVIE_DETAIL.PENDING })
        return fetchMovieApis.fetchMovieDetail(movieId, movieOrTvshow)
            .then((response) => {
                dispatch({ type: MOVIE_DETAIL.SUCCESS, payload: response.data });
                // dispatch(NavigationActions.push(ROUTE_NAME.MOVIE_DETAIL));
                dispatch(setDataFetching(false));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch(setDataFetching(false));
                dispatch({ type: MOVIE_DETAIL.ERROR })
                return error;
            })
    }
}

export const resetMovieDetailState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_MOVIE_DETAIL });
    }
}

export const setFilterCountry = (countryCode) => {
    return (dispatch) => {
        dispatch({ type: SET_COUNTRY, payload: countryCode });
    }
}