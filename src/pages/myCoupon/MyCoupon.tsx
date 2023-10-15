import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import HasCoupon from "../../components/coupon/HasCoupon";
import NotCoupon from "../../components/coupon/NotCoupon";
import { couponListAPI } from "../../libs/apis/myCoupon";
import { CouponInfoType } from "../../libs/interface/interfaceMyCoupon";

const MyCoupon = () => {
  const [couponInfo, setCouponInfo] = useState<CouponInfoType | null>(null);
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    const myCoupon = async () => {
      const res = await couponListAPI();
      setCouponInfo(res[0]);
      setSubscribe(res[0]?.userView.subscribe);
    };
    myCoupon();
  }, []);

  console.log(couponInfo);

  return (
    <Layout>
      <H2>내 쿠폰함</H2>
      {subscribe ? couponInfo && <HasCoupon couponInfo={couponInfo} /> : <NotCoupon />}
    </Layout>
  );
};

export default MyCoupon;

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
