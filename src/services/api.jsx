import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.92.77.5:8080'
});

export default api;