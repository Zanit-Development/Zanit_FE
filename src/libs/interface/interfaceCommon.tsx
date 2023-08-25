/**
 * 인터페이스
 */

import { BUTTON_TYPE_VARIANTS, BUTTON_SIZE_VARIANTS, INPUT_TYPE_VARIANTS, INPUT_SIZE_VARIANTS, TAG_TYPE_VARIANTS, ITEM_TYPE_VARIANTS, MODAL_TYPE_VARIANTS } from "./typeCommon";
import { BUTTON_EVENT, INPUT_EVENT } from "./typeEvent";

export interface AxiosOptions {
  timeout?: number;
}

export interface ButtonProps {
  typevariants: BUTTON_TYPE_VARIANTS;
  sizevariants: BUTTON_SIZE_VARIANTS;
  value: string;
  disabled: boolean;
  onClick: (e: BUTTON_EVENT) => void;
}

export interface InputProps {
  typevariants: INPUT_TYPE_VARIANTS;
  sizevariants: INPUT_SIZE_VARIANTS;
  type: string;
  value: string;
  placeholder: string;
  id?: string;
  minlength?: number;
  maxlength?: number;
  onChange: (e: INPUT_EVENT) => void;
}

export interface TagProps {
  typevariants: TAG_TYPE_VARIANTS;
  value: string;
  tagId: string;
  name: string;
}

export interface CategoryProps {
  menu: string;
  idx: number;
  onChange: (e: INPUT_EVENT) => void;
}

export interface ItemProps {
  typevariants: ITEM_TYPE_VARIANTS;
  link: string;
  url: string;
  name: string;
}

export interface ModalProps {
  typevariants: MODAL_TYPE_VARIANTS;
  title: string;
  content: string;
  buttonoptions: ButtonProps[];
  activate: boolean;
}
