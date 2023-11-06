import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Input from "./../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNIN_OPTIONS } from "../../libs/constants/options/options";
import { FORM_EVENT } from "../../libs/interface/typeEvent";
import { signInAPI, userInfoAPI } from "../../libs/apis/user";
import { PASSWORD_REGEX, PHONE_REGEX } from "../../libs/constants/regex/regex";
import { getLoginCookie, removeLoginCookie, setLoginCookie } from "../../libs/utils/loginCookie";
import { formDataInstance } from "../../libs/apis/axios";
import icon_check from "../../assets/icon/check.svg";

const interceptorHeader = () => {
  formDataInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getLoginCookie()}`;
    return config;
  });
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [showPwCheck, setShowPwCheck] = useState(false);

  const [phoneNumError, setPhoneNumError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "userphone") {
      setPhoneNumValue(value);
    }
    if (id === "userpassword") {
      setPasswordValue(value);
    }
  };

  const validatePhone = (phone: string): boolean => {
    const regResult = !phone.search(PHONE_REGEX);
    return !regResult || phone === "";
  };

  const validatePassword = (password: string): boolean => {
    const regResult = !password.search(PASSWORD_REGEX);
    return !regResult || password === "";
  };

  const handleShowPassword = () => {
    if (passwordValue === null) return;
    setShowPwCheck(!showPwCheck);
  };

  const handleSignin = async (e: FORM_EVENT) => {
    e.preventDefault();
    console.log("로긴");

    if (getLoginCookie()) {
      console.log("쿠키삭제");

      removeLoginCookie({ path: "/" });
    }

    const isPhoneValid = validatePhone(phoneNumValue);
    const isPasswordValid = validatePassword(passwordValue);

    setPhoneNumError(isPhoneValid);
    setPasswordError(isPasswordValid);

    if (!getLoginCookie()) {
      if (!isPhoneValid && !isPasswordValid) {
        const formData = new FormData();
        formData.append("userphone", phoneNumValue);
        formData.append("userpassword", passwordValue);

        const response = await signInAPI(formData);

        if (response && (response as any).status === 200) {
          const token = response.data;
          setLoginCookie(token, { path: "/" });
          interceptorHeader();

          location.pathname.toLowerCase() === `/admin/signin` && navigate("/admin/barinfo");

          location.pathname.toLowerCase() === `/signin` && navigate("/");
        }

        if (response && (response as any).status === 500) {
          setLoginError(true);
        }
      }
    }
  };
  return (
    <Form onSubmit={handleSignin}>
      <label htmlFor="userphone" className="a11y-hidden">
        핸드폰 번호
      </label>
      <Input {...SIGNIN_OPTIONS.PHONE} onChange={handleInputChange} value={phoneNumValue} className={phoneNumError ? "error" : ""} />
      <label htmlFor="userpassword" className="a11y-hidden">
        비밀번호
      </label>
      <Input {...SIGNIN_OPTIONS.PASSWORD} onChange={handleInputChange} value={passwordValue} className={passwordError ? "error" : ""} type={showPwCheck ? "text" : "password"} />

      <PasswordCheckLabel htmlFor="showPassword">
        <input type="checkbox" onChange={handleShowPassword} />
        <span>비밀번호 보기</span>
      </PasswordCheckLabel>

      {/* 맥 OS에서 인풋에 한글 입력 들어왔을 때 + 입력 값이 올바르지 않아 서버에서 500에러 나올때 */}
      {loginError && <ErrorMassage>전화번호 또는 비밀번호가 일치하지 않습니다</ErrorMassage>}
      <Button {...BUTTON_OPTIONS.SIGNIN} />
    </Form>
  );
};

const Form = styled.form`
  & > input {
    border: 1px solid #eee;

    &:nth-of-type(2) {
      margin-top: 12px;
    }
  }

  button {
    width: 100%;
    margin-top: 40px;
    text-align: center;
  }
  margin-bottom: 24px;
`;

const ErrorMassage = styled.p`
  font-family: var(--font--semibold);
  margin-top: 15px;
  color: red;
  font-size: 12px;
`;

const PasswordCheckLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  font-size: 12px;

  & > input {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background: url(${icon_check}) var(--gray200-color) no-repeat center/ 10px 10px;
    transition: all 0.3s;

    &:checked {
      background-color: var(--sub-color);
    }
  }
`;
