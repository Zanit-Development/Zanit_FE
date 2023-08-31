import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Input from "./../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNIN_OPTIONS } from "../../libs/constants/options/options";
import { FORM_EVENT } from "../../libs/interface/typeEvent";
import { signInAPI } from "../../libs/apis/user";
import { authInstance, defaultInstance } from "../../libs/apis/axios";

const SignIn = () => {
  const navigate = useNavigate();

  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "userphone") {
      setPhoneNumValue(value);
    } else if (id === "userpassword") {
      setPasswordValue(value);
    }
  };

  const sendSignin = async (e: FORM_EVENT) => {
    console.log(phoneNumValue, passwordValue);
    e.preventDefault();
    const userData = {
      id: phoneNumValue,
      pw: passwordValue,
    };

    // const formData = new FormData();
    // formData.append("id", phoneNumValue);
    // formData.append("pw", passwordValue);
    const response = await signInAPI(userData);
    // try {
    //   const res = await defaultInstance.post("/loginOk", formData);
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }

    // if (response && (response as any).status === 200) {
    //   navigate("/");
    // }
  };

  return (
    <Layout>
      <SignInSection>
        <h2>로그인</h2>
        <SignInForm onSubmit={sendSignin}>
          <label htmlFor="userphone" className="a11y-hidden">
            핸드폰 번호
          </label>
          <Input {...SIGNIN_OPTIONS.PHONE} onChange={handleInputChange} value={phoneNumValue} />
          <label htmlFor="userpassword" className="a11y-hidden">
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
