const asyncActionType = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
});


export const MOVIES = asyncActionType('MOVIES');
export const RESET_MOVIES = 'RESET_MOVIES';