import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import speech_bubble from "../../assets/speech_bubble.svg";
import { useNavigate } from "react-router";
import { BUTTON_EVENT } from "../../libs/interface/typeEvent";

const ManualPaymentCoupon = () => {
  let benefit = "25%";
  const navigate = useNavigate();
  const useCouponPage = (e: BUTTON_EVENT) => {
    navigate("/useCoupon");
  };

  return (
    <>
      <ButtonDiv>
        <Button {...BUTTON_OPTIONS.EXTEND_COUPON} />
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
    font-size: 12px;
    padding: 19px 16px 10px;
  }
`;
