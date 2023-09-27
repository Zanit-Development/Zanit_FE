import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { getLoginCookie, removeLoginCookie } from "../../libs/utils/loginCookie";
import { Modal } from "../../components/modal/Modal";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";

const Nav = () => {
  const navigate = useNavigate();
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
  const isActiveSearchPath = ["/search", "/bar-detail", "/home"].includes(location.pathname);
  const isActiveSubscribePath = ["/subscribe"].includes(location.pathname);
  const isActiveMyCouponPath = ["/myCoupon", "/how-to-use", "/use-history", "/stop-subscribe"].includes(location.pathname);
  const isActiveSignInPath = ["/signIn", "/signUp", "/password-find", "/password-reset", "/password-find-ok"].includes(location.pathname);

  const handleLogout = () => {
    removeLoginCookie({ path: "/" });
    setIsModal(false);
    navigate("/signIn");
  };

  const handleOpen = () => {
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
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
              to="/myCoupon"
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
                to="/signIn"
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
      {isModal && (
        <Modal border={true} onClose={handleClose}>
          <LogoutDiv>
            <strong>로그아웃 하시겠습니까?</strong>
            <LogoutBtn>
              <Button {...BUTTON_OPTIONS.LOGOUT_CANCEL} onClick={handleClose} />
              <Button {...BUTTON_OPTIONS.LOGOUT} onClick={handleLogout} />
            </LogoutBtn>
          </LogoutDiv>
        </Modal>
      )}
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

const LogoutDiv = styled.div`
  padding: 50px 30px;
  text-align: center;
  strong {
    display: block;
    margin: 40px 0;
    font-size: 18px;
    font-family: var(--font--semibold);
  }
`;

const LogoutBtn = styled.div`
  display: flex;
  gap: 8px;
`;
