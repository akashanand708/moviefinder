import { combineReducers } from 'redux';
import { networkInfoReducer } from './networkInfo';
import { filterByCountryReducer } from './filterByCountry';

const uiReducers = combineReducers({
    networkInfo: networkInfoReducer,
    filterCountry: filterByCountryReducer
});

export {
    uiReducers
};
