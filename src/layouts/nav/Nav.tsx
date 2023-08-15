import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const deactiveStyle = {
    fontFamily: "var(--font--Medium)",
    color: "var(--gray500-color)",
  };
  const activeStyle = {
    fontFamily: "var(--font--Bold)",
    color: "var(--Black-color)",
  };

  return (
    <nav>
      <Ul>
        <li>
          <NavLink
            to="/search"
            style={({ isActive }) => {
              return isActive ? activeStyle : deactiveStyle;
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
        {/* 로그인 전 상태 */}
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
        {/* 로그인 후 */}
        {/* <li>
          <NavLink to="/" style={deactiveStyle}>
            로그아웃
          </NavLink>
        </li> */}
      </Ul>
    </nav>
  );
};

export default Nav;

const Ul = styled.ul`
  display: flex;
  gap: 18px;
  padding: 0 16px;
  margin-bottom: 10px;

  a {
    display: inline-block;
    padding: 15px 4px;
    font-size: 15px;

    &:nth-of-type(1) {
      padding-left: 0;
    }
  }
`;
