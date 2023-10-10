// 유저 로그인, 회원가입 API

import { defaultInstance, formDataInstance } from "./axios";

interface signUpUser {
  userPhone: string;
  userPassword: string;
  userName: string;
  userGender: boolean; //0 : 여         1 : 남,
  marketing: boolean; // 0 : 미동의     1:동의
}

interface ApiResponse {
  status: number;
  data: string;
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

export const signInAPI = async (formData: FormData): Promise<ApiResponse> => {
  try {
    const res = await formDataInstance.post("/loginOk", formData);

    console.log(res.data);

    return { status: res.status, data: res.data };
  } catch (e) {
    console.error(e);
    return { status: 500, data: "api 호출 실패" };
  }
};

export const findPwAPI = async (phoneNumber: string) => {
  try {
    const res = await formDataInstance.post("/findPw", phoneNumber);
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const resetPwAPI = async (userUid: string, passWord: string) => {
  try {
    const res = await defaultInstance.post("/resetPw", { userUid, passWord });
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};
