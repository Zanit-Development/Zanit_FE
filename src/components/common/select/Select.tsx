import React from "react";
import { css, styled } from "styled-components";
import { SelectProps } from "../../../libs/interface/interfaceCommon";
import { StyledSelectOption } from "./selectOptions";

export const Select = ({ typevariants = "fill", sizevariants = "large", ...props }: SelectProps) => {
  console.log();
  return (
    <StyledSelect typevariants={typevariants} sizevarignts={sizevariants} onChange={props.onChange}>
      <option value="default" selected>
        선택
      </option>
      {props.options.map((item, idx) => {
        return <option value={props.values[idx]}>{item}</option>;
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select<StyledSelectOption>`
  ${(props) => TYPE_VARIANTS[props.typevariants]}
  ${(props) => SIZE_VARIANTS[props.sizevarignts]}

  width: 100%;

  &:focus {
    outline: none;
  }

  & > option {
    padding: 20px;
  }
`;

const TYPE_VARIANTS = {
  fill: css`
    border: none;
    border-radius: 24px;
    background-color: var(--gray100-color);
  `,
  stroke: css`
    border: 1px solid var(--gray200-color);
    border-radius: 4px;
    background-color: white;
  `,
};

const SIZE_VARIANTS = {
  large: css`
    height: 45px;
  `,
  small: css`
    height: 40px;
  `,
};
