import { NavigationActions } from 'react-navigation'
//import FileSaver from 'file-saver';
import * as fetchPeopleApis from '../../movie-finder-endpoints';
import {
    PEOPLE, PEOPLE_DETAIL,
    POPULAR_PEOPLE, LATEST_PEOPLE, RESET_PEOPLE_DETAIL,
    RESET_SEARCHED_PEOPLE, SEARCHED_PEOPLE
} from '../ActionTypes/moviesActionTypes';
import { ROUTE_NAME } from '../Constants/RouteNameConstant';
import Constants from '../Constants/Constants';

const path = '/Users/dhruva/Desktop/popular.json';
export const backAction = () => {
    return (dispatch) => {
        dispatch({ type: NavigationActions.BACK });
    }
}

export const resetSearchedPeople = () => {
    return (dispatch) => {
        dispatch({ type: RESET_SEARCHED_PEOPLE });
    }
}
export const searchPeople = (queryString, pageNo) => {
    return (dispatch) => {
        dispatch({ type: SEARCHED_PEOPLE.PENDING })
        return fetchPeopleApis.searchPeople(queryString, pageNo)
            .then((response) => {
                dispatch({ type: SEARCHED_PEOPLE.SUCCESS, payload: response.data });
                //dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[peopleType] }));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch({ type: SEARCHED_PEOPLE.ERROR })
                return error;
            })
    }
}

export const fetchPeople = (pageNo, peopleType, horizontal) => {
    return (dispatch) => {
        if (horizontal) {
            switch (peopleType) {
                case Constants.POPULAR_PEOPLE:
                    dispatch({ type: POPULAR_PEOPLE.PENDING })
                    break;
                case Constants.LATEST_PEOPLE:
                    dispatch({ type: LATEST_PEOPLE.PENDING })
                    break;
                default:
                    break;
            }
        } else {
            dispatch({ type: PEOPLE.PENDING })
        }
        return fetchPeopleApis.fetchPeople(pageNo, peopleType)
            .then((response) => {
                if (horizontal) {
                    switch (peopleType) {
                        case Constants.POPULAR_PEOPLE:
                            dispatch({ type: POPULAR_PEOPLE.SUCCESS, payload: response.data });
                            break;
                        case Constants.LATEST_PEOPLE:
                            dispatch({ type: LATEST_PEOPLE.SUCCESS, payload: response.data });
                            break;
                        default:
                            break;
                    }
                } else {
                    dispatch({ type: PEOPLE.SUCCESS, payload: response.data });
                }
                // dispatch({ type: NavigationActions.NAVIGATE, routName: ROUTE_NAME[peopleType] })
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[peopleType] }));
                return response;
            }).catch((error) => {
                console.log(error)
                if (horizontal) {
                    switch (peopleType) {
                        case Constants.POPULAR_PEOPLE:
                            dispatch({ type: POPULAR_PEOPLE.ERROR })
                            break;
                        case Constants.LATEST_PEOPLE:
                            dispatch({ type: LATEST_PEOPLE.ERROR })
                            break;
                        default:
                            break;
                    }
                } else {
                    dispatch({ type: PEOPLE.ERROR })
                }
                return error;
            })
    }
}

// export const resetPopularPeopleState = () => {
//     return (dispatch) => {
//         dispatch({ type: RESET_PEOPLE });
//     }
// }


export const fetchPeopleDetail = (peopleId) => {
    return (dispatch) => {
        dispatch({ type: PEOPLE_DETAIL.PENDING })
        return fetchPeopleApis.fetchPeopleDetail(peopleId)
            .then((response) => {
                dispatch({ type: PEOPLE_DETAIL.SUCCESS, payload: response.data });
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME.PEOPLE_DETAIL }));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch({ type: PEOPLE_DETAIL.ERROR })
                return error;
            })
    }
}

export const resetPeopleDetailState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_PEOPLE_DETAIL });
    }
}