import React from "react";
import { styled } from "styled-components";
import coupon from "../../assets/subscribe.svg";
import { ALERT_PAYMENT_GUIDE, MEMBERSHIP_COST } from "./subscribeOption";
import { Button } from "../../components/common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { Alert } from "../../components/common/alert/Alert";

export const Popup = () => {
  const ACCOUNT_NUMBER = "000-000000-000000";
  const ACCOUNT_HOLDER = "쟈닛";
  const BANK_NAME = "임시";

  return (
    <Cover>
      <PopupContainer>
        <img src={coupon} alt="쿠폰" />

        <p>
          <span>1</span>'{ACCOUNT_NUMBER} {BANK_NAME} {ACCOUNT_HOLDER}'으로
          <br />
          {MEMBERSHIP_COST}원을 입금해주세요.
        </p>

        <p>
          <span>2</span>아래 '입금확인 요청하기' 버튼을 클릭해
          <br />
          카카오 플러스 친구 'Zanit'을 추가한 뒤,
          <br />
          '구독료 입금 확인 요청하기'탭을 선택해 주세요.
        </p>
      </PopupContainer>

      <Button {...BUTTON_OPTIONS.SUBSCRIBE_POPUP} />

      <Alert content={ALERT_PAYMENT_GUIDE} />
      {/* <Alert content={ALERT_PAYMENT_MANUAL} /> */}
    </Cover>
  );
};

const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupContainer = styled.article`
  width: 350px;
`;
