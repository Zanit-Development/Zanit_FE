import React from "react";
import { styled } from "styled-components";

import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import coupon_bg from "../../assets/coupon_bg.svg";
import coupon_bg_used from "../../assets/coupon_bg_used.svg";
import icon_store from "../../assets/icon/icon_store.svg";
import icon_ticket from "../../assets/icon/icon_ticket.svg";
import icon_arrow_right from "../../assets/icon/icon_arrow_right.svg";
import icon_used_coupon from "../../assets/icon/icon_used_coupon.svg";
import icon_sad_face from "../../assets/icon/icon_sad_face.svg";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";

// 이미지 불러오는거 객체로 묶을까

const AutoPaymentCoupon = () => {
  const use = false;
  let name = "name";
  let subscribeStart = "2023.08.28";
  let possibility = "9월 3일";
  let impossibility = "9월 4일";

  return (
    <>
      <CouponTopSection>
        <p>
          {name}님은 {subscribeStart}부터 구독중이예요
        </p>
        {use ? (
          <CouponArticle used={true}>
            <TextDiv>
              <span>멤버십 이용중</span>
              <p>
                이 쿠폰은 {possibility}까지
                <br />
                사용할 수 있어요
              </p>
            </TextDiv>
          </CouponArticle>
        ) : (
          <CouponArticle used={false}>
            <TextDiv>
              <span>멤버십 이용중</span>
              <p>
                다음 쿠폰은
                <br />
                {impossibility}에 만나요
              </p>
            </TextDiv>
          </CouponArticle>
        )}
        <Button {...BUTTON_OPTIONS.USE_COUPON} disabled />
      </CouponTopSection>
      <CouponBottomSection>
        <Link to="/search">지금 이용 가능한 칵테일 바 찾기</Link>
        <Link to="/how-to-use">ZAN 쿠폰 사용이 처음이신가요?</Link>
        <Link to="/">이전 쿠폰 이용 내역</Link>
        <Link to="/">멤버십 정기결제 해지하기</Link>
      </CouponBottomSection>
    </>
  );
};

export default AutoPaymentCoupon;

const CouponTopSection = styled.section`
  padding: 5px 20px 24px 20px;

  p {
    margin-bottom: 20px;
    color: var(--gray500-color);
    font-size: 14px;
  }

  button {
    width: 100%;
    text-align: center;
    &:disabled {
      background: var(--gray400-color);
    }
  }
`;

const CouponArticle = styled.article<{ used: boolean }>`
  width: 100%;
  height: 130px;
  background: url(${(props) => (props.used ? coupon_bg : coupon_bg_used)}) no-repeat center / 100%;
  position: relative;
  margin-bottom: 20px;
`;

const TextDiv = styled.div`
  position: absolute;
  left: 145px;
  top: 25px;
  font-size: 14px;

  span {
    display: block;
    color: var(--main-color);
    font-family: var(--font--Bold);
    margin: 8px 0;
  }

  p {
    line-height: 1.5;
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
