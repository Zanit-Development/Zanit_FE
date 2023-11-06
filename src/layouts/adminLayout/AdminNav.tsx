import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { PopupLogout } from "../../components/modal/useSignPage/PopupLogout";

export const AdminNav = () => {
  const [isModal, setIsModal] = useState(false);

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
  const isActiveManagementPath = ["/admin/barinfo", "/admin/management"].includes(location.pathname.toLowerCase());

  const handleOpen = () => {
    setIsModal(true);
  };

  return (
    <>
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
          <li>
            <button onClick={handleOpen}>로그아웃</button>
          </li>
        </ul>
      </Navbar>
      {isModal && <PopupLogout setIsModal={setIsModal} nav="/admin/signIn" />}
    </>
  );
};

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

    button {
      padding: 15px 0 8px;
      font-size: 15px;
      cursor: pointer;
      font-family: var(--font--Medium);
      color: var(--gray500-color);
    }
  }
`;
