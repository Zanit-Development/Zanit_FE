import React from "react";
import Layout from "../../layouts/Layout";
import { styled } from "styled-components";
import { MembershipInfo } from "../../components/stopSubscribe/MembershipInfo";
import { StopMembership } from "../../components/stopSubscribe/StopMembership";

export const StopSubscribe = () => {
  return (
    <Layout>
      <H2>정기 결제 해지하기</H2>
      <MembershipInfo />
      <StopMembership />
    </Layout>
  );
};

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;
