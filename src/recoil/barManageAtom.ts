import { atom } from "recoil";
import { ManagementCocktailProps } from "../libs/interface/interfaceCocktail";

export const registBarImageListStateAtom = atom({
  key: "registBarImageListStateAtom",
  default: [] as File[],
});

export const registCocktailListStateAtom = atom({
  key: "registCocktailListStateAtom",
  default: [] as ManagementCocktailProps[],
});

export const registBarPreviewImageListStateAtom = atom({
  key: "registBarPreviewImageListStateAtom",
  default: [] as string[],
});
