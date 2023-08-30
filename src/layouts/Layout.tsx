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
      <FixHeader>
        <Header />
        <Nav />
      </FixHeader>
      <ScrollMain>
        <main>{children}</main>
        <Footer />
      </ScrollMain>
    </LayoutWrap>
  );
};

export default Layout;

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: var(--white-color);
  height: 100vh;
  overflow: hidden;
`;

const FixHeader = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: var(--white-color);
`;

const ScrollMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: calc(100vh - 112px);
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b7b7b7;
    border-radius: 5px;
  }
`;
