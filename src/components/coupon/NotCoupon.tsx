import React from "react";
import icon_poker_face from "../../assets/icon/icon_poker_face.svg";
import Button from "./../common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

const NotCoupon = () => {
  const navigate = useNavigate();

  const subscribePage = () => {
    navigate("/subscribe");
  };

  return (
    <NotCouponSection>
      <p>
        <strong>아직 멤버십을 구독하지 않았어요</strong>
        <br />
        Zanit을 통해 새로운 칵테일 경험을 시작해봐요!
      </p>
      <Button {...BUTTON_OPTIONS.SUBSCRIBE} onClick={subscribePage} />
    </NotCouponSection>
  );
};

export default NotCoupon;

const NotCouponSection = styled.section`
  margin: 30px 20px 150px;
  padding: 130px 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background: url(${icon_poker_face}) var(--gray100-color) no-repeat center 40px;
  border-radius: 5px;

  strong {
    font-family: var(--font--Bold);
  }

  p {
    font-size: 14px;
    text-align: center;
    line-height: 24px;
  }
`;
