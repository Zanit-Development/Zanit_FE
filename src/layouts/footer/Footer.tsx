import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import kakao from "../../assets/icon/sns_Default.svg";
import instar from "../../assets/icon/sns_Default_instar.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <img src={Logo} alt="Zanit" />
      <div>
        <p>대표이사 정태송</p>
        <span>206-55-98984</span>
        <Link to="/">
          <img src={kakao} alt="카카오톡" />
        </Link>
        <Link to="/">
          <img src={instar} alt="인스타그램" />
        </Link>
      </div>
      <UnorderList>
        <li>
          <Link to="/">이용안내</Link>
        </li>
        <li>
          <Link to="/">정책</Link>
        </li>
        <li>
          <Link to="/">비즈니스 제안</Link>
        </li>
        <li>
          <Link to="/">CS</Link>
        </li>
      </UnorderList>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--gray100-color);
  padding: 40px 16px;

  & > img {
    width: 60px;
    margin-bottom: 12px;
  }

  div {
    font-weight: var(--font--Medium);
    margin-bottom: 12px;
    padding: 5px 0;
    font-size: 12px;

    p {
      margin-bottom: 7px;
    }

    a {
      width: 16px;
      display: inline-block;
      margin-left: 8px;

      img {
        vertical-align: text-top;
      }
    }
  }
`;

const UnorderList = styled.ul`
  display: flex;
  gap: 12px;
  font-size: 10px;
`;
