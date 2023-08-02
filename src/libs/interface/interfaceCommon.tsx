/**
 * 인터페이스
 */

import { BUTTON_TYPE_VARIANTS, BUTTON_SIZE_VARIANTS, INPUT_TYPE_VARIANTS, INPUT_SIZE_VARIANTS, TAG_TYPE_VARIANTS } from "./typeCommon";
import { INPUT_EVENT } from "./typeEvent";

export interface AxiosOptions {
  timeout?: number;
}

export interface ButtonProps {
  typeVariants: BUTTON_TYPE_VARIANTS;
  sizeVariants: BUTTON_SIZE_VARIANTS;
  value: string;
  disabled: boolean;
}

export interface InputProps {
  typeVariants: INPUT_TYPE_VARIANTS;
  sizeVariants: INPUT_SIZE_VARIANTS;
  type: string;
  value: string;
  placeholder: string;
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
