import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'http://localhost:4000',
});
export default apiAxios;

/**
 * Add token in authorization header and localStorage
 * @param {String} token
 */
export function setBearerToken(token) {
  apiAxios.defaults.headers.common.Authorization = `bearer ${token}`;
  localStorage.setItem('token', token);
}

/**
 * Remove token JWT from authorization header and localStorage
 */
export function removeBearerToken() {
  apiAxios.defaults.headers.common.Authorization = undefined;
  localStorage.removeItem('token');
}

/**
 * Get token from localStorage
 * @returns {string} token if it's finding in localStorage, else undefined
 */
export function getLocalBearerToken() {
  const localToken = localStorage.getItem('token');
  if (localToken) {
    return localToken;
  }
  return undefined;
}
