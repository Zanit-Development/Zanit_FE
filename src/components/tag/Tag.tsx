import React from "react";
import { css, styled } from "styled-components";
import { TagProps } from "../../libs/interface/interfaceCommon";
import { TAG_TYPE_VARIANTS } from "../../libs/interface/typeCommon";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectTagAtom } from "../../recoil/SearchAtom";

const Tag = ({ typevariants = "primary", ...props }: TagProps) => {
  const navigate = useNavigate();
  const [tagState, setTagState] = useRecoilState(selectTagAtom);
  const [categoryState, setCategoryState] = useRecoilState(selectTagAtom);
  const handleClick = (e: MOUSE_EVENT) => {
    setCategoryState(props?.category!);
    setTagState(props?.value);
    navigate("/search", { state: { category: props.category, value: props.value } });
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
    outline: 1px solid var(--gray500-color);
    font-family: var(--font--Bold);
    color: var(--gray500-color);
  `,
};

const TagContainer = styled.div<{ $typevariants: TAG_TYPE_VARIANTS }>`
  & > button,
  & > span {
    display: inline-block;
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;

    ${(props) => TYPE_VARIANTS[props.$typevariants]}
  }
`;
