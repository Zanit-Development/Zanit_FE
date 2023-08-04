import React from "react";
import { styled } from "styled-components";
import { InputProps } from "../../../libs/interface/interfaceCommon";

export const Input = ({ typeVariants = "primary", sizeVariants = "large", hasBorder = "yes", ...props }: InputProps) => {
  return <StyledInput typeVariants={typeVariants} sizeVariants={sizeVariants} hasBorder={hasBorder} {...props} />;
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: ${(props) => SIZE_VARIANTS[props.sizeVariants]};
  padding: 20px;
  background-color: white;
  border-radius: ${(props) => TYPE_VARIANTS[props.typeVariants]};
  box-sizing: border-box;
  font-family: var(--font-Medium);
  font-size: 0.8rem;
  color: var(--black-color);
  border: ${(props) => BORDER_VARIANTS[props.hasBorder]};
  margin: ${(props) => props.margin || "none"};

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

const BORDER_VARIANTS = {
  yes: "1px solid #eee",
  no: "none",
};
