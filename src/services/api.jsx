import axios from 'axios';

const api = axios.create({
  baseURL: 'https://neotechdh.herokuapp.com'
});

export default api;
