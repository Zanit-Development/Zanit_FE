import React from "react";
import { styled } from "styled-components";
import Button from "../common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import speech_bubble from "../../assets/speech_bubble.svg";
import { useNavigate } from "react-router";
import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { CouponInfoType } from "../../libs/interface/interfaceMyCoupon";

interface ManualPaymentCouponType {
  couponInfo: CouponInfoType;
  subsEndDate: string;
}

const ManualPaymentCoupon = ({ couponInfo, subsEndDate }: ManualPaymentCouponType) => {
  const navigate = useNavigate();

  const subscribeStartPage = () => {
    navigate("/subscribe/start");
  };

  const endDateNote = new Date(subsEndDate);
  endDateNote.setDate(endDateNote.getDate() - 7);

  const currentDate = new Date();

  const btnOption: ButtonProps = {
    typevariants: "fill",
    sizevariants: "small",
    value: "쿠폰 바로 사용하기",
    disabled: couponInfo.used,
    onClick() {
      navigate("/useCoupon");
    },
  };

  return (
    <>
      <ButtonDiv>
        <Button {...BUTTON_OPTIONS.EXTEND_COUPON} onClick={subscribeStartPage} />
        <Button {...btnOption} />
      </ButtonDiv>
      {/* 수동 결제 만료 7일전 노출 */}
      {currentDate >= endDateNote ? (
        <BenefitNote>
          <p>25% 저렴한 구독 방법이 있어요!</p>
        </BenefitNote>
      ) : null}
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
