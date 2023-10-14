import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const myCouponInfoAtom = atom({
  key: "myCouponInfo",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
