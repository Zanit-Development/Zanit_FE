import React from "react";
import { styled } from "styled-components";
import Footer from "../footer/Footer";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg";

type WrapperProps = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: WrapperProps) => {
  const deactiveStyle = {
    fontFamily: "var(--font--Medium)",
    color: "var(--gray500-color)",
  };
  const activeStyle = {
    fontFamily: "var(--font--Bold)",
    color: "var(--Black-color)",
    borderBottom: "2px solid var(--main-color)",
  };

  const location = useLocation();
  const isActiveManagementPath = ["/admin/barinfo", "/admin/management"].includes(location.pathname);
  console.log(isActiveManagementPath);
  return (
    <LayoutWrap>
      <FixHeader>
        <H1>
          <Link to="/admin/management">
            <img src={Logo} alt="Zanit 관리자 페이지" />
          </Link>
        </H1>
        <strong>관리자 페이지</strong>
      </FixHeader>
      <Navbar>
        <ul>
          <li>
            <NavLink
              to="/admin/barinfo"
              style={() => {
                return isActiveManagementPath ? activeStyle : deactiveStyle;
              }}
            >
              정보 관리
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manageorder"
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
            >
              주문 관리
            </NavLink>
          </li>
        </ul>
      </Navbar>
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

  strong {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font--Bold);
  }
`;

const H1 = styled.h1`
  padding: 13px;
`;

const LayoutWrap = styled.div`
  max-width: 390px;
  margin: 0 auto;
  background-color: var(--white-color);
  height: 100vh;
  overflow: hidden;
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

const Navbar = styled.nav`
  padding-bottom: 20px;
  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0 15px;

    a {
      display: inline-block;
      padding: 15px 0 8px;
      font-size: 15px;
    }
  }
`;
