const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});


export const MOVIES = asyncActionType('MOVIES');
export const RESET_MOVIES = 'RESET_MOVIES';
export const MOVIE_DETAIL = asyncActionType('MOVIE_DETAIL');
export const RESET_MOVIE_DETAIL = 'RESET_MOVIE_DETAIL';
export const UPDATE_NETWORK_INFO = 'UPDATE_NETWORK_INFO';