import axios from "axios";
axios.interceptors.response.use(
  response => {
    const data = response.data;
    if (data.code !== 0) {
      return Promise.reject(response);
    } else {
      return data.data;
    }
  },
  err => {
    return Promise.reject(err);
  }
);
export default axios;
