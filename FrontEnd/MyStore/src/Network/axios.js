import axios from 'axios';

export const axiosClient = axios.create({
    // baseURL: 'http://51.124.185.37',
    baseURL: 'http://192.168.1.105:5000/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });