import React from "react";
import { styled } from "styled-components";
import coupon from "../../assets/subscribe.svg";
import { ALERT_PAYMENT_GUIDE, MEMBERSHIP_COST } from "./subscribeOption";
import Button from "../../components/common/button/Button";
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

        <StyledContent>
          <span>1</span>
          <p>
            '{ACCOUNT_NUMBER} {BANK_NAME} {ACCOUNT_HOLDER}'으로
            <br />
            {MEMBERSHIP_COST}원을 입금해주세요.
          </p>
        </StyledContent>

        <StyledContent>
          <span>2</span>
          <p>
            아래 '입금확인 요청하기' 버튼을 클릭해
            <br />
            카카오 플러스 친구 'Zanit'을 추가한 뒤,
            <br />
            '구독료 입금 확인 요청하기'탭을 선택해 주세요.
          </p>
        </StyledContent>

        <Button {...BUTTON_OPTIONS.SUBSCRIBE_POPUP} />

        <Alert content={ALERT_PAYMENT_GUIDE} />
        {/* <Alert content={ALERT_PAYMENT_MANUAL} /> */}
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
  transform: translate(-50%, -50%);

  & > img {
    width: 310px;
    margin-bottom: 30px;
  }

  & > button {
    margin: 20px 0 10px;
  }

  & > article {
    margin-bottom: 30px;
  }
`;

const StyledContent = styled.section`
  font-family: var(--font--Medium);
  font-size: 0.8rem;

  & > span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    border-radius: 10px;
    background-color: var(--main-color);
    color: white;
    text-align: center;
    line-height: 19px;
    vertical-align: top;
  }

  & > p {
    display: inline-block;
    width: calc(100% - 30px);
    margin: 0 0 20px 10px;
    line-height: 20px;
  }
`;
