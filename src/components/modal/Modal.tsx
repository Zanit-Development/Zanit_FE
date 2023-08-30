/**
 * 모달
 * border : boolean
 * children : 내부 콘텐츠
 * onClose : 닫기 함수
 */

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { css, styled } from "styled-components";

import { ModalProps } from "../../libs/interface/interfaceCommon";

import iconClose from "../../assets/icon/icon_close.svg";

export const Modal = ({ border, children, onClose }: ModalProps) => {
  useEffect(() => {
    const root = document.body;
    root.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = root.style.top;
      root.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return createPortal(
    <BackgroundStyle onClick={onClose}>
      <BoxStyle border={border} onClick={(e) => e.stopPropagation()}>
        {children}
        <ButtonContainer onClick={onClose}>
          <img src={iconClose} alt="닫기 버튼" />
        </ButtonContainer>
      </BoxStyle>
    </BackgroundStyle>,
    document.getElementById("modal")!
  );
};

const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99999;
`;

// dropshadow 추가 필요
const BoxStyle = styled.div<{ border: boolean }>`
  background-color: var(--white-color);
  height: fit-content;
  max-height: 85vh;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;

  ${({ border }) =>
    border &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 50px;
        width: 100%;
        height: 1px;
        background-color: #e2e2e2;
      }
    `}
`;

const iconSize = "15px";
const iconPadding = "5px";
const ButtonContainer = styled.button`
  width: ${iconSize};
  height: ${iconSize};
  padding: ${iconPadding};
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
