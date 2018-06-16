import * as fetchMovieApis from '../../movie-finder-endpoints';

export const fetchPopularMovies = () => {
    console.log('FETCH POPULAR MOVIES ACTIONS.........');
    return (dispatch) => {
        return fetchMovieApis.fetchPopularMovies()
            .then((res) => {
                console.log('Popular movies.....', res);
                return response;
            }).catch((error) => {
                console.log(error)
                return error;
            })
    }
}