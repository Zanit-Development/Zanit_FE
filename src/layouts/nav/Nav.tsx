import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../libs/interface/navMenu";
import { styled } from "styled-components";

type NavProps = {
  activeMenu: string;
  onMenuClick: (menu: Menu) => void;
};

const Nav: React.FC<NavProps> = ({ activeMenu, onMenuClick }) => {
  return (
    <nav>
      <Ul>
        <li onClick={() => onMenuClick("bar 검색")}>bar 검색</li>
        <li onClick={() => onMenuClick("구독하기")}>구독하기</li>
        <li onClick={() => onMenuClick("회원가입")}>회원가입</li>
        <li onClick={() => onMenuClick("로그인")}>로그인</li>
      </Ul>
    </nav>
  );
};

export default Nav;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-family: var(--font--Medium);
  color: var(--gray500-color);
  font-size: 1rem;

  li {
    padding: 10px;
    cursor: pointer;
  }
`;
