import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Nav: React.FC = () => {
  // 로그인 전 상태
  return (
    <nav>
      <Ul>
        <li>
          <Link to="/search">bar 검색</Link>
        </li>
        <li>
          <Link to="/subscribe">구독하기</Link>
        </li>
        <li>
          <Link to="/signUp">회원가입</Link>
        </li>
        <li>
          <Link to="/signIn">로그인</Link>
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
    font-family: var(--font--Medium);
    color: var(--gray500-color);
    font-size: 1rem;
  }
`;
