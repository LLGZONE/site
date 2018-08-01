import axios from 'axios';
export interface ServerResponse {
  data: ServerData;
}

export interface ServerData {
  foo: string;
  bar: number;
}
if (!IS_NODE) {
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
}

export default async function http<T>(config): Promise<T> {
  const result = ((await axios.request<T>(config)) as any) as Promise<T>;
  return result;
}
