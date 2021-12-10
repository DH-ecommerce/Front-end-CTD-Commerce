import axios from 'axios';

const api = axios.create({
  baseURL: 'https://t2g1beanstalk-env.eba-q8yvkgmk.us-east-1.elasticbeanstalk.com'
});

export default api;
