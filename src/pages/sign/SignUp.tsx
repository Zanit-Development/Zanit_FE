import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";

import icon_check from "../../assets/icon/check.svg";
import { BUTTON_OPTIONS, SIGNUP_OPTIONS } from "../../libs/constants/options/options";
import { FORM_EVENT } from "../../libs/interface/typeEvent";
import { signUpAPI } from "../../libs/apis/user";

const SignUp = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordCheckValue, setPasswordCheckValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "name") {
      setNameValue(value);
    } else if (id === "phoneNum") {
      setPhoneNumValue(value);
    } else if (id === "password") {
      setPasswordValue(value);
    } else if (id === "passwordCheck") {
      setPasswordCheckValue(value);
    }
  };

  const sendSignup = async (e: FORM_EVENT) => {
    console.log(nameValue, phoneNumValue, passwordValue, passwordCheckValue);
    e.preventDefault();
    const userData = {
      userPhone: phoneNumValue,
      userPassword: passwordValue,
      userName: nameValue,
      // 일단 넣어둠
      userGender: true,
      marketing: true,
    };
    const response = await signUpAPI(userData);
    if (response && (response as any).status === 200) {
      navigate("/signIn");
    }
  };

  return (
    <Layout>
      <SignUpSection>
        <h2>회원가입</h2>
        <SignUpForm onSubmit={sendSignup}>
          <InputGap>
            <label htmlFor="name" className="a11y-hidden">
              이름
            </label>
            <Input {...SIGNUP_OPTIONS.NAME} onChange={handleInputChange} value={nameValue} />
            <label htmlFor="phoneNum" className="a11y-hidden">
              핸드폰 번호
            </label>
            <Input {...SIGNUP_OPTIONS.PHONE} onChange={handleInputChange} value={phoneNumValue} />
            <label htmlFor="password" className="a11y-hidden">
              비밀번호
            </label>
            <Input {...SIGNUP_OPTIONS.PASSWORD} onChange={handleInputChange} value={passwordValue} />
            <label htmlFor="passwordCheck" className="a11y-hidden">
              비밀번호 확인
            </label>
            <Input {...SIGNUP_OPTIONS.PASSWORD_CHECK} onChange={handleInputChange} value={passwordCheckValue} />
          </InputGap>

          <CheckField>
            <legend className="a11y-hidden">동의사항</legend>
            <div>
              <CheckInput type="checkbox" id="agreement" />
              <label htmlFor="agreement">이용약관동의&#40;필수&#41;</label>
            </div>
            <div>
              <CheckInput type="checkbox" id="ageLimit" />
              <label htmlFor="ageLimit">만18세 이상 확인&#40;필수&#41;</label>
            </div>
            <div>
              <CheckInput type="checkbox" id="marketing" />
              <label htmlFor="marketing">개인정보 마케팅 활용 동의&#40;선택&#41;</label>
            </div>
          </CheckField>

          <Button {...BUTTON_OPTIONS.SIGNUP} />
        </SignUpForm>
        <SignUpOther>
          <span>이미 계정이 있으신가요?</span>
          <Link to="/signIn">로그인 하기</Link>
        </SignUpOther>
      </SignUpSection>
    </Layout>
  );
};

export default SignUp;

const SignUpSection = styled.section`
  padding: 10px 20px 50px 20px;

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    margin-bottom: 30px;
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
  button {
    width: 100%;
    margin: 50px 0 24px;
    text-align: center;
  }
`;

const InputGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  input {
    border: 1px solid #eee;
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
  }
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: url(${icon_check}) var(--gray200-color) no-repeat center/ 10px 10px;

  &:checked {
    background-color: var(--main-color);
  }
`;
