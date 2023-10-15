import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CocktailProps } from "../libs/interface/interfaceCocktail";
import { BarProps } from "../libs/interface/interfaceBarDetail";
import { SearchCategoryType } from "../libs/interface/interfaceSearch";
import { cocktailTagOption } from "../pages/search/options";

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

// 태그
export const selectTagState = atom({
  key: "selectTagState",
  default: "",
});

// 칵테일 관련
export const cocktailListState = atom({
  key: "cocktailListState",
  default: [] as CocktailProps[],
});

// 바 목록
export const searchBarListState = atom({
  key: "searchBarListState",
  default: [] as BarProps[],
});

// 칵테일 목록
export const listFilterState = atom({
  key: "listFilterState",
  default: "barName",
});

// 목록 필터링
export const filteredListState = selector({
  key: "filteredListState",
  get: ({ get }) => {
    const filter = get(listFilterState);
    const barList = get(searchBarListState);
    const cocktailList = get(cocktailListState);
    const tag = get(selectTagState);

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
