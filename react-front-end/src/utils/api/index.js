import axios from 'axios';
//import config from '../config';
//import { StorageService } from '../services';
//import jwt from 'jsonwebtoken';

const instance = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(request => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

// TODO: rediret the user on 401 error status
/*instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // auth error - redirectto login
    } else if (!error.response) {
      // Network Error.
      return Promise.reject({ message: 'Network Error' });
    }
    return Promise.reject(error.response);
  },
); */

export default instance;