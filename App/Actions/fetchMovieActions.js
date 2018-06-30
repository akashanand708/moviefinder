import * as fetchMovieApis from '../../movie-finder-endpoints';
import { MOVIES, RESET_MOVIES, MOVIE_DETAIL, RESET_MOVIE_DETAIL } from '../ActionTypes/moviesActionTypes';

export const fetchMovies = (pageNo, movieType) => {
    return (dispatch) => {
        dispatch({ type: MOVIES.PENDING })
        return fetchMovieApis.fetchMovies(pageNo, movieType)
            .then((response) => {
                console.log(`${movieType} movies.....`, response);
                dispatch({ type: MOVIES.SUCCESS, payload: response.data });
                return response;
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
                return response;
            }).catch((error) => {
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