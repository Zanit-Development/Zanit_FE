import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Input from "./../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNIN_OPTIONS } from "../../libs/constants/options/options";
import { FORM_EVENT } from "../../libs/interface/typeEvent";
import { signInAPI } from "../../libs/apis/user";
import { PASSWORD_REGEX, PHONE_REGEX } from "../../libs/constants/regex/regex";
import { getLoginCookie, setLoginCookie } from "../../libs/utils/loginCookie";
import { formDataInstance } from "../../libs/apis/axios";

const interceptorHeader = () => {
  formDataInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getLoginCookie()}`;
    return config;
  });
};

export const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hasToken = getLoginCookie();

  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [phoneNumError, setPhoneNumError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [hasTokenMSG, setHasTokenMSG] = useState(false);

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
    return !PHONE_REGEX.test(phone) || phone === "";
  };

  const validatePassword = (password: string): boolean => {
    return !PASSWORD_REGEX.test(password) || password === "";
  };

  const sendSignin = async (e: FORM_EVENT) => {
    e.preventDefault();

    const isPhoneValid = validatePhone(phoneNumValue);
    const isPasswordValid = validatePassword(passwordValue);

    setPhoneNumError(isPhoneValid);
    setPasswordError(isPasswordValid);

    if (!hasToken) {
      if (!phoneNumError && !passwordError) {
        const formData = new FormData();
        formData.append("userphone", phoneNumValue);
        formData.append("userpassword", passwordValue);

        const response = await signInAPI(formData);

        if (response && (response as any).status === 200) {
          const token = response.data;
          setLoginCookie(token, { path: "/" });
          interceptorHeader();
          {
            location.pathname === `/admin/signIn` && navigate("/admin/barinfo");
          }
          {
            location.pathname === `/signIn` && navigate("/home");
          }
        }
      }
    }

    if (hasToken) {
      setHasTokenMSG(true);
    }
  };
  return (
    <Form onSubmit={sendSignin}>
      {hasTokenMSG && <ErrorMassage>이미 로그인 되어있어요</ErrorMassage>}
      <label htmlFor="userphone" className="a11y-hidden">
        핸드폰 번호
      </label>
      <Input {...SIGNIN_OPTIONS.PHONE} onChange={handleInputChange} value={phoneNumValue} className={phoneNumError ? "error" : ""} />
      <label htmlFor="userpassword" className="a11y-hidden">
        비밀번호
      </label>
      <Input {...SIGNIN_OPTIONS.PASSWORD} onChange={handleInputChange} value={passwordValue} className={passwordError ? "error" : ""} />

      <Button {...BUTTON_OPTIONS.SIGNIN} />
    </Form>
  );
};

const Form = styled.form`
  input {
    border: 1px solid #eee;

    &:nth-of-type(2) {
      margin-top: 12px;
    }
  }

  button {
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }
  margin-bottom: 24px;
`;

const ErrorMassage = styled.strong`
  display: block;
  font-family: var(--font--semibold);
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
`;
