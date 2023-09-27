import React from "react";
import { styled } from "styled-components";
import Footer from "../../layouts/footer/Footer";

import Logo from "../../assets/logo.svg";
import { SignInForm } from "../../components/sign/SignInForm";

const AdminSignIn = () => {
  return (
    <LayoutWrap>
      <h1>
        <img src={Logo} alt="Zanit 로그인" />
      </h1>
      <section>
        <SignInForm />
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
