import { authInstance } from "./axios";

export const couponListAPI = async () => {
  try {
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
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const unsubscribeAPI = async () => {
  try {
    const res = await authInstance.post("/unsubscribe");
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};
