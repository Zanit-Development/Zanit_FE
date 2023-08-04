import React, { useState } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { styled } from "styled-components";
import Nav from "./nav/Nav";

type WrapperProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<WrapperProps> = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </LayoutWrap>
  );
};

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: #fff;
`;
