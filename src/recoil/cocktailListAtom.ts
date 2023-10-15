import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CocktailProps } from "../libs/interface/interfaceCocktail";

const { persistAtom } = recoilPersist();

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
