// 유저 로그인, 회원가입 API

import { defaultInstance } from "./axios";

interface user {
  userPhone: string;
  userPassword: string;
  userName: string;
  userGender: boolean; //0 : 여         1 : 남,
  marketing: boolean; // 0 : 미동의     1:동의
}

export const signUpAPI = async (userData: user) => {
  const { userPhone, userPassword, userName, userGender, marketing } = userData;
  try {
    const res = await defaultInstance.post("/post", { userPhone, userPassword, userName, userGender, marketing });
    return res;
  } catch (e) {
    return e;
  }
};
