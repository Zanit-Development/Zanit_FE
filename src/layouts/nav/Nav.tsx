import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import loginToken from "../../recoil/loginToken";

const Nav = () => {
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
  const isActiveSearchPath = ["/search", "/bar-detail"].includes(location.pathname);
  const isActiveSubscribePath = ["/subscribe"].includes(location.pathname);
  const isActiveMyCouponPath = ["/myCoupon", "/how-to-use", "/use-history", "/stop-subscribe"].includes(location.pathname);
  const isActiveSignInPath = ["/signIn", "/signUp", "/password-find", "/password-reset"].includes(location.pathname);

  // token 없어서 nav에 로그인 표시되는게 맞습니다
  const token = useRecoilValue(loginToken);
  // 로그아웃 띄우기 -> const token = true;

  return (
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
            <NavLink to="/" style={deactiveStyle}>
              로그아웃
            </NavLink>
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
      display: inline-block;
      padding: 15px 0 8px;
      font-size: 15px;
    }
  }
`;

const Ul = styled.ul``;
