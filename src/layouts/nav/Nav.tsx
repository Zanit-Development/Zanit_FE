import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { getLoginCookie } from "../../libs/utils/loginCookie";
import { PopupLogout } from "../../components/modal/useSignPage/PopupLogout";

const Nav = () => {
  const [isModal, setIsModal] = useState(false);

  const deactiveStyle = {
    fontFamily: "var(--font--Medium)",
    color: "var(--gray500-color)",
  };
  const activeStyle = {
    fontFamily: "var(--font--Bold)",
    color: "var(--Black-color)",
    borderBottom: "1px solid var(--main-color)",
  };

  const location = useLocation();
  const isActiveSearchPath = ["/search", "/bar-detail"].includes(location.pathname.toLowerCase());
  const isActiveSubscribePath = ["/subscribe"].includes(location.pathname.toLowerCase());
  const isActiveMyCouponPath = ["/mycoupon", "/how-to-use", "/use-history", "/stop-subscribe"].includes(location.pathname.toLowerCase());
  const isActiveSignInPath = ["/signin", "/signup", "/password-find", "/password-reset", "/password-find-ok"].includes(location.pathname.toLowerCase());

  const handleOpen = () => {
    setIsModal(true);
  };

  const token = getLoginCookie();

  return (
    <>
      <Navbar>
        <ul>
          <li>
            <NavLink
              to="/search"
              style={() => {
                return isActiveSearchPath ? activeStyle : deactiveStyle;
              }}
            >
              Bar 검색
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscribe"
              style={() => {
                return isActiveSubscribePath ? activeStyle : deactiveStyle;
              }}
            >
              구독하기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mycoupon"
              style={() => {
                return isActiveMyCouponPath ? activeStyle : deactiveStyle;
              }}
            >
              내 쿠폰함
            </NavLink>
          </li>
          {token ? (
            <li>
              <button onClick={handleOpen}>로그아웃</button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/signin"
                style={() => {
                  return isActiveSignInPath ? activeStyle : deactiveStyle;
                }}
              >
                로그인
              </NavLink>
            </li>
          )}
          <li>
            <a href="https://forms.gle/xK4mEQeT9uZ5SstLA">의견 보내기</a>
          </li>
        </ul>
      </Navbar>
      {isModal && <PopupLogout setIsModal={setIsModal} nav="/signIn" />}
    </>
  );
};

export default Nav;

const Navbar = styled.nav`
  padding-bottom: 20px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;

    a {
      font-family: var(--font--Medium);
      display: inline-block;
      padding: 15px 0 8px;
      font-size: 15px;
      color: var(--gray500-color);
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
