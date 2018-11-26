import { handleActions } from 'redux-actions';
import { SET_COUNTRY } from '../../../ActionTypes/moviesActionTypes';

const filterByCountryReducer = handleActions({
    [SET_COUNTRY]: (state, action) => {
        return {
            ...state,
            selected_country: action.payload,
        };
    }
},
    {
        selected_country: 'US'

    });

export {
    filterByCountryReducer
};
