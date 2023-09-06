import React from "react";
import { styled } from "styled-components";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";
import CheckMark from "../../../assets/icon/icon-checkmark-black.png";

interface itemType {
  option: string;
  isSelected: boolean;
  onSelect: (event: MOUSE_EVENT) => void;
  reset?: boolean;
}

const SelectItem = ({ option, isSelected, onSelect, reset = false }: itemType) => {
  const itemclass = `${isSelected ? "selected" : ""} ${reset ? "reset-item" : ""}`;

  return (
    <Item className={itemclass} onClick={onSelect}>
      {option}
    </Item>
  );
};

export default SelectItem;

const Item = styled.li`
  padding: 13px 8px;
  padding-left: 29px;
  border-top: 0.5px solid var(--gray300-color);
  &:first-child {
    border-top: none;
  }
  &.reset-item {
    color: var(--gray500-color);
  }
  font-size: 14px;
  font-family: var(--font--Regular);

  position: relative;
  &.selected::before {
    content: "";
    position: absolute;
    left: 6px;
    width: 15px;
    height: 15px;
    background: url(${CheckMark}) no-repeat 0 / contain;
  }
`;
