import axios from 'axios';
import { serverLogger } from './logger';
axios.interceptors.response.use(
  response => {
    const data = response.data;
    // 站内api
    if (typeof data.code !== 'undefined') {
      if (data.code !== 0) {
        return Promise.reject(response);
      } else {
        return data.data;
      }
    } else {
      // 站外api
      return data;
    }
  },
  err => {
    return Promise.reject(err);
  }
);
async function http(config) {
  const result = await axios.request(config);
  return result;
}

export default http;
