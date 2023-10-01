import React, { useState } from "react";
import { css, styled } from "styled-components";
import { TagProps } from "../../libs/interface/interfaceCommon";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";

const Tag = ({ typevariants = "primary", ...props }: TagProps) => {
  const tagDisabled = typevariants === "primary" ? false : true;
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (e: MOUSE_EVENT) => {
    setIsChecked(!isChecked);
  };
  return (
    <TagContainer typevariants={typevariants} {...props}>
      <input id={props.tagid} type="radio" {...props} disabled={tagDisabled} checked={isChecked} />
      <label htmlFor={props.tagid} onClick={!tagDisabled ? handleChecked : undefined}>
        &#35;{props.value}
      </label>
    </TagContainer>
  );
};

export default Tag;

const TYPE_VARIANTS = {
  primary: css`
    padding: 8px;
    background-color: var(--gray100-color);
    font-family: var(--font--Medium);
    color: var(--black-color);
  `,

  secondary: css`
    padding: 3px;
    background-color: var(--main-color);
    font-family: var(--font--semibold);
    color: white;
  `,

  tertiary: css`
    padding: 3px;
    background-color: transparent;
    outline: 1px solid var(--gray500-color);
    font-family: var(--font--Bold);
    color: var(--gray500-color);
  `,
};

const TagContainer = styled.div<TagProps>`
  & > input {
    display: none;
  }

  & > input:checked + label {
    background-color: var(--main-color);
    color: white;
  }

  & > label {
    display: inline-block;
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    user-select: none;
    cursor: pointer;

    ${(props) => TYPE_VARIANTS[props.typevariants]}
  }
`;
