import React, { useRef, useState } from "react";
import Cocktail from "../../common/cocktail/Cocktail";
import updateCocktailImg from "../../../assets/icon/icon_update_cocktail_button.svg";
import closeButton from "../../../assets/icon/icon_close.svg";
import { styled } from "styled-components";
import { handleCocktailList } from "./handleCocktailItem";

export const CocktailItem = ({ ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checked = useRef<boolean>(false);

  return (
    <li>
      <button type="button" onClick={props.deleteCocktailList}>
        <img src={closeButton} alt="아이템 삭제" />
      </button>
      <button type="button">
        <img src={updateCocktailImg} alt="아이템 수정" />
      </button>
      <Cocktail type="secondary" info={props.info} idx={0} />
      <StyledCheckbox
        id={props.id}
        type="checkbox"
        onChange={() => {
          handleCocktailList(checked);
          setIsChecked(checked.current);
        }}
        checked={checked.current}
      />
      <label htmlFor={props.id}></label>
    </li>
  );
};

const StyledCheckbox = styled.input`
  & + label {
    position: relative;
    display: block;
    width: 24px;
    height: 13px;
    float: right;
    background-color: var(--gray300-color);
    border-radius: 7px;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: -1.5px;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
      transition: 0.3s;
    }
  }

  &:checked + label {
    background-color: rgba(241, 76, 41, 0.5);
  }

  &:checked + label::before {
    left: 16px;
    background-color: var(--main-color);
  }

  &:not(:checked) + label::before {
    left: -6.5px;
    background-color: var(--gray100-color);
  }
`;
