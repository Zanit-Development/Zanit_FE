import React, { useState } from "react";
import { styled } from "styled-components";
import Cocktail from "../../bardetail/Cocktail";
import updateCocktailImg from "../../../assets/icon/icon_update_cocktail_button.svg";
import closeButton from "../../../assets/icon/icon_close.svg";
import { CocktailProps } from "../../../libs/interface/interfaceBarDetail";

export interface CocktailItemProps {
  id: string;
  setShowList: Function;
  info: CocktailProps;
}

export const CocktailItem = ({ ...props }: CocktailItemProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCocktailList = (setChecked: Function) => {
    setChecked(!checked);
    if (checked) {
      props.setShowList();
    } else {
      props.setShowList();
    }
  };

  return (
    <li>
      <button>
        <img src={closeButton} alt="" />
      </button>
      <button>
        <img src={updateCocktailImg} alt="" />
      </button>
      <Cocktail info={{ ...props.info }} idx={0} />
      <StyledCheckbox id={props.id} type="checkbox" onChange={() => handleCocktailList(setChecked)} checked={checked} />
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
