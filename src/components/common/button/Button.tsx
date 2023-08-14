import React from "react";
import { ButtonProps } from "../../../libs/interface/interfaceCommon";
import { css, styled } from "styled-components";

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props}>{props.value}</StyledButton>;
};

export default Button;

const TYPE_VARIANTS = {
  fill: css`
    background-color: var(--main-color);
    outline: none;
    color: white;
  `,

  stroke: css`
    background-color: white;
    border: 1px solid var(--main-color);
    color: var(--main-color);
  `,
};

const SIZE_VARIANTS = {
  large: css`
    height: 60px;
    border-radius: 30px;
  `,

  small: css`
    height: 50px;
    border-radius: 25px;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => TYPE_VARIANTS[props.typeVariants]}
  ${(props) => SIZE_VARIANTS[props.sizeVariants]}

  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  font-family: var(--font--Bold);
  font-size: 1rem;
  text-align: center;
  user-select: none;
  transition: filter 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(70%);
  }

  &:disabled {
    background-color: var(--gray500-color);
    color: white;
    pointer-events: none;
    cursor: default;
  }
`;
