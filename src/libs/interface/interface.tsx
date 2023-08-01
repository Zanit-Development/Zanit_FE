/**
 * 인터페이스
 */

import { BUTTON_TYPE_VARIANTS, BUTTON_SIZE_VARIANTS, INPUT_TYPE_VARIANTS } from "./type";

export interface AxiosOptions {
  timeout?: number;
}

export interface ButtonProps {
  typeVariants: BUTTON_TYPE_VARIANTS;
  sizeVariants: BUTTON_SIZE_VARIANTS;
  value: string;
  disabled: boolean;
  onClick: () => void;
}
