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
export const SEARCHED_MOVIES = asyncActionType('SEARCHED_MOVIES');
export const RESET_SEARCHED_MOVIES = 'RESET_SEARCHED_MOVIES';
export const RESET_TOP_RATED_MOVIES = 'RESET_TOP_RATED_MOVIES';
export const UPCOMING_MOVIES = asyncActionType('UPCOMING_MOVIES');
export const RESET_UPCOMING_MOVIES = 'RESET_UPCOMING_MOVIES';
export const RESET_MOVIES = 'RESET_MOVIES';
export const MOVIE_DETAIL = asyncActionType('MOVIE_DETAIL');
export const RESET_MOVIE_DETAIL = 'RESET_MOVIE_DETAIL';
export const UPDATE_NETWORK_INFO = 'UPDATE_NETWORK_INFO';


export const PEOPLE = asyncActionType('PEOPLE');
export const RESET_PEOPLE = 'RESET_PEOPLE';

export const PEOPLE_DETAIL = asyncActionType('PEOPLE_DETAIL');
export const RESET_PEOPLE_DETAIL = 'RESET_PEOPLE_DETAIL';

export const POPULAR_PEOPLE = asyncActionType('POPULAR_PEOPLE');
export const LATEST_PEOPLE = asyncActionType('LATEST_PEOPLE');

export const SEARCHED_PEOPLE = asyncActionType('SEARCHED_PEOPLE');
export const RESET_SEARCHED_PEOPLE = 'RESET_SEARCHED_PEOPLE';



export const TVSHOWS = asyncActionType('TVSHOWS');
export const RESET_TVSHOWS = 'RESET_TVSHOWS';

export const TVSHOWS_DETAIL = asyncActionType('TVSHOWS_DETAIL');
export const RESET_TVSHOWS_DETAIL = 'RESET_TVSHOWS_DETAIL';

export const POPULAR_TVSHOWS = asyncActionType('POPULAR_TVSHOWS');
export const RESET_POPULAR_TVSHOWS = 'RESET_POPULAR_TVSHOWS';

export const TOP_RATED_TVSHOWS = asyncActionType('TOP_RATED_TVSHOWS');
export const RESET_TOP_RATED_TVSHOWS = 'RESET_TOP_RATED_TVSHOWS';

export const TV_ONAIR_TVSHOWS = asyncActionType('TV_ONAIR_TVSHOWS');
export const RESET_TV_ONAIR_TVSHOWS = 'RESET_TV_ONAIR_TVSHOWS';

export const TV_ARIVING_TVSHOWS = asyncActionType('TV_ARIVING_TVSHOWS');
export const RESET_TV_ARIVING_TVSHOWS = 'RESET_TV_ARIVING_TVSHOWS';

export const SEARCHED_TVSHOWS = asyncActionType('SEARCHED_TVSHOWS');
export const RESET_SEARCHED_TVSHOWS = 'RESET_SEARCHED_TVSHOWS';
