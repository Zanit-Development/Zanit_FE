import React from "react";
import { styled } from "styled-components";
import { TagProps } from "../../libs/interface/interfaceCommon";

export const Tag = ({ typeVariants = "primary", colorVariants = "main", ...props }: TagProps) => {
  return (
    <>
      <StyledLabel htmlFor="tag_id" typeVariants={typeVariants} colorVariants={colorVariants}>
        {props.value}
      </StyledLabel>
      <input type="checkbox" id="tag_id" />
    </>
  );
};

const StyledLabel = styled.label`
  display: inline-block;
  height: 20px;
  background-color: var(--gray100-color);

  &:checked {
    background-color: var(--main-color);
  }

  & + input {
    display: none;
  }
`;
