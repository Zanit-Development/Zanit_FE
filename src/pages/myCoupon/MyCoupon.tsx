import React from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import HasCoupon from "../../components/coupon/HasCoupon";
import NotCoupon from "../../components/coupon/NotCoupon";
import { couponListAPI } from "../../libs/apis/myCoupon";

const MyCoupon = () => {
  async function test() {
    const res = await couponListAPI();
    console.log("되는중", res);
  }

  test();

  const hasCoupon = true;
  return (
    <Layout>
      <H2>내 쿠폰함</H2>
      {hasCoupon ? <HasCoupon /> : <NotCoupon />}
    </Layout>
  );
};

export default MyCoupon;

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
