import axios from 'axios';
interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  foo: string;
  bar: number;
}
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
export default axios;
