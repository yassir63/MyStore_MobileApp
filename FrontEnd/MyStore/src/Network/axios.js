import axios from 'axios';

export const axiosClient = axios.create({
    // baseURL: 'http://51.124.185.37',
    baseURL: 'http://10.0.2.2:5000/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });