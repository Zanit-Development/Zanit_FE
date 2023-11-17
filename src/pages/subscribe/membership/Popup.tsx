import React from "react";
import { styled } from "styled-components";
import { BUTTON_OPTIONS } from "../../../libs/constants/options/options";
import Button from "../../../components/common/button/Button";
import closeButton from "../../../assets/icon/icon_close.svg";

export const Popup = ({ ...props }) => {
  return (
    <Cover>
      <PopupContainer>
        <PopupHeader>
          <CloseButton
            onClick={(e) => {
              e.preventDefault();
              props.setIsShowPopup(false);
            }}
          >
            <img src={closeButton} alt="닫기" />
          </CloseButton>
          <Line />
          <PopupTitle>Oops!</PopupTitle>
        </PopupHeader>
        이미 X 멤버십을 구독하고 있어요
        <Button
          {...BUTTON_OPTIONS.MEMBERSHIP_IS_ACTIVATED}
          onClick={(e) => {
            e.preventDefault();
            props.setIsShowPopup(false);
          }}
        />
      </PopupContainer>
    </Cover>
  );
};

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Line = styled.div`
  position: relative;
  left: -20px;
  width: calc(100% + 40px);
  height: 1px;
  margin: 30px 0;
  background-color: var(--gray200-color);
`;

const PopupContainer = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: center;
  transform: translate(-50%, -50%);

  & > img {
    width: 310px;
    margin-bottom: 30px;
  }

  & > button {
    margin: 40px 0 10px;
  }

  & > article {
    margin-bottom: 30px;
  }
`;

const PopupHeader = styled.header`
  position: relative;
  width: 100%;
`;

const PopupTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -33px;
  right: 0;
  width: 15px;
  height: 15px;
  cursor: pointer;

  & > img {
    width: 100%;
    object-fit: contain;
  }
`;
