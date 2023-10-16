/**
 * 검색 atoms
 */

import { atom, selector } from "recoil";
import { CocktailProps } from "../libs/interface/interfaceCocktail";
import { BarProps } from "../libs/interface/interfaceBarDetail";
import { SearchCategoryType } from "../libs/interface/interfaceSearch";
import { barLocationTagOption, barMoodTagOption, cocktailTagOption } from "../pages/search/options";
import generator from "../libs/func/generator";

// 필터링 상태
export const listFilterState = atom({
  key: "listFilterState",
  default: "barName",
});

// 검색어
export const inputValueState = atom({
  key: "inputValueState",
  default: "",
});

// 카테고리
export const categoryState = atom({
  key: "categoryState",
  default: "barName" as SearchCategoryType,
});

// 태그 목록
export const tagListState = atom({
  key: "tagState",
  default: generator.randomAllTag(8),
});

// 태그
export const selectedTagState = atom({
  key: "selectedTagState",
  default: "",
});

// 태그 필터링
export const filteredTagState = selector({
  key: "filteredTagState",
  get: ({ get }) => {
    const filter = get(listFilterState);

    switch (filter) {
      case "cocktail":
        return cocktailTagOption;
      case "barMood":
        return barMoodTagOption;
      case "barLocation":
        return barLocationTagOption;
      default:
        return generator.randomAllTag(8);
    }
  },
});

// 칵테일 목록
export const cocktailListState = atom({
  key: "cocktailListState",
  default: [] as CocktailProps[],
});

// 바 목록
export const searchBarListState = atom({
  key: "searchBarListState",
  default: [] as BarProps[],
});

// 목록 필터링
export const filteredListState = selector({
  key: "filteredListState",
  get: ({ get }) => {
    const filter = get(listFilterState);
    const barList = get(searchBarListState);
    const cocktailList = get(cocktailListState);
    const tag = get(selectedTagState);

    switch (filter) {
      case "cocktail":
        return tag ? cocktailList?.filter((item) => item.recoUser === cocktailTagOption.indexOf(tag)) : cocktailList;
      case "barMood":
        return tag ? barList?.filter((item) => item.barMood === tag) : barList;
      case "barLocation":
        return tag ? barList?.filter((item) => item.barLocation === tag) : barList;
      case "barName":
        return tag ? barList?.filter((item) => item.barMood === tag || item.barLocation === tag) : barList;
    }
  },
});
