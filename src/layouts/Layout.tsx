import React from "react";
import { styled } from "styled-components";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";

type WrapperProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: WrapperProps) => {
  return (
    <LayoutWrap>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </LayoutWrap>
  );
};

export default Layout;

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: #fff;
`;
