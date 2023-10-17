import React, { ChangeEvent, useState } from "react";
import Layout from "../../layouts/Layout";
import { styled } from "styled-components";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNUP_OPTIONS } from "../../libs/constants/options/options";
import { useNavigate } from "react-router";
import { FORM_EVENT } from "../../libs/interface/typeEvent";
import { PASSWORD_REGEX } from "../../libs/constants/regex/regex";
import { resetPwAPI } from "../../libs/apis/user";

const PasswordReset = () => {
  const navigate = useNavigate();

  const [changePassword, setChangePassword] = useState("");
  const [changePasswordCheck, setChangePasswordCheck] = useState("");

  const [passwordError, setpasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const [errorMSG, setErrorMSG] = useState("");

  const validatePassword = (password: string): boolean => {
    const regResult = !password.search(PASSWORD_REGEX);
    return !regResult || password === "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "userPassword") {
      setChangePassword(value);
      setpasswordError(validatePassword(value));
    } else if (id === "userPasswordCheck") {
      setChangePasswordCheck(value);
      setPasswordCheckError(validatePassword(value));
    }
  };

  const isButtonDisabled = passwordError || passwordCheckError || changePassword === "" || changePasswordCheck === "";

  const handleResetPw = async (e: FORM_EVENT) => {
    e.preventDefault();

    if (changePassword === changePasswordCheck) {
      const res = await resetPwAPI("유저 전화번호", changePassword);

      if (res && (res as any).status === 200) {
        navigate("/password-find-ok");
      }
      // 변경 실패하면 어떡하지
    } else {
      setErrorMSG("비밀번호가 일치하지 않습니다");
    }
  };

  return (
    <Layout>
      <PasswordResetSection onSubmit={handleResetPw}>
        <h2>비밀번호 재설정하기</h2>
        <p>새로운 비밀번호를 입력해주세요</p>
        <Input {...SIGNUP_OPTIONS.PASSWORD} value={changePassword} onChange={handleInputChange} className={passwordError ? "error" : ""} />
        <Input {...SIGNUP_OPTIONS.PASSWORD_CHECK} value={changePasswordCheck} onChange={handleInputChange} className={passwordCheckError ? "error" : ""} />
        <p>{errorMSG}</p>
        <Button {...BUTTON_OPTIONS.PASSWORD_RESET} disabled={isButtonDisabled} />
      </PasswordResetSection>
    </Layout>
  );
};

export default PasswordReset;

const PasswordResetSection = styled.form`
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

  p:last-of-type {
    color: red;
    margin-top: 20px;
    font-family: var(--font--semibold);
    font-size: 12px;
  }

  button {
    margin-top: 30px;
  }
`;
