/**
 * This file contains the all api end points.
 */
import * as api from './axios-config';
import { Platform } from 'react-native'
import Constants from './App/Constants/Constants';

const API_KEY = '5697c2d8d03861578344d7c40e737193';

/**
 * Fetch different movie types.
 * @param {*} pageNo 
 * @param {*} movieType 
 */
export const fetchMovies = function (pageNo, movieType) {
  switch (movieType) {
    case Constants.POPULAR_MOVIES:
      return api.http_get(`/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.TOP_RATED_MOVIES:
      return api.http_get(`/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.UPCOMING_MOVIES:
      return api.http_get(`/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.NOW_PLAYING_MOVIES:
      return api.http_get(`/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.LATEST_MOVIES:
      return api.http_get(`/latest?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    default:
      break;
  }
};
