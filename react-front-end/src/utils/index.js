import axios, { AxiosInstance } from 'axios';
import config from '../config';
import { StorageService } from '../services';
import jwt from 'jsonwebtoken';

const instance: AxiosInstance = axios.create({
  baseURL: config.API_ENDPOINT,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(request => {
  const token = StorageService.get('token');
  if (token) {
    const decodedToken: any = jwt.decode(token, { complete: true });
    if (
      decodedToken &&
      decodedToken.payload &&
      decodedToken.payload.exp < new Date().getTime()
    ) {
      return request;
    }
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // auth error
    } else if (!error.response) {
      // Network Error.
      return Promise.reject({ message: 'Network Error' });
    }
    return Promise.reject(error.response);
  },
);