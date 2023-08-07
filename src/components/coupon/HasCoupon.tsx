import React from "react";
import { styled } from "styled-components";

import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/Button";
import coupon_bg from "../../assets/coupon_bg.svg";
import icon_store from "../../assets/icon/icon_store.svg";
import icon_ticket from "../../assets/icon/icon_ticket.svg";
import icon_arrow_right from "../../assets/icon/icon_arrow_right.svg";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";

export const HasCoupon = () => {
  return (
    <>
      <CouponTopSection>
        <article>
          <TextDiv>
            <span>멤버십 이용중</span>
            <p>
              이 쿠폰은 8월 15일까지
              <br />
              사용할 수 있어요
            </p>
          </TextDiv>
        </article>
        <Button {...BUTTON_OPTIONS.COUPON} />
      </CouponTopSection>
      <CouponBottomSection>
        <Link to="/search">지금 이용 가능한 칵테일 바 찾기</Link>
        <Link to="">ZAN 쿠폰 사용이 처음이신가요?</Link>
      </CouponBottomSection>
    </>
  );
};

const CouponTopSection = styled.section`
  padding: 5px 20px 24px 20px;

  article {
    width: 100%;
    height: 130px;
    background: url(${coupon_bg}) no-repeat center / 100%;
    position: relative;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    text-align: center;
    &:disabled {
      background: var(--gray400-color);
    }
  }
`;

const TextDiv = styled.div`
  position: absolute;
  left: 145px;
  top: 25px;

  span {
    display: inline-block;
    font-size: 12px;
    color: var(--main-color);
    padding: 7px 12px;
    border-radius: 40px;
    border: 1px solid var(--main-color);
    font-family: var(--font--Bold);
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
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
