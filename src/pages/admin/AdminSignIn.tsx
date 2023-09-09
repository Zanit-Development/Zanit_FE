import React, { useState } from "react";
import { styled } from "styled-components";
import Footer from "../../layouts/footer/Footer";

import Logo from "../../assets/logo.svg";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS, SIGNIN_OPTIONS } from "../../libs/constants/options/options";
import { useNavigate } from "react-router";
import Input from "../../components/common/input/Input";

const AdminSignIn = () => {
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

  // const sendSignin = async (e: FORM_EVENT) => {
  //   console.log(phoneNumValue, passwordValue);
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("userphone", phoneNumValue);
  //   formData.append("userpassword", passwordValue);
  //   try {
  //     const response = await signInAPI(formData);
  //     console.log(response);
  //     if (response && (response as any).status === 200) {
  //       navigate("/");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <LayoutWrap>
      <h1>
        <img src={Logo} alt="Zanit 로그인" />
      </h1>
      <section>
        <SignInForm>
          <label htmlFor="userphone" className="a11y-hidden">
            아이디
          </label>
          <Input {...SIGNIN_OPTIONS.ID} onChange={handleInputChange} value={phoneNumValue} />
          <label htmlFor="userpassword" className="a11y-hidden">
            비밀번호
          </label>
          <Input {...SIGNIN_OPTIONS.PASSWORD} onChange={handleInputChange} value={passwordValue} />

          <Button {...BUTTON_OPTIONS.SIGNIN} />
        </SignInForm>
      </section>
      <Footer />
    </LayoutWrap>
  );
};

export default AdminSignIn;

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: var(--white-color);
  height: 100vh;
  overflow: hidden;
  position: relative;

  h1 > img {
    width: 126px;
    display: block;
    margin: 95px auto;
  }

  section {
    padding: 0 20px 130px;
  }

  footer {
    width: 100%;
    position: absolute;
    bottom: 0;
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
    margin-top: 50px;
    text-align: center;
  }
  margin-bottom: 24px;
`;
