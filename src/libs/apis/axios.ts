/**
 * Axios 인스턴스
 */

import axios from "axios";
import { authToken } from "../../auth/token";
import { AxiosOptions } from "../interface/interfaceCommon";

export const axiosApi = (url: string, options: AxiosOptions = { timeout: 8000 }) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  });

  return instance;
};

export const axiosAuthApi = (url: string, options: AxiosOptions = { timeout: 8000 }) => {
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
