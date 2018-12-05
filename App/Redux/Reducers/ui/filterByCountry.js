import { handleActions } from 'redux-actions';
import { SET_COUNTRY, DATA_FETCHING } from '../../../ActionTypes/moviesActionTypes';

const filterByCountryReducer = handleActions({
    [SET_COUNTRY]: (state, action) => {
        return {
            ...state,
            selected_country: action.payload,
        };
    },
    [DATA_FETCHING]: (state, action) => {
        return {
            ...state,
            data_fetching: action.payload,
        };
    }
},
    {
        selected_country: 'US',
        data_fetching: false

    });

export {
    filterByCountryReducer
};
