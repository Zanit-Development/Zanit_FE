import React from "react";
import { DiscountProps } from "./subscribeOption";
import { styled } from "styled-components";
import CouponBack from "../../assets/coupon_bg2.svg";
import RebornBack from "../../assets/reborn_bg.svg";

export const DiscountCoupon = ({ prevCost, cost, rate }: DiscountProps) => {
  return (
    <StyledArticle>
      <h2>Zanit 멤버십</h2>
      <StyledReborn>
        <span>{rate}</span>
      </StyledReborn>
      <StyledPrevCost>{prevCost}</StyledPrevCost>
      <StyledCost>{cost}</StyledCost>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  position: relative;
  width: calc(100% + 12px);
  height: 145px;
  padding-top: 30px;
  padding-left: 80px;
  background: url(${CouponBack}) no-repeat;
  background-size: contain;
  box-sizing: border-box;
  transform: translateX(-6px);

  & > h2 {
    width: 150px;
    margin: 0 auto 15px;
    font-family: var(--font--Bold);
  }

  & > span {
    width: 150px;
    margin: 0 auto;
    display: block;
  }
`;

const StyledReborn = styled.div`
  position: absolute;
  top: 5px;
  right: 50px;
  width: 50px;
  height: 65px;
  background: url(${RebornBack}) no-repeat;
  text-align: center;
  line-height: 55px;

  & > span {
    font-family: var(--font--Bold);
    font-size: 1.125rem;
    color: white;

    &::after {
      content: "%";
      font-size: 0.875rem;
    }
  }
`;

const StyledPrevCost = styled.span`
  font-family: var(--font--Medium);
  font-size: 0.875rem;
  color: var(--gray500-color);
  text-decoration: line-through;

  &:after {
    content: "원";
  }
`;
const StyledCost = styled.span`
  font-family: var(--font--Bold);
  font-size: 1.5rem;
  color: var(--main-color);

  &::after {
    content: "원/월";
    font-family: var(--font--Medium);
    font-size: 1.125rem;
  }
`;
