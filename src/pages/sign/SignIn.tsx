import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { SignInForm } from "../../components/sign/SignInForm";

const SignIn = () => {
  return (
    <Layout>
      <SignInSection>
        <h2>로그인</h2>
        <SignInForm />
        <SignInOther>
          <Link to="/signup">회원가입</Link>
          <Link to="/password-find">비밀번호 찾기</Link>
        </SignInOther>
      </SignInSection>
    </Layout>
  );
};

export default SignIn;

const SignInSection = styled.section`
  padding: 10px 20px 117px 20px;

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    margin-bottom: 65px;
  }
`;

const SignInOther = styled.div`
  display: flex;
  justify-content: center;
  gap: 35px;

  a {
    font-size: 14px;
    color: var(--gray500-color);
    font-family: var(--font--Medium);

    &:last-child {
      position: relative;

      &::before {
        content: "";
        width: 1px;
        height: 12px;
        display: inline-block;
        position: absolute;
        left: -17px;
        top: 1px;
        background: var(--gray400-color);
      }
    }
  }
`;
