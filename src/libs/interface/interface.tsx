/**
 * 인터페이스
 */

import { TYPE_VARIANTS, SIZE_VARIANTS } from "./type";

export interface AxiosOptions {
  timeout?: number;
}

export interface ButtonProps {
  typeVariants: TYPE_VARIANTS;
  sizeVariants: SIZE_VARIANTS;
  value: string;
  disabled: boolean;
  onClick: () => void;
}
