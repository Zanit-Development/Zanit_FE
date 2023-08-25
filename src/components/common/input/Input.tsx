import React from "react";
import { styled } from "styled-components";
import { InputProps } from "../../../libs/interface/interfaceCommon";
import { StyledInputOption } from "./options";

const Input = ({ typevariants = "primary", sizevariants = "large", ...props }: InputProps) => {
  return <StyledInput typevariants={typevariants} sizevariants={sizevariants} {...props} />;
};

export default Input;

const StyledInput = styled.input<StyledInputOption>`
  width: 100%;
  height: ${(props) => SIZE_VARIANTS[props.sizevariants]};
  padding: 20px;
  background-color: white;
  border-radius: ${(props) => TYPE_VARIANTS[props.typevariants]};
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
