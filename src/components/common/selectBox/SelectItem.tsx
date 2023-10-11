import React from "react";
import { css, styled } from "styled-components";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";
import CheckMark from "../../../assets/icon/icon-checkmark-black.png";

interface itemType {
  styletype?: "primary" | "secondary";
  option: string;
  isSelected: boolean;
  onSelect: (event: MOUSE_EVENT) => void;
  reset?: boolean;
}

const SelectItem = ({ styletype = "primary", option, isSelected, onSelect, reset = false }: itemType) => {
  const itemclass = `${isSelected ? "selected" : ""} ${reset ? "reset-item" : ""}`;

  return (
    <Item $styletype={styletype} className={itemclass} onClick={onSelect}>
      {option}
    </Item>
  );
};

export default SelectItem;

const LiStyle = {
  primary: css`
    padding-left: 29px;
  `,
  secondary: css`
    padding-left: 14px;
  `,
};

const checkStyle = {
  primary: css`
    left: 6px;
    width: 15px;
    height: 15px;
  `,
  secondary: css`
    left: -2px;
    top: 14px;
    width: 12px;
    height: 12px;
  `,
};

const Item = styled.li<{ $styletype: "primary" | "secondary" }>`
  padding: 13px 0 13px 8px;
  ${({ $styletype }) => LiStyle[$styletype]}

  border-top: 0.5px solid var(--gray300-color);
  &:first-child {
    border-top: none;
  }
  &.reset-item {
    color: var(--gray500-color);
  }
  font-size: inherit;
  font-family: var(--font--Regular);

  position: relative;
  &.selected::before {
    content: "";
    position: absolute;

    ${({ $styletype }) => checkStyle[$styletype]}

    background: url(${CheckMark}) no-repeat 0 / contain;
  }
`;
