import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import speech_bubble from "../../assets/speech_bubble.svg";
import { useNavigate } from "react-router";

const ManualPaymentCoupon = () => {
  let benefit = "25%";
  const navigate = useNavigate();
  const useCouponPage = () => {
    navigate("/useCoupon");
  };

  const subscribeStartPage = () => {
    navigate("/subscribe/start");
  };

  return (
    <>
      <ButtonDiv>
        <Button {...BUTTON_OPTIONS.EXTEND_COUPON} onClick={subscribeStartPage} />
        <Button {...BUTTON_OPTIONS.USE_COUPON} onClick={useCouponPage} />
      </ButtonDiv>
      <BenefitNote>
        <p>{benefit} 저렴한 구독 방법이 있어요!</p>
      </BenefitNote>
    </>
  );
};

export default ManualPaymentCoupon;

const ButtonDiv = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
  margin-bottom: 7px;
`;

const BenefitNote = styled.div`
  background: url(${speech_bubble}) no-repeat;
  p {
    color: var(--white-color);
    font-size: 13px;
    line-height: 24px;
    padding: 13px 10px 10px;
    font-family: var(--font--Medium);
  }
`;
