import { NavigationActions } from 'react-navigation'
import * as fetchTvshowsApis from '../../movie-finder-endpoints';
import {
    TVSHOWS, TVSHOWS_DETAIL, RESET_TVSHOWS_DETAIL,
    POPULAR_TVSHOWS, TOP_RATED_TVSHOWS, TV_ONAIR_TVSHOWS, TV_ARIVING_TVSHOWS,
    RESET_POPULAR_TVSHOWS, RESET_TOP_RATED_TVSHOWS, RESET_TV_ONAIR_TVSHOWS, RESET_TV_ARIVING_TVSHOWS,
    SEARCHED_TVSHOWS, RESET_SEARCHED_TVSHOWS, RESET_TVSHOWS, POPULAR_TVSHOWS_PAGENO, TOP_RATED_TVSHOWS_PAGENO, TV_ONAIR_TVSHOWS_PAGENO, TV_ARIVING_TVSHOWS_PAGENO, SEARCHED_TVSHOWS_PAGENO,
} from '../ActionTypes/moviesActionTypes';
import { ROUTE_NAME } from '../Constants/RouteNameConstant';
import Constants from '../Constants/Constants';
import { setDataFetching } from './fetchMovieActions';

const path = '/Users/dhruva/Desktop/popular.json';
export const backAction = () => {
    return (dispatch) => {
        dispatch({ type: NavigationActions.BACK });
    }
}


export const updateTvshowsPageNo = (TvshowsType, nextPage) => {
    return (dispatch) => {
        switch (TvshowsType) {
            case Constants.POPULAR_TVSHOWS:
                dispatch({ type: POPULAR_TVSHOWS_PAGENO, payload: nextPage });
                break;
            case Constants.TOP_RATED_TVSHOWS:
                dispatch({ type: TOP_RATED_TVSHOWS_PAGENO, payload: nextPage });
                break;
            case Constants.TV_ONAIR_TVSHOWS:
                dispatch({ type: TV_ONAIR_TVSHOWS_PAGENO, payload: nextPage });
                break;
            case Constants.TV_ARIVING_TVSHOWS:
                dispatch({ type: TV_ARIVING_TVSHOWS_PAGENO, payload: nextPage });
                break;
            case Constants.SEARCHED_TVSHOWS:
                dispatch({ type: SEARCHED_TVSHOWS_PAGENO, payload: nextPage });
                break;
            default:
                break;
        }

    }
}

export const resetSearchedTvshows = () => {
    return (dispatch) => {
        dispatch({ type: RESET_SEARCHED_TVSHOWS });
    }
}
export const searchTvshows = (queryString, pageNo, refresh) => {
    return (dispatch) => {
        if (pageNo < 2) {
            dispatch(setDataFetching(true));
        } else {
            dispatch({ type: SEARCHED_TVSHOWS.PENDING })
        }
        return fetchTvshowsApis.searchTvshows(queryString, pageNo)
            .then((response) => {
                dispatch({ type: SEARCHED_TVSHOWS.SUCCESS, payload: { searchTvshowList: response.data, refresh } });
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                }
                return response;
            }).catch((error) => {
                console.log(error)
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                } else {
                    dispatch({ type: SEARCHED_TVSHOWS.ERROR })
                }
                return error;
            })
    }
}

export const fetchTvshows = (pageNo, TvshowsType, refresh) => {
    return (dispatch) => {
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
        if (pageNo < 2) {
            dispatch(setDataFetching(true));
        }
        return fetchTvshowsApis.fetchTvshows(pageNo, TvshowsType)
            .then((response) => {
                switch (TvshowsType) {
                    case Constants.POPULAR_TVSHOWS:
                        dispatch({ type: POPULAR_TVSHOWS.SUCCESS, payload: { tvshowList: response.data, refresh } });
                        break;
                    case Constants.TOP_RATED_TVSHOWS:
                        dispatch({ type: TOP_RATED_TVSHOWS.SUCCESS, payload: { tvshowList: response.data, refresh } });
                        break;
                    case Constants.TV_ONAIR_TVSHOWS:
                        dispatch({ type: TV_ONAIR_TVSHOWS.SUCCESS, payload: { tvshowList: response.data, refresh } });
                        break;
                    case Constants.TV_ARIVING_TVSHOWS:
                        dispatch({ type: TV_ARIVING_TVSHOWS.SUCCESS, payload: { tvshowList: response.data, refresh } });
                        break;
                    default:
                        break;
                }
                // dispatch(NavigationActions.push(ROUTE_NAME[TvshowsType]));
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                }
                return response;
            }).catch((error) => {
                console.log(error)
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
                if (pageNo < 2) {
                    dispatch(setDataFetching(false));
                }
                return error;
            })
    }
}

export const resetPopularTvshowsState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_POPULAR_TVSHOWS });
    }
}
export const resetTopRatedTvshowsState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_TOP_RATED_TVSHOWS });
    }
}
export const resetTvonAirTvshowsState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_TV_ONAIR_TVSHOWS });
    }
}
export const resetTvairingTvshowsState = () => {
    return (dispatch) => {
        dispatch({ type: RESET_TV_ARIVING_TVSHOWS });
    }
}


export const fetchTvshowsDetail = (TvshowsId) => {
    return (dispatch) => {
        dispatch(setDataFetching(true));
        dispatch({ type: TVSHOWS_DETAIL.PENDING })
        return fetchTvshowsApis.fetchTvshowsDetail(movieId)
            .then((response) => {
                dispatch({ type: TVSHOWS_DETAIL.SUCCESS, payload: response.data });
                // dispatch(NavigationActions.push(ROUTE_NAME.TVSHOWS_DETAIL));
                dispatch(setDataFetching(false));
                return response;
            }).catch((error) => {
                console.log(error)
                dispatch(setDataFetching(false));
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