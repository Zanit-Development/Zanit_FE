import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CocktailProps } from "../libs/interface/interfaceCocktail";
import { BarProps } from "../libs/interface/interfaceBarDetail";
import { SearchCategoryType } from "../libs/interface/interfaceSearch";

const { persistAtom } = recoilPersist();

// 검색어
export const inputValueAtom = atom({
  key: "inputValueAtom",
  default: "",
});

// 카테고리
export const categoryAtom = atom({
  key: "selectCategoryAtom",
  default: "barName" as SearchCategoryType,
});

// 태그
export const selectTagAtom = atom({
  key: "selectTagAtom",
  default: "",
});

// 칵테일 관련
export const cocktailListAtom = atom({
  key: "cocktailListAtom",
  default: [] as CocktailProps[],
  effects_UNSTABLE: [persistAtom],
});

export const filteringCocktailListAtom = atom({
  key: "filteringCocktailListAtom",
  default: [] as CocktailProps[],
  effects_UNSTABLE: [persistAtom],
});

// 바 관련
export const searchBarListAtom = atom({
  key: "searchBarListAtom",
  default: [] as BarProps[],
  // effects_UNSTABLE: [persistAtom],
});

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
