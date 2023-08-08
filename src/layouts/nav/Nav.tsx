import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  return (
    <nav>
      <Ul>
        <li>
          <Link to="/search">bar 검색</Link>
        </li>
        <li>
          <Link to="/subscribe">구독하기</Link>
        </li>
        {/* 로그인 전 상태 */}
        {/* <li>
          <Link to="/signUp">회원가입</Link>
        </li>
        <li>
          <Link to="/signIn">로그인</Link>
        </li> */}
        {/* 로그인 후 */}
        <li>
          <Link to="/">로그아웃</Link>
        </li>
        <li>
          <Link to="/myCoupon">내 쿠폰함</Link>
        </li>
      </Ul>
    </nav>
  );
};

export default Nav;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

  a {
    display: inline-block;
    padding: 10px;
    font-family: var(--font--semibold);
    color: var(--gray500-color);
    font-size: 1rem;
  }
`;
