import React from "react";
import { styled } from "styled-components";
import { CategoryProps } from "../../libs/interface/interfaceCommon";

const Category: React.FC<CategoryProps> = ({ ...props }: CategoryProps) => {
  const menu = props.menu;
  const idx = props.idx;
  const handleMenu = props.onChange;

  return (
    <MenuContainer>
      <StyledInput type="radio" id={`menu_${idx}`} value={menu} name="menu" defaultChecked={idx === 0 ? true : false} onChange={handleMenu} />
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
  height: 27px;
  font-family: var(--font--Medium);
  font-size: 1rem;
  text-align: center;
  line-height: 27px;
  color: #ababab;
  cursor: pointer;
`;
