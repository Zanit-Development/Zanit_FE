/**
 * 인터페이스
 */

import { SearchCategoryType } from "./interfaceSearch";
import {
  BUTTON_TYPE_VARIANTS,
  BUTTON_SIZE_VARIANTS,
  INPUT_TYPE_VARIANTS,
  INPUT_SIZE_VARIANTS,
  TAG_TYPE_VARIANTS,
  ITEM_TYPE_VARIANTS,
  SELECT_TYPE_VARIANTS,
  SELECT_SIZE_VARIANTS,
} from "./typeCommon";
import { BUTTON_EVENT, INPUT_EVENT, MOUSE_EVENT, SELECT_EVENT } from "./typeEvent";

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
  value?: string;
  placeholder: string;
  className?: string;
  id?: string;
  minlength?: number;
  maxlength?: number;
  disabled?: boolean;
  onChange?: (e: INPUT_EVENT) => void;
}

export interface TagProps {
  typevariants: TAG_TYPE_VARIANTS;
  value: string;
  category?: string;
}

export interface CategoryProps {
  menu: string;
  value: SearchCategoryType;
  idx: number;
  defaultcheck: boolean;
  onChange: (e: INPUT_EVENT) => void;
}

export interface ItemProps {
  typevariants: ITEM_TYPE_VARIANTS;
  link: string;
  url: string;
  name: string;
}

export interface ModalProps {
  border: boolean;
  onClose?: (e: MOUSE_EVENT) => void;
  children: React.ReactNode;
}

export interface SelectProps {
  typevariants: SELECT_TYPE_VARIANTS;
  sizevariants: SELECT_SIZE_VARIANTS;
  id?: string;
  options: string[];
  values: string[];
  onChange: (e: SELECT_EVENT) => void;
}
