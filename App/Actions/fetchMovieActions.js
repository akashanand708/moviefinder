import { NavigationActions } from 'react-navigation'
import * as fetchMovieApis from '../../movie-finder-endpoints';
import { MOVIES, RESET_MOVIES, MOVIE_DETAIL, RESET_MOVIE_DETAIL } from '../ActionTypes/moviesActionTypes';
import { ROUTE_NAME } from '../Constants/RouteNameConstant';


export const backAction = () => {
    return (dispatch) => {
        dispatch({ type: NavigationActions.BACK });
    }
}

export const fetchMovies = (pageNo, movieType) => {
    return (dispatch) => {
        dispatch({ type: MOVIES.PENDING })
        return fetchMovieApis.fetchMovies(pageNo, movieType)
            .then((response) => {
                console.log(`${movieType} movies.....`, response);
                dispatch({ type: MOVIES.SUCCESS, payload: response.data });
                // dispatch({ type: NavigationActions.NAVIGATE, routName: ROUTE_NAME[movieType] })
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[movieType] }));
                return response;
            }).catch((error) => {
                debugger
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