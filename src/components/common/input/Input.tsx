import React from "react";
import { styled } from "styled-components";
import { InputProps } from "../../../libs/interface/interfaceCommon";

export const Input = ({ typeVariants = "primary", sizeVariants = "large", ...props }: InputProps) => {
  return <StyledInput typeVariants={typeVariants} sizeVariants={sizeVariants} {...props} />;
};

const StyledInput = styled.input<InputProps>`
  max-width: 100%;
  height: ${(props) => SIZE_VARIANTS[props.sizeVariants]};
  padding: 5px;
  border-radius: ${(props) => TYPE_VARIANTS[props.typeVariants]};
  box-sizing: border-box;
  font-family: var(--font-Medium);
  font-size: 0.8rem;
  color: var(--black-color);

  &:hover,
  &:focus {
    outline: 1px solid var(--main-color);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const TYPE_VARIANTS = {
  primary: "4px",
  secondary: "24px",
};

const SIZE_VARIANTS = {
  large: "50px",
  medium: "46px",
  small: "41px",
};
