import React from "react";
import Layout from "../../layouts/Layout";
import { styled } from "styled-components";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNUP_OPTIONS } from "../../libs/constants/options/options";

const PasswordReset = () => {
  return (
    <Layout>
      <PasswordResetSection>
        <h2>비밀번호 재설정하기</h2>
        <p>새로운 비밀번호를 입력해주세요</p>
        <Input {...SIGNUP_OPTIONS.PASSWORD} />
        <Input {...SIGNUP_OPTIONS.PASSWORD_CHECK} />
        <Button {...BUTTON_OPTIONS.PASSWORD_RESET} />
      </PasswordResetSection>
    </Layout>
  );
};

export default PasswordReset;

const PasswordResetSection = styled.section`
  padding: 10px 20px 200px 20px;
  font-size: 14px;

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    margin-bottom: 30px;
  }

  input {
    border: 1px solid #eee;
    margin-top: 12px;
    &:nth-of-type(1) {
      margin-top: 28px;
    }
  }

  button {
    margin-top: 50px;
  }
`;
