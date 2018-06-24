import * as fetchMovieApis from '../../movie-finder-endpoints';
import { POPULAR_MOVIES, RESET_POPULAR_MOVIES } from '../ActionTypes/popularMoviesActionTypes';

export const fetchPopularMovies = (pageNo) => {
    console.log('FETCH POPULAR MOVIES ACTIONS.........');
    return (dispatch) => {
        dispatch({ type: POPULAR_MOVIES.PENDING })
        return fetchMovieApis.fetchPopularMovies(pageNo)
            .then((response) => {
                console.log('Popular movies.....', response);
                dispatch({ type: POPULAR_MOVIES.SUCCESS, payload: response.data });
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch({ type: POPULAR_MOVIES.ERROR })
                return error;
            })
    }
}

export const resetPopularMoviesState = (pageNo) => {
    return (dispatch) => {
        dispatch({ type: RESET_POPULAR_MOVIES });
    }
}