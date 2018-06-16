/**
 * This file contains the all api end points.
 */
import * as api from './axios-config';
import {Platform} from 'react-native'

const API_KEY = '5697c2d8d03861578344d7c40e737193';
export const fetchPopularMovies = function() {
  return api.http_get(`/popular?api_key=${API_KEY}&language=en-US&page=1`);
};