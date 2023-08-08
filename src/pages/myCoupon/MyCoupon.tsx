import React from "react";
import { Layout } from "../../layouts/Layout";
import { styled } from "styled-components";
import { HasCoupon } from "../../components/coupon/HasCoupon";
import { NotCoupon } from "../../components/coupon/NotCoupon";

export const MyCoupon: React.FC = () => {
  const hasCoupon = true;
  return (
    <Layout>
      <H2>내 쿠폰함</H2>
      {hasCoupon ? <HasCoupon /> : <NotCoupon />}
    </Layout>
  );
};

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
