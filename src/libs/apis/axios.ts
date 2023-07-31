/**
 * Axios 인스턴스
 */

import axios from "axios";
import { axiosOptions } from "../interface/type";
import { authToken } from "../../auth/token";

export const axiosApi = (url: string, options: axiosOptions) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });

  return instance;
};

export const axiosAuthApi = (url: string, options: axiosOptions) => {
  const token = authToken;
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  });

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return instance;
};
