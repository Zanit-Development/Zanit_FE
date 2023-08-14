/**
 * 인터페이스
 */

import { BUTTON_TYPE_VARIANTS, BUTTON_SIZE_VARIANTS, INPUT_TYPE_VARIANTS, INPUT_SIZE_VARIANTS, TAG_TYPE_VARIANTS, ITEM_TYPE_VARIANTS, MODAL_TYPE_VARIANTS } from "./typeCommon";
import { BUTTON_EVENT, INPUT_EVENT } from "./typeEvent";

export interface AxiosOptions {
  timeout?: number;
}

export interface ButtonProps {
  typeVariants: BUTTON_TYPE_VARIANTS;
  sizeVariants: BUTTON_SIZE_VARIANTS;
  value: string;
  disabled: boolean;
  onClick: (e: BUTTON_EVENT) => void;
}

export interface InputProps {
  typeVariants: INPUT_TYPE_VARIANTS;
  sizeVariants: INPUT_SIZE_VARIANTS;
  type: string;
  value: string;
  placeholder: string;
  id?: string;
  minLength?: number;
  maxLength?: number;
  onChange: (e: INPUT_EVENT) => void;
}

export interface TagProps {
  typeVariants: TAG_TYPE_VARIANTS;
  value: string;
  tagId: string;
}

export interface CategoryProps {
  menu: string;
  idx: number;
  onChange: (e: INPUT_EVENT) => void;
}

export interface ItemProps {
  typeVariants: ITEM_TYPE_VARIANTS;
  link: string;
  url: string;
  name: string;
}

export interface ModalProps {
  typeVariants: MODAL_TYPE_VARIANTS;
  title: string;
  content: string;
}
