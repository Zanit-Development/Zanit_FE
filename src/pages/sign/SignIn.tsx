import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { Input } from "./../../components/common/input/Input";
import { ButtonProps, InputProps } from "../../libs/interface/interfaceCommon";
import { styled } from "styled-components";
import { Button } from "../../components/common/button/Button";
import { Link } from "react-router-dom";

export const SignIn: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmailValue(value);
    } else if (id === "password") {
      setPasswordValue(value);
    }
  };

  const emailOptions: InputProps = {
    id: "email",
    typeVariants: "primary",
    sizeVariants: "large",
    type: "email",
    placeholder: "이메일",
    onChange: handleInputChange,
    value: emailValue,
  };

  const passwordOptions: InputProps = {
    id: "password",
    typeVariants: "primary",
    sizeVariants: "large",
    type: "password",
    placeholder: "비밀번호",
    onChange: handleInputChange,
    value: passwordValue,
  };

  const buttonOptions: ButtonProps = {
    typeVariants: "primary",
    sizeVariants: "large",
    value: "로그인",
    disabled: false,
    onClick: () => {},
  };

  return (
    <Layout>
      <SignInSection>
        <h2>로그인</h2>
        <SignInForm action="">
          <label htmlFor="email" className="a11y-hidden">
            이메일
          </label>
          <Input {...emailOptions} />
          <label htmlFor="password" className="a11y-hidden">
            비밀번호
          </label>
          <Input {...passwordOptions} />

          <Button {...buttonOptions} />
        </SignInForm>
        <SignInOther>
          <Link to="/signUp">회원가입</Link>
          <Link to="/">비밀번호 찾기</Link>
        </SignInOther>
      </SignInSection>
    </Layout>
  );
};

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
