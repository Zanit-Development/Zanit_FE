/**
 * Axios 인스턴스
 */

import axios from "axios";
import { AxiosOptions } from "../interface/interfaceCommon";
import { BASE_URL } from "./baseUrl";
import { getLoginCookie } from "../utils/loginCookie";

const axiosApi = (url: string, options: AxiosOptions = { timeout: 8000 }) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });

  return instance;
};

const axiosAuthApi = (url: string, options: AxiosOptions = { timeout: 8000 }) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${getLoginCookie()}`,
      "Content-Type": "application/json",
    },
    ...options,
  });

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getLoginCookie()}`;
    return config;
  });

  return instance;
};

const axiosFormApi = (url: string, options: AxiosOptions = { timeout: 8000 }) => {
  const instance = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${getLoginCookie()}`,
      "Content-Type": "multipart/form-data",
    },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
export const formDataInstance = axiosFormApi(BASE_URL);
