import React from "react";
import { ButtonProps } from "../../../libs/interface/interfaceCommon";
import { styled } from "styled-components";

export const Button = ({ typeVariants = "primary", sizeVariants = "large", ...props }: ButtonProps) => {
  return (
    <StyledButton typeVariants={typeVariants} sizeVariants={sizeVariants} {...props}>
      {props.value}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: ${(props) => SIZE_VARIANTS[props.sizeVariants]};
  padding: 5px;
  border-radius: ${(props) => TYPE_VARIANTS[props.typeVariants]};
  background-color: var(--main-color);
  box-sizing: border-box;
  font-family: var(--font--Bold);
  font-size: 1rem;
  color: white;
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
    pointer-events: none;
    cursor: default;
  }
`;

const TYPE_VARIANTS = {
  primary: "32px",
  secondary: "4px",
};

const SIZE_VARIANTS = {
  large: "60px",
  small: "50px",
};
