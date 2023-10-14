import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import HasCoupon from "../../components/coupon/HasCoupon";
import NotCoupon from "../../components/coupon/NotCoupon";
import { couponListAPI } from "../../libs/apis/myCoupon";
import { CouponInfoType } from "../../libs/interface/interfaceMyCoupon";
import { useRecoilState } from "recoil";
import { myCouponInfoAtom } from "../../recoil/myCouponInfoAtom";

const MyCoupon = () => {
  const [couponInfo, setCouponInfo] = useRecoilState(myCouponInfoAtom);

  useEffect(() => {
    const myCoupon = async () => {
      const res = await couponListAPI();
      setCouponInfo(res[0]);
    };
    myCoupon();
  }, []);

  return (
    <Layout>
      <H2>내 쿠폰함</H2>
      {couponInfo?.userView.subscribe ? couponInfo && <HasCoupon /> : <NotCoupon />}
    </Layout>
  );
};

export default MyCoupon;

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
