import { NavigationActions } from 'react-navigation'
//import FileSaver from 'file-saver';
import * as fetchTvshowsApis from '../../movie-finder-endpoints';
import {
    TVSHOWS, TVSHOWS_DETAIL, RESET_TVSHOWS_DETAIL,
    POPULAR_TVSHOWS, TOP_RATED_TVSHOWS, TV_ONAIR_TVSHOWS, TV_ARIVING_TVSHOWS,
    RESET_POPULAR_TVSHOWS, RESET_TOP_RATED_TVSHOWS, RESET_TV_ONAIR_TVSHOWS, RESET_TV_ARIVING_TVSHOWS,
    SEARCHED_TVSHOWS, RESET_SEARCHED_TVSHOWS, RESET_TVSHOWS,
} from '../ActionTypes/moviesActionTypes';
import { ROUTE_NAME } from '../Constants/RouteNameConstant';
import Constants from '../Constants/Constants';

const path = '/Users/dhruva/Desktop/popular.json';
export const backAction = () => {
    return (dispatch) => {
        dispatch({ type: NavigationActions.BACK });
    }
}

export const resetSearchedTvshows = () => {
    return (dispatch) => {
        dispatch({ type: RESET_SEARCHED_TVSHOWS }); 
    }
}
export const searchTvshows = (queryString, pageNo) => {
    return (dispatch) => {
        dispatch({ type: SEARCHED_TVSHOWS.PENDING })
        return fetchTvshowsApis.searchTvshows(queryString, pageNo)
            .then((response) => {
                dispatch({ type: SEARCHED_TVSHOWS.SUCCESS, payload: response.data });
                //dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[TvshowsType] }));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch({ type: SEARCHED_TVSHOWS.ERROR })
                return error;
            })
    }
}

export const fetchTvshows = (pageNo, TvshowsType, horizontal) => {
    return (dispatch) => {
        if (horizontal) {
            switch (TvshowsType) {
                case Constants.POPULAR_TVSHOWS:
                    dispatch({ type: POPULAR_TVSHOWS.PENDING })
                    break;
                case Constants.TOP_RATED_TVSHOWS:
                    dispatch({ type: TOP_RATED_TVSHOWS.PENDING })
                    break;
                case Constants.TV_ONAIR_TVSHOWS:
                    dispatch({ type: TV_ONAIR_TVSHOWS.PENDING })
                    break;
                case Constants.TV_ARIVING_TVSHOWS:
                    dispatch({ type: TV_ARIVING_TVSHOWS.PENDING })
                    break;
                default:
                    break;
            }
        } else {
            dispatch({ type: TVSHOWS.PENDING })
        }
        return fetchTvshowsApis.fetchTvshows(pageNo, TvshowsType)
            .then((response) => {
                console.log(`${TvshowsType} movies.....`, response);
                if (horizontal) {
                    switch (TvshowsType) {
                        case Constants.POPULAR_TVSHOWS:
                            dispatch({ type: POPULAR_TVSHOWS.SUCCESS, payload: response.data });
                            break;
                        case Constants.TOP_RATED_TVSHOWS:
                            dispatch({ type: TOP_RATED_TVSHOWS.SUCCESS, payload: response.data });
                            break;
                        case Constants.TV_ONAIR_TVSHOWS:
                            dispatch({ type: TV_ONAIR_TVSHOWS.SUCCESS, payload: response.data });
                            break;
                        case Constants.TV_ARIVING_TVSHOWS:
                            dispatch({ type: TV_ARIVING_TVSHOWS.SUCCESS, payload: response.data });
                            break;
                        default:
                            break;
                    }
                } else {
                    dispatch({ type: TVSHOWS.SUCCESS, payload: response.data });
                }
                // dispatch({ type: NavigationActions.NAVIGATE, routName: ROUTE_NAME[TvshowsType] })
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME[TvshowsType] }));
                return response;
            }).catch((error) => {
                console.log(error)
                if (horizontal) {
                    switch (TvshowsType) {
                        case Constants.POPULAR_TVSHOWS:
                            dispatch({ type: POPULAR_TVSHOWS.ERROR })
                            break;
                        case Constants.TOP_RATED_TVSHOWS:
                            dispatch({ type: TOP_RATED_TVSHOWS.ERROR })
                            break;
                        case Constants.TV_ONAIR_TVSHOWS:
                            dispatch({ type: TV_ONAIR_TVSHOWS.ERROR })
                            break;
                        case Constants.TV_ARIVING_TVSHOWS:
                            dispatch({ type: TV_ARIVING_TVSHOWS.ERROR })
                            break;
                        default:
                            break;
                    }
                } else {
                    dispatch({ type: TVSHOWS.ERROR })
                }
                return error;
            })
    }
}

export const resetPopularTvshowsState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_TVSHOWS });
    }
}


export const fetchTvshowsDetail = (TvshowsId) => {
    return (dispatch) => {
        dispatch({ type: TVSHOWS_DETAIL.PENDING })
        return fetchTvshowsApis.fetchTvshowsDetail(movieId)
            .then((response) => {
                dispatch({ type: TVSHOWS_DETAIL.SUCCESS, payload: response.data });
                dispatch(NavigationActions.navigate({ routeName: ROUTE_NAME.TVSHOWS_DETAIL }));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch({ type: TVSHOWS_DETAIL.ERROR })
                return error;
            })
    }
}

export const resetTvshowsDetailState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_TVSHOWS_DETAIL });
    }
}