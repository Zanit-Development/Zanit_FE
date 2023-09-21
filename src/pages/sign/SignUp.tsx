import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";

import icon_check from "../../assets/icon/check.svg";
import { BUTTON_OPTIONS, SIGNUP_OPTIONS } from "../../libs/constants/options/options";
import { FORM_EVENT } from "../../libs/interface/typeEvent";
import { signUpAPI } from "../../libs/apis/user";
import { PopupSignUpSuccess } from "../../components/modal/useSignPage/PopupSignUpSuccess";
import { PASSWORD_REGEX } from "../../libs/constants/regex/regex";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    userPhone: "",
    userPassword: "",
    userPasswordCheck: "",
  });

  const [isModal, setIsModal] = useState<boolean>(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setSignUpData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateName = (email: string): boolean => {
    return email === "";
  };

  const validatePassword = (password: string): boolean => {
    return !PASSWORD_REGEX.test(password) || password === "";
  };

  const validatePasswordCheck = (passwordCheck: string): boolean => {
    return signUpData.userPassword !== passwordCheck || passwordCheck === "";
  };

  const HandleSignup = async (e: FORM_EVENT) => {
    e.preventDefault();

    console.log(signUpData);

    const isEmailValid = validateName(signUpData.userName);
    const isPasswordValid = validatePassword(signUpData.userPassword);
    const isPassordCheckValid = validatePasswordCheck(signUpData.userPasswordCheck);

    setEmailError(isEmailValid);
    setPasswordError(isPasswordValid);
    setPasswordCheckError(isPassordCheckValid);

    // 부트페이 연동 후 다시 처리
    const userData = {
      ...signUpData,
      userGender: true,
      marketing: true,
    };

    const response = await signUpAPI(userData);
    if (response && (response as any).status === 200) {
      setIsModal(true);
    }
  };

  return (
    <Layout>
      <SignUpSection>
        <h2>회원가입</h2>
        <SignUpForm onSubmit={HandleSignup}>
          <InputGap>
            <label htmlFor="userName" className="a11y-hidden">
              이름
            </label>
            <Input {...SIGNUP_OPTIONS.NAME} onChange={handleInputChange} value={signUpData.userName} sizevariants={"large"} className={emailError ? "error" : ""} />
            <div>
              <label htmlFor="userPhone" className="a11y-hidden">
                핸드폰 번호
              </label>
              <Input {...SIGNUP_OPTIONS.PHONE} onChange={handleInputChange} value={signUpData.userPhone} sizevariants={"large"} />
              <AuthBtn>인증하기</AuthBtn>
            </div>
            <label htmlFor="userPassword" className="a11y-hidden">
              비밀번호
            </label>
            <Input {...SIGNUP_OPTIONS.PASSWORD} onChange={handleInputChange} value={signUpData.userPassword} sizevariants={"large"} className={passwordError ? "error" : ""} />
            <label htmlFor="userPasswordCheck" className="a11y-hidden">
              비밀번호 확인
            </label>
            <Input {...SIGNUP_OPTIONS.PASSWORD_CHECK} onChange={handleInputChange} value={signUpData.userPasswordCheck} sizevariants={"large"} className={passwordCheckError ? "error" : ""} />
          </InputGap>

          <CheckField>
            <legend className="a11y-hidden">동의사항</legend>
            <div>
              <CheckInput type="checkbox" id="agreement" />
              <label htmlFor="agreement">이용약관동의&#40;필수&#41;</label>
              <a href="https://speller05.notion.site/a3dca23eefff49788c9095bd0b38ed0b?pvs=4" target="_blank">
                보기
              </a>
            </div>
            <div>
              <CheckInput type="checkbox" id="ageLimit" />
              <label htmlFor="ageLimit">만18세 이상 확인&#40;필수&#41;</label>
            </div>
            <div>
              <CheckInput type="checkbox" id="marketing" />
              <label htmlFor="marketing">개인정보 마케팅 활용 동의&#40;선택&#41;</label>
              <a href="https://speller05.notion.site/a3dca23eefff49788c9095bd0b38ed0b?pvs=4" target="_blank">
                보기
              </a>
            </div>
          </CheckField>

          <Button {...BUTTON_OPTIONS.SIGNUP} />
        </SignUpForm>
        <SignUpOther>
          <span>이미 계정이 있으신가요?</span>
          <Link to="/signIn">로그인 하기</Link>
        </SignUpOther>
        {isModal && <PopupSignUpSuccess />}
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

const SignUpForm = styled.form`
  & > button {
    margin: 50px 0 24px;
  }
`;

const InputGap = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 70px;

  input {
    border: 1px solid #eee;
  }

  & > div {
    display: flex;
    gap: 7px;
  }
`;

const AuthBtn = styled.button`
  width: 38px;
  background-color: var(--main-color);
  font-family: var(--font--semibold);
  font-size: 12px;
  color: #fff;
  border-radius: 4px;
  padding: 8px 5px;
  text-align: center;
  line-height: 1.3;
  cursor: pointer;

  &:disabled {
    background-color: var(--gray500-color);
  }
`;

const CheckField = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    align-items: center;

    & > label {
      font-size: 14px;
      color: var(--gray500-color);
      margin-left: 12px;
    }

    & > a {
      font-size: 12px;
      color: var(--gray500-color);
      text-decoration: underline;
      margin-left: 5px;

      &:focus {
        color: #000;
      }
    }
  }
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url(${icon_check}) var(--gray200-color) no-repeat center/ 10px 10px;
  transition: all 0.3s;

  &:checked {
    background-color: var(--main-color);
  }
`;
