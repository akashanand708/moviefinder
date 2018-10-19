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
 * Fetch movie and tv shows detail
 * @param {*} movieId 
 */
export const fetchMovieDetail = function (movieId, movieOrTvshow) {
  if (movieOrTvshow === Constants.MOVIE) {
    return api.http_get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US&include_image_language=en,null&append_to_response=videos,images,casts,reviews`);
  } else {
    return api.http_get(`/tv/${movieId}?api_key=${API_KEY}&language=en-US&include_image_language=en,null&append_to_response=videos,images,credits,reviews`);
  }
}



/**
 * Fetch different people types.
 * @param {*} pageNo 
 * @param {*} peopleType 
 */
export const fetchPeople = function (pageNo, peopleType) {
  switch (peopleType) {
    case Constants.POPULAR_PEOPLE:
      return api.http_get(`/person/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.LATEST_PEOPLE:
      return api.http_get(`/person/latest?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    default:
      break;
  }
};

/**
 * Search different people.
 * @param {*} queryString 
 * @param {*} pageNo 
 */
export const searchPeople = function (queryString, pageNo) {
  return api.http_get(`/search/person?api_key=${API_KEY}&language=en-US&query=${queryString}&page=${pageNo}&include_adult=false`);
};


/**
 * Fetch People detail
 * @param {*} peopleId 
 */
export const fetchPeopleDetail = function (peopleId) {
  return api.http_get(`/person/${peopleId}?api_key=${API_KEY}&language=en-US&append_to_response=images,videos,casts,reviews`);
}


/**
 * Fetch different people types.
 * @param {*} pageNo 
 * @param {*} peopleType 
 */
export const fetchTvshows = function (pageNo, peopleType) {
  switch (peopleType) {
    case Constants.POPULAR_TVSHOWS:
      return api.http_get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.TOP_RATED_TVSHOWS:
      return api.http_get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.TV_ONAIR_TVSHOWS:
      return api.http_get(`/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    case Constants.TV_ARIVING_TVSHOWS:
      return api.http_get(`/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${pageNo}`);
    default:
      break;
  }
};

/**
 * Search different tvshows.
 * @param {*} queryString 
 * @param {*} pageNo 
 */
export const searchTvshows = function (queryString, pageNo) {
  return api.http_get(`/search/tv?api_key=${API_KEY}&language=en-US&query=${queryString}&page=${pageNo}&include_adult=false`);
};

/**
 * TODO NOT USED Fetch Tvshows detail
 * @param {*} tvshowId 
 */
export const fetchTvshowsDetail = function (tvshowId) {
  return api.http_get(`/tv/${tvshowId}?api_key=${API_KEY}&language=en-US&append_to_response=images,videos,casts,reviews`);
}