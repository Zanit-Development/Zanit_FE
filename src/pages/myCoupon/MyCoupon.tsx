import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import HasCoupon from "../../components/coupon/HasCoupon";
import NotCoupon from "../../components/coupon/NotCoupon";
import { couponListAPI } from "../../libs/apis/myCoupon";
import { CouponInfoType } from "../../libs/interface/interfaceMyCoupon";
import { UserInfoType } from "../../libs/interface/interfaceUserInfo";
import { userInfoAPI } from "../../libs/apis/user";

const MyCoupon = () => {
  const [couponInfo, setCouponInfo] = useState<CouponInfoType | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  useEffect(() => {
    const myCoupon = async () => {
      const couponRes = await couponListAPI();
      const userRes = await userInfoAPI();
      setCouponInfo(couponRes[0]);
      setUserInfo(userRes);
    };
    myCoupon();
  }, []);

  console.log("couponInfo", couponInfo);
  console.log("userInfo", userInfo);

  return (
    <Layout>
      <H2>내 쿠폰함</H2>
      {userInfo?.subscribe ? couponInfo && userInfo && <HasCoupon couponInfo={couponInfo} userInfo={userInfo} /> : <NotCoupon />}
    </Layout>
  );
};

export default MyCoupon;

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
