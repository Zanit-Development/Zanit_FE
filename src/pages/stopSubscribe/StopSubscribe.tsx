import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { styled } from "styled-components";
import { MembershipInfo } from "../../components/stopSubscribe/MembershipInfo";
import { StopMembership } from "../../components/stopSubscribe/StopMembership";
import { UserInfoType } from "../../libs/interface/interfaceUserInfo";
import { userInfoAPI } from "../../libs/apis/user";

export const StopSubscribe = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  useEffect(() => {
    const myCoupon = async () => {
      const userRes = await userInfoAPI();
      setUserInfo(userRes);
    };
    myCoupon();
  }, []);

  return (
    <Layout>
      <H2>정기 결제 해지하기</H2>
      {userInfo && (
        <>
          <MembershipInfo userInfo={userInfo} />
          <StopMembership userInfo={userInfo} />
        </>
      )}
    </Layout>
  );
};

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
