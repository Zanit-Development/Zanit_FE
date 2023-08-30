// 유저 로그인, 회원가입 API

import { authInstance, defaultInstance } from "./axios";

interface signUpUser {
  userPhone: string;
  userPassword: string;
  userName: string;
  userGender: boolean; //0 : 여         1 : 남,
  marketing: boolean; // 0 : 미동의     1:동의
}

export const signUpAPI = async (userData: signUpUser) => {
  const { userPhone, userPassword, userName, userGender, marketing } = userData;
  try {
    const res = await defaultInstance.post("/signup", { userPhone, userPassword, userName, userGender, marketing });
    return res;
  } catch (e) {
    return e;
  }
};

export interface signInUser {
  id: string;
  pw: string;
}

export const signInAPI = async (userData: signInUser) => {
  const { id, pw } = userData;
  try {
    const res = await authInstance.post("/loginOk", { id, pw });
    return res;
  } catch (e) {
    return e;
  }
};
