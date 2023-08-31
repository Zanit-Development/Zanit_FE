import React from "react";
import { css, styled } from "styled-components";
import { InputProps } from "../../../libs/interface/interfaceCommon";
import { StyledInputOption } from "./inputOptions";

const Input = ({ typevariants = "basic", sizevariants = "large", ...props }: InputProps) => {
  return <StyledInput typevariants={typevariants} sizevariants={sizevariants} {...props} />;
};

export default Input;

const StyledInput = styled.input<StyledInputOption>`
  ${(props) => TYPE_VARIANTS[props.typevariants]}

  width: 100%;
  height: ${(props) => SIZE_VARIANTS[props.sizevariants]};
  padding: 20px;
  background-color: white;
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
  basic: css`
    border: 1px solid var(--gray200-color);
    border-radius: 4px;
  `,

  search: css`
    border: none;
    border-radius: 24px;
  `,
};

const SIZE_VARIANTS = {
  large: "50px",
  medium: "46px",
  small: "41px",
};
