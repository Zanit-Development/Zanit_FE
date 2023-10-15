import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { BarProps } from "../libs/interface/interfaceBarDetail";

const { persistAtom } = recoilPersist();

export const filteringBarListAtom = atom({
  key: "filteringBarListAtom",
  default: [] as BarProps[],
  effects_UNSTABLE: [persistAtom],
});

export const filteringBarNameAtom = atom({
  key: "filteringBarNameAtom",
  default: [] as BarProps[],
  effects_UNSTABLE: [persistAtom],
});

export const filteringBarMoodAtom = atom({
  key: "filteringBarMoodAtom",
  default: [] as BarProps[],
  effects_UNSTABLE: [persistAtom],
});

export const filteringBarLocationAtom = atom({
  key: "filteringBarLocationAtom",
  default: [] as BarProps[],
  effects_UNSTABLE: [persistAtom],
});
