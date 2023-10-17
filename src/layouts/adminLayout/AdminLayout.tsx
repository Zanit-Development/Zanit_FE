import React from "react";
import { styled } from "styled-components";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import { AdminNav } from "./AdminNav";

type WrapperProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: WrapperProps) => {
  return (
    <LayoutWrap>
      <FixHeader>
        <h1>
          <Link to="/admin/barinfo">
            <img src={Logo} alt="Zanit 관리자 페이지" />
          </Link>
        </h1>
        <strong>관리자 페이지</strong>
      </FixHeader>
      <AdminNav />
      <ScrollMain>
        <main>{children}</main>
        <Footer />
      </ScrollMain>
    </LayoutWrap>
  );
};

export default AdminLayout;

const FixHeader = styled.header`
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: var(--white-color);

  h1 {
    padding: 13px;
  }

  strong {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font--Bold);
  }
`;

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: var(--white-color);
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
`;

const ScrollMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  /* height: calc(100vh - 112px); */
  height: calc(var(--vh, 1vh) * 100 - 110px);

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
