const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});


export const MOVIES = asyncActionType('MOVIES');
export const POPULAR_MOVIES = asyncActionType('POPULAR_MOVIES');
export const RESET_POPULAR_MOVIES = 'RESET_POPULAR_MOVIES';
export const NOW_PLAYING_MOVIES = asyncActionType('NOW_PLAYING_MOVIES');
export const RESET_NOW_PLAYING_MOVIES = 'RESET_NOW_PLAYING_MOVIES';
export const TOP_RATED_MOVIES = asyncActionType('TOP_RATED_MOVIES');
export const RESET_TOP_RATED_MOVIES = 'RESET_TOP_RATED_MOVIES';
export const UPCOMING_MOVIES = asyncActionType('UPCOMING_MOVIES');
export const RESET_UPCOMING_MOVIES = 'RESET_UPCOMING_MOVIES';
export const RESET_MOVIES = 'RESET_MOVIES';
export const MOVIE_DETAIL = asyncActionType('MOVIE_DETAIL');
export const RESET_MOVIE_DETAIL = 'RESET_MOVIE_DETAIL';
export const UPDATE_NETWORK_INFO = 'UPDATE_NETWORK_INFO';