import axios from "axios";
import AppStorage from "../utils/services/AppStorage";

axios.interceptors.request.use(async (config) => {
  if (config) {
    config.timeout = 40000; //40sec
    const token = await AppStorage.getToken();
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Accept"] = "*/*";

    // console.log("token", token);
    if (token) {
      // console.log("i was in token");
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axios.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error Response:", error.response || error.message);
    return Promise.reject(error);
  }
);

const newAbortSignal = (timeoutMs: number) => {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
};

export const onSuccess = (response: any) => {
  return response.data ? response.data : response;
};

export const onError = (error: any) => {
  // return error.response;
  console.log("erroKKKr", error);
  if (error.response) {
    console.log("Error Data", error.response.data);
    if (error.response.data.message) {
      return error.response.data.message;
    }
    return error.response.data;
  } else if (error.request) {
    console.log("Request", error.request);
    if (error.request._response) {
      return error.request._response;
    } else if (error.request._aborted) {
      return "Connection aborted. Please, try again";
    }
    return error.request;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
    return error.message;
  }
};

export const GetFunc = async (path: string) => {
  return axios.get(path, { signal: newAbortSignal(60000) }); //1 min //.then(onSuccess).catch(onError);
};

export const PostFunc = async (path: string, payload: any) => {
  return axios.post(path, payload, { signal: newAbortSignal(60000) }); //.then(onSuccess).catch(onError);
};

export const PutFunc = async (path: string, payload: any) => {
  return axios.put(path, payload, { signal: newAbortSignal(60000) }); //.then(onSuccess).catch(onError);
};

export const PatchFunc = async (path: string, payload: any) => {
  return axios.patch(path, payload, { signal: newAbortSignal(60000) }); //.then(onSuccess).catch(onError);
};

export const DelFunc = async (path: string) => {
  return axios.delete(path, { signal: newAbortSignal(60000) }); //.then(onSuccess).catch(onError);
};
