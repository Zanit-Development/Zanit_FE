import { authInstance } from "./axios";

export const couponListAPI = async () => {
  try {
    // TODO: 서버 반영 후 post-> get으로 바꿔야댐
    const res = await authInstance.get("/couponList");
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const usedCouponListAPI = async () => {
  try {
    const res = await authInstance.get("/usedCouponList");
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};
