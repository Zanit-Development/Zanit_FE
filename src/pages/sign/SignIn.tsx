import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Input from "./../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNIN_OPTIONS } from "../../libs/constants/options/options";

const SignIn = () => {
  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "phoneNum") {
      setPhoneNumValue(value);
    } else if (id === "password") {
      setPasswordValue(value);
    }
  };

  return (
    <Layout>
      <SignInSection>
        <h2>로그인</h2>
        <SignInForm action="">
          <label htmlFor="phoneNum" className="a11y-hidden">
            핸드폰 번호
          </label>
          <Input {...SIGNIN_OPTIONS.PHONE} onChange={handleInputChange} value={phoneNumValue} />
          <label htmlFor="password" className="a11y-hidden">
            비밀번호
          </label>
          <Input {...SIGNIN_OPTIONS.PASSWORD} onChange={handleInputChange} value={passwordValue} />

          <Button {...BUTTON_OPTIONS.SIGNIN} />
        </SignInForm>
        <SignInOther>
          <Link to="/signUp">회원가입</Link>
          <Link to="/password-find">비밀번호 찾기</Link>
        </SignInOther>
      </SignInSection>
    </Layout>
  );
};

export default SignIn;

const SignInSection = styled.section`
  padding: 10px 20px 200px 20px;

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    margin-bottom: 30px;
  }
`;

const SignInForm = styled.form`
  input {
    border: 1px solid #eee;

    &:nth-of-type(2) {
      margin-top: 12px;
    }
  }

  button {
    width: 100%;
    margin: 50px 0 24px;
    text-align: center;
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
