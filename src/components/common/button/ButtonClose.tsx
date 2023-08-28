import React from "react";
import { styled } from "styled-components";

import iconClose from "../../../assets/icon/icon_close.svg";
import { ButtonCloseProps } from "../../../libs/interface/interfaceCommon";

const ButtonClose = ({ top, right, onClose }: ButtonCloseProps) => {
  return (
    <ButtonContainer top={top} right={right} onClick={onClose}>
      <img src={iconClose} alt="닫기 버튼" />
    </ButtonContainer>
  );
};

interface Position {
  top: number;
  right: number;
}

const iconSize = "15px";
const iconPadding = "5px";
const ButtonContainer = styled.button<Position>`
  width: ${iconSize};
  height: ${iconSize};
  padding: ${iconPadding};
  position: absolute;
  top: ${(props) => `${props.top}px`};
  right: ${(props) => `${props.right}px`};
  cursor: pointer;
`;

export default ButtonClose;
