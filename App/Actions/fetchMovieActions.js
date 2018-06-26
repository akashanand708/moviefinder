import * as fetchMovieApis from '../../movie-finder-endpoints';
import { MOVIES, RESET_MOVIES } from '../ActionTypes/moviesActionTypes';

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

export const resetPopularMoviesState = (pageNo) => {
    return (dispatch) => {
        dispatch({ type: RESET_MOVIES });
    }
}