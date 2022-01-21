import axios from "axios";
import Auth from "./localStorage";
import { refreshAccessToken } from "./authentication";
const instance = axios.create({
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("log request before sent");
    const token = Auth.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Token " + token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config;
    const res = error.response;
    if (res.status === 401) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        return refreshAccessToken({
          refreshToken: Auth.getRefreshToken(),
        }).then((res) => {
          if (res.status < 300) {
            // 1) put token to LocalStorage
            Auth.setAccessToken(res.data.accessToken);

            // 2) Change Authorization header
            originalRequest.headers["Authorization"] =
              "Token " + Auth.getAccessToken();

            // 3) return originalRequest object with Axios.
            return instance(originalRequest);
          }
        });
      } else {
        Auth.logout();
        //redirect login
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
