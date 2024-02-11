import axios, { AxiosRequestConfig } from "axios";

const apiConfig: AxiosRequestConfig = {
  baseURL: "http://127.0.0.1:5000",
};

const api = axios.create(apiConfig);

api.interceptors.request.use(
  async (config) => {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
