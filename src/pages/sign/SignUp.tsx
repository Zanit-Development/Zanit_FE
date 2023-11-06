import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { SignUpForm } from "../../components/sign/SignUpForm";

const SignUp = () => {
  return (
    <Layout>
      <SignUpSection>
        <h2>회원가입</h2>
        <SignUpForm />
        <SignUpOther>
          <span>이미 계정이 있으신가요?</span>
          <Link to="/signin">로그인 하기</Link>
        </SignUpOther>
      </SignUpSection>
    </Layout>
  );
};

export default SignUp;

const SignUpSection = styled.section`
  padding: 10px 20px 70px 20px;

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    margin-bottom: 15px;
  }
`;

const SignUpOther = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 14px;

  span {
    font-family: var(--font--Medium);
    color: var(--gray500-color);
  }

  a {
    font-family: var(--font--Bold);
    color: var(--main-color);
  }
`;
