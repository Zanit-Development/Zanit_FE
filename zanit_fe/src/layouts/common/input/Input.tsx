import React, { InputHTMLAttributes } from "react";
import { setPlaceholder } from "./setPlaceholder";

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

export const Input = ({ inputType }: { inputType: InputType }) => {
  return (
    <input
      type={inputType.type}
      placeholder={setPlaceholder(inputType.type)}
      minLength={inputType.minLength}
      maxLength={inputType.maxLength}
    />
  );
};
