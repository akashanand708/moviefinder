import { NavigationActions } from 'react-navigation'
//import FileSaver from 'file-saver';
import * as fetchMovieApis from '../../movie-finder-endpoints';
import { MOVIES, SEARCHED_MOVIES,RESET_SEARCHED_MOVIES, RESET_MOVIES, MOVIE_DETAIL, RESET_MOVIE_DETAIL, UPDATE_NETWORK_INFO, NOW_PLAYING_MOVIES, POPULAR_MOVIES, TOP_RATED_MOVIES, UPCOMING_MOVIES } from '../ActionTypes/moviesActionTypes';
import { ROUTE_NAME } from '../Constants/RouteNameConstant';
import RNFS from 'react-native-fs';
import Constants from '../Constants/Constants';

const path = '/Users/dhruva/Desktop/popular.json';
export const backAction = () => {
    return (dispatch) => {
        dispatch({ type: NavigationActions.BACK });
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
export const searchMovies = (queryString, pageNo) => {
    return (dispatch) => {
        dispatch({ type: SEARCHED_MOVIES.PENDING })
        return fetchMovieApis.searchMovies(queryString, pageNo)
            .then((response) => {
                dispatch({ type: SEARCHED_MOVIES.SUCCESS, payload: response.data });
                //dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[movieType] }));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch({ type: SEARCHED_MOVIES.ERROR })
                return error;
            })
    }
}

export const fetchMovies = (pageNo, movieType, horizontal) => {
    return (dispatch) => {
        if (horizontal) {
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
        } else {
            dispatch({ type: MOVIES.PENDING })
        }
        return fetchMovieApis.fetchMovies(pageNo, movieType)
            .then((response) => {
                console.log(`${movieType} movies.....`, response);
                if (horizontal) {
                    switch (movieType) {
                        case Constants.NOW_PLAYING_MOVIES:
                            dispatch({ type: NOW_PLAYING_MOVIES.SUCCESS, payload: response.data });
                            break;
                        case Constants.POPULAR_MOVIES:
                            dispatch({ type: POPULAR_MOVIES.SUCCESS, payload: response.data });
                            break;
                        case Constants.TOP_RATED_MOVIES:
                            dispatch({ type: TOP_RATED_MOVIES.SUCCESS, payload: response.data });
                            break;
                        case Constants.UPCOMING_MOVIES:
                            dispatch({ type: UPCOMING_MOVIES.SUCCESS, payload: response.data });
                            break;
                        default:
                            break;
                    }
                } else {
                    dispatch({ type: MOVIES.SUCCESS, payload: response.data });
                }
                // dispatch({ type: NavigationActions.NAVIGATE, routName: ROUTE_NAME[movieType] })
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[movieType] }));
                return response;
            }).catch((error) => {
                console.log(error)
                if (horizontal) {
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
                } else {
                    dispatch({ type: MOVIES.ERROR })
                }
                return error;
            })
    }
}


export const fetchMoviesForJson = (pageNo, movieType) => {
    return (dispatch) => {
        dispatch({ type: MOVIES.PENDING })
        return fetchMovieApis.fetchMovies(pageNo, movieType)
            .then((response) => {
                let totalPageNo = response.data.total_pages;
                let moviesObject = {
                    popular: []
                };
                let movieList = [];
                for (var i = 1; i <= totalPageNo; i++) {
                    fetchMovieApis.fetchMovies(i, movieType)
                        .then((resposne) => {
                            // Array.prototype.push.apply(moviesObject.popular, resposne.data.results)
                            Array.prototype.push.apply(movieList, resposne.data.results)
                            RNFS.writeFile(path, JSON.stringify(movieList), 'utf8')
                                .then((success) => {
                                    console.log('FILE WRITTEN!');
                                })
                                .catch((err) => {
                                    console.log(err.message);
                                });
                            console.log("MOVIE LIST...Inner ", moviesObject)
                        })
                        .catch((error) => {
                            console.log("MOVIE DETAILS JSON ERROR....", error);
                        })
                }
                console.log("MOVIE LIST...Outer ", moviesObject)
            }).catch((error) => {
                console.log(error)
                dispatch({ type: MOVIES.ERROR })
                return error;
            })
    }
}

export const resetPopularMoviesState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_MOVIES });
    }
}


export const fetchMovieDetail = (movieId) => {
    return (dispatch) => {
        dispatch({ type: MOVIE_DETAIL.PENDING })
        return fetchMovieApis.fetchMovieDetail(movieId)
            .then((response) => {
                dispatch({ type: MOVIE_DETAIL.SUCCESS, payload: response.data });
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME.MOVIE_DETAIL }));
                return response;
            }).catch((error) => {
                debugger
                console.log(error)
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