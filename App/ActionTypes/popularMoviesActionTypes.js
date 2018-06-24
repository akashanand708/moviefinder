const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});


export const POPULAR_MOVIES = asyncActionType('POPULAR_MOVIES');
export const RESET_POPULAR_MOVIES = 'RESET_POPULAR_MOVIES';