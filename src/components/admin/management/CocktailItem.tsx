import React, { useRef, useState } from "react";
import Cocktail from "../../common/cocktail/Cocktail";
import updateCocktailImg from "../../../assets/icon/icon_update_cocktail_button.svg";
import closeButton from "../../../assets/icon/icon_close.svg";
import { styled } from "styled-components";
import { handleCocktailList } from "./handleCocktailItem";
import { useRecoilState } from "recoil";
import { registCocktailListStateAtom } from "../../../recoil/barManageAtom";

export const CocktailItem = ({ ...props }) => {
  const [registCocktailList, setRegistCocktailList] = useRecoilState(registCocktailListStateAtom);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checked = useRef<boolean>(false);
  const showListCount = props.showCocktailListCount;
  const cocktailIdx = parseInt(props.id.split("_")[1]);

  return (
    <li>
      {/* 아이템 삭제 */}
      <button type="button" onClick={props.deleteCocktailList}>
        <img src={closeButton} alt="아이템 삭제" />
      </button>
      {/* 아이템 수정 */}
      <button
        type="button"
        onClick={() => {
          props.setPopupState(false);
          props.setIsShowPopup(true);
          props.setSelectIdx(cocktailIdx);
        }}
      >
        <img src={updateCocktailImg} alt="아이템 수정" />
      </button>
      <Cocktail type="secondary" info={props.info} idx={cocktailIdx} />
      <StyledCheckbox
        id={props.id}
        type="checkbox"
        onChange={() => {
          if (!checked.current && showListCount.current >= 5) {
            console.log("칵테일은 5개까지만 노출됩니다.");
            return;
          }

          if (checked.current) {
            showListCount.current--;
          } else {
            showListCount.current++;
          }

          handleCocktailList(checked);
          setIsChecked(checked.current);
          const showList = registCocktailList.map((item, idx) => {
            if (cocktailIdx === idx) {
              return { ...item, isShowCocktailList: checked.current };
            } else {
              return item;
            }
          });

          setRegistCocktailList(showList);
        }}
        checked={isChecked}
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
