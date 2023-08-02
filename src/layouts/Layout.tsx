import React, { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { styled } from "styled-components";

type WrapperProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<WrapperProps> = ({ children }) => {
  return (
    <LayoutWrap>
      <Header />
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
