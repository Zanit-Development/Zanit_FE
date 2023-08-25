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

  // token 없어서 nav에 로그인 표시되는게 맞습니다
  const token = useRecoilValue(loginToken);
  // 로그아웃 띄우기 -> const token = true;

  return (
    <nav>
      <Ul>
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
            style={({ isActive }) => {
              return isActive ? activeStyle : deactiveStyle;
            }}
          >
            구독하기
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myCoupon"
            style={({ isActive }) => {
              return isActive ? activeStyle : deactiveStyle;
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
              style={({ isActive }) => {
                return isActive ? activeStyle : deactiveStyle;
              }}
            >
              로그인
            </NavLink>
          </li>
        )}
      </Ul>
    </nav>
  );
};

export default Nav;

const Ul = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0 15px;
  margin-bottom: 27px;

  a {
    display: inline-block;
    padding: 15px 0 8px;
    font-size: 15px;
  }
`;
