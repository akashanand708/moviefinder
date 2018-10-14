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
      return api.http_get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.TOP_RATED_MOVIES:
      return api.http_get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.UPCOMING_MOVIES:
      return api.http_get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.NOW_PLAYING_MOVIES:
      return api.http_get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.LATEST_MOVIES:
      return api.http_get(`/movie/latest?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    default:
      break;
  }
};

/**
 * Fetch different movie types.
 * @param {*} queryString 
 * @param {*} pageNo 
 */
export const searchMovies = function (queryString, pageNo) {
  return api.http_get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${queryString}&page=${pageNo}&include_adult=false`);
};

/**
 * Fetch movie detail
 * @param {*} movieId 
 */
export const fetchMovieDetail = function (movieId) {
  return api.http_get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=images,videos,casts,reviews`);
}