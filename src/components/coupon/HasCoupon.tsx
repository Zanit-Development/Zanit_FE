import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import Button from "../../components/common/button/Button";
import ManualPaymentCoupon from "./ManualPaymentBtn";
import coupon_bg from "../../assets/coupon_bg.svg";
import coupon_bg_used from "../../assets/coupon_bg_used.svg";
import icon_store from "../../assets/icon/icon_store.svg";
import icon_ticket from "../../assets/icon/icon_ticket.svg";
import icon_arrow_right from "../../assets/icon/icon_arrow_right.svg";
import icon_used_coupon from "../../assets/icon/icon_used_coupon.svg";
import icon_sad_face from "../../assets/icon/icon_sad_face.svg";
import { CouponInfoType } from "../../libs/interface/interfaceMyCoupon";
import { UserInfoType } from "../../libs/interface/interfaceUserInfo";
import { ButtonProps } from "../../libs/interface/interfaceCommon";

interface HasCouponProps {
  couponInfo: CouponInfoType;
  userInfo: UserInfoType;
}

const HasCoupon = ({ couponInfo, userInfo }: HasCouponProps) => {
  const subscribeStart = new Date(userInfo.subsStartDate).toLocaleDateString().replace(/\./g, "").replace(/\s/g, ".");
  const subscribeEnd = new Date(userInfo.subsEndDate).toLocaleDateString().replace(/\./g, "").replace(/\s/g, ".");

  // 이번 쿠폰 만료일
  const expDate = new Date(couponInfo.expDate);
  const expDateFormatted = expDate.toLocaleDateString("ko-KR", { month: "long", day: "numeric" });

  // 다음 쿠폰 날짜?
  const subsEndDate = new Date(couponInfo.expDate);
  subsEndDate.setDate(subsEndDate.getDate() + 1);
  const nextCouponDateFormatted = subsEndDate.toLocaleDateString("ko-KR", { month: "long", day: "numeric" });

  // const auto = userInfo.subScribeType;
  const auto = true;

  const couponUsed = couponInfo.used ? `다음 쿠폰은\n${nextCouponDateFormatted}에 만나요` : `이 쿠폰은 ${expDateFormatted}까지\n사용할 수 있어요`;

  const navigate = useNavigate();

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
      <CouponTopSection $auto={auto}>
        <p>
          {userInfo.userName}님은 {subscribeStart}부터 구독중이예요
        </p>
        {auto || <p>구독 만료일은 {subscribeEnd}까지예요</p>}
        <CouponArticle $used={userInfo.couponUsed}>
          <TextDiv>
            <strong>멤버십 이용중</strong>
            <p>{couponUsed}</p>
          </TextDiv>
        </CouponArticle>
        {auto ? <Button {...btnOption} /> : <ManualPaymentCoupon couponInfo={couponInfo} />}
      </CouponTopSection>
      <CouponBottomSection>
        <Link to="/search">지금 이용 가능한 칵테일 바 찾기</Link>
        <Link to="/how-to-use">ZAN 쿠폰 사용이 처음이신가요?</Link>
        <Link to="/use-history">이전 쿠폰 이용 내역</Link>
        {auto && <Link to="/stop-subscribe">멤버십 정기결제 해지하기</Link>}
      </CouponBottomSection>
    </>
  );
};

export default HasCoupon;

const CouponTopSection = styled.section<{ $auto: boolean }>`
  padding: 0 20px 24px;

  & > p {
    line-height: 24px;
    color: var(--gray500-color);
    font-size: 14px;
    &:last-of-type {
      margin-bottom: 16px;
    }
  }

  button {
    &:disabled {
      background: var(--gray400-color);
    }
  }
`;

const CouponArticle = styled.article<{ $used: boolean }>`
  width: 100%;
  height: 130px;
  background: url(${(props) => (props.$used ? coupon_bg_used : coupon_bg)}) no-repeat center / 100%;
  position: relative;
  margin-bottom: 20px;
`;

const TextDiv = styled.div`
  position: absolute;
  left: 145px;
  top: 25px;
  font-size: 14px;

  strong {
    display: block;
    color: var(--main-color);
    font-family: var(--font--Bold);
    margin: 6px 0 12px;
    line-height: 1.125rem;
  }

  p {
    white-space: pre-wrap;
    line-height: 1.3;
    color: #242424;
  }
`;

const CouponBottomSection = styled.section`
  padding: 0 20px 115px;

  a {
    display: block;
    padding: 25px 0 25px 30px;
    border-bottom: 1px solid var(--gray200-color);
    font-family: var(--font--semibold);
    font-size: 1rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 24px;
      width: 20px;
      height: 20px;
      background: no-repeat center;
    }
    &:nth-of-type(1)::before {
      background-image: url(${icon_store});
    }
    &:nth-of-type(2)::before {
      background-image: url(${icon_ticket});
    }
    &:nth-of-type(3)::before {
      background-image: url(${icon_used_coupon});
    }
    &:nth-of-type(4)::before {
      background-image: url(${icon_sad_face});
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 24px;
      width: 20px;
      height: 20px;
      background: url(${icon_arrow_right}) no-repeat center;
    }
  }
`;
