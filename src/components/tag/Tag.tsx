import React from "react";
import { css, styled } from "styled-components";
import { TagProps } from "../../libs/interface/interfaceCommon";
import { TAG_TYPE_VARIANTS } from "../../libs/interface/typeCommon";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { categoryState, selectedTagState } from "../../recoil/SearchAtom";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";

const Tag = ({ typevariants = "primary", ...props }: TagProps) => {
  const navigate = useNavigate();
  const setCategory = useSetRecoilState(categoryState);
  const setSelectedTag = useSetRecoilState(selectedTagState);
  const handleClick = (e: MOUSE_EVENT) => {
    setCategory(props.category as SearchCategoryType);
    setSelectedTag(props.value);
    navigate("/search");
  };

  const TagName = typevariants !== "primary" ? "span" : "button";
  return (
    <TagContainer $typevariants={typevariants} {...props}>
      <TagName onClick={typevariants === "primary" ? handleClick : undefined}>&#35;{props.value}</TagName>
    </TagContainer>
  );
};

export default Tag;

const TYPE_VARIANTS = {
  primary: css`
    padding: 8px 12px;
    background-color: var(--gray100-color);
    font-family: var(--font--Medium);
    color: var(--black-color);
    cursor: pointer;
  `,

  secondary: css`
    padding: 3px 12px;
    background-color: var(--main-color);
    font-family: var(--font--semibold);
    color: white;
  `,

  tertiary: css`
    padding: 3px 12px;
    background-color: transparent;
    border: 1px solid var(--gray500-color);
    font-family: var(--font--Bold);
    color: var(--gray500-color);
  `,
};

const TagContainer = styled.div<{ $typevariants: TAG_TYPE_VARIANTS }>`
  & > button,
  & > span {
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;

    ${(props) => TYPE_VARIANTS[props.$typevariants]}
  }
`;
