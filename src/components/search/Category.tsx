import React from "react";
import { styled } from "styled-components";
import { CategoryProps } from "../../libs/interface/interfaceCommon";

const Category = ({ ...props }: CategoryProps) => {
  const menu = props.menu;
  const value = props.value;
  const idx = props.idx;
  const handleMenu = props.onChange;

  return (
    <MenuContainer>
      <StyledInput
        type="radio"
        id={`menu_${idx}`}
        value={value}
        name="menu"
        defaultChecked={props.defaultcheck === idx}
        onChange={handleMenu}
      />
      <StyledLabel htmlFor={`menu_${idx}`}>{menu}</StyledLabel>
    </MenuContainer>
  );
};

export default Category;

const MenuContainer = styled.div``;

const StyledInput = styled.input`
  display: none;

  &:checked + label {
    color: var(--black-color);
    border-bottom: 1px solid var(--main-color);
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  width: 50px;
  font-family: var(--font--Medium);
  font-size: 0.9375rem;
  text-align: center;
  line-height: 22px;
  padding-bottom: 4px;
  color: #ababab;
  cursor: pointer;
`;
