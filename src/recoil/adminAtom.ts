import { atom } from "recoil";
import { SelectPopupTagOptions } from "../pages/admin/bar/Popup";

export const adminPopupTagAtom = atom({
  key: "adminPopupTagAtom",
  default: "입문자용" as SelectPopupTagOptions,
});
