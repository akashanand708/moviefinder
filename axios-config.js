
import axiosInstance from 'axios';
import _ from 'lodash';

const authHeaders = [
    'access-token',
    'client',
    'expiry',
    'uid',
    'token-type',
];


const API_ENDPOINT = 'https://api.themoviedb.org/3'


/**
 * Instantiate axios instance with API_ENDPOINT
 */
const axios = axiosInstance.create({
    baseURL: API_ENDPOINT,
    //timeout: 7000
});

function mergeAuthHeaders(config) {
    const hdr = config.headers || {};
    config.headers = Object.assign({}, hdr);
    return Promise.resolve(config);
}

/**
 * The success handler upon http request.
 * @param {*} response
 */
function successHandler(response) {
    return response;
}

/**
 * The error handler upon http request.
 * @param {*} error
 */
function errorHandler(error) {
    // Do something with response error
    // API based error handling.
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log("STATUS IS", error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest.
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return Promise.reject(error);
}


export const http_post = function (url, data, config = {}) {
    return mergeAuthHeaders(config)
        .then((newConfig) => axios.post(
            url,
            // {...data},
            data,
            newConfig
        ).then().catch(errorHandler));
};

export const http_get = function (url, data, config = {}) {
    return mergeAuthHeaders(config)
        .then((newConfig) => {
            newConfig.params = data;
            return axios.get(
                url,
                newConfig
            ).then(successHandler).catch(errorHandler);
        });
};

export const http_delete = function (url, config = {}) {
    return mergeAuthHeaders(config)
        .then((newConfig) => axios.delete(
            url,
            newConfig
        ).then(successHandler).catch(errorHandler));
};

export const http_put = function (url, data, config = {}) {
    return mergeAuthHeaders(config)
        .then((newConfig) => axios.put(
            url,
            data,
            newConfig
        ).then(successHandler).catch(errorHandler));
};

export const http_patch = function (url, data, config = {}) {
    return mergeAuthHeaders(config)
        .then((newConfig) => axios.patch(
            url,
            data,
            newConfig
        ).then(successHandler).catch(errorHandler));
};
