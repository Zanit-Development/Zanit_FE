import React, { ButtonHTMLAttributes } from "react";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ buttonType }: { buttonType: ButtonType }) => {
  return (
    <button type={buttonType.type} onClick={buttonType.onClick}>
      {buttonType.value}
    </button>
  );
};
