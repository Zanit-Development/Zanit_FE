/**
 * 인터페이스
 */

import { InputHTMLAttributes, ButtonHTMLAttributes } from "react";

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {}
