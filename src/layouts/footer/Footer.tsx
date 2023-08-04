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
      <p>대표이사 : 정태송</p>
      <p>206-55-98984</p>
      <div>
        <a href="https://pf.kakao.com/_QxdiAG">
          <img src={kakao} alt="카카오톡" />
        </a>
        <a href="https://www.instagram.com/zanit.official/">
          <img src={instar} alt="인스타그램" />
        </a>
      </div>
      <UnorderList>
        <li>
          <a href="https://speller05.notion.site/a3dca23eefff49788c9095bd0b38ed0b">이용안내</a>
        </li>
        <li>
          <a href="https://speller05.notion.site/a3dca23eefff49788c9095bd0b38ed0b">정책</a>
        </li>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqOnIIhwyT6We1MkT1OuQ90cEw-pOdWAxBTvjStaSnBIB-mg/viewform">비즈니스 제안</a>
        </li>
        <li>
          <a href="https://pf.kakao.com/_QxdiAG">CS</a>
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

  p {
    font-weight: var(--font--Medium);
    padding: 5px 0;
    font-size: 12px;
  }

  div {
    display: flex;
    gap: 5px;
    margin: 5px 0 12px;

    a {
      width: 16px;
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
