import axios from "axios";
axios.interceptors.response.use((response) => {
  
})
export default function Fetch(...args) {
  return Axios(...args).then(resp => {
    const data = resp.data;
    if (data.code !== 0) {
      return Promise.reject(data);
    } else {
      return Promise.resolve(data);
    }
  });
}
