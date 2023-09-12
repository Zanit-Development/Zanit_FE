import React from "react";
import { styled } from "styled-components";

import LogoFoot from "../../assets/logo_footer.svg";
import kakao from "../../assets/icon/icon_sns_kakao.svg";
import instar from "../../assets/icon/icon_sns_instar.svg";
import cafe from "../../assets/icon/icon_sns_cafe.svg";

const Footer = () => {
  const admin = false;

  return (
    <FooterContainer>
      <img src={LogoFoot} alt="Zanit" />
      <p>대표이사 정태송</p>
      <div>
        <p>206-55-98984</p>
        <a href="http://pf.kakao.com/_JxoExhG">
          <img src={kakao} alt="카카오톡" />
        </a>
        <a href="https://www.instagram.com/zanit.official/">
          <img src={instar} alt="인스타그램" />
        </a>
        <a href="https://cafe.naver.com/zanit">
          <img src={cafe} alt="네이버 카페" />
        </a>
      </div>
      <UnorderList>
        <li>
          <a href="https://speller05.notion.site/a3dca23eefff49788c9095bd0b38ed0b?pvs=4">이용약관</a>
        </li>
        <li>
          <a href="#">환불정책</a>
        </li>
        <li>
          <a href="https://forms.gle/crUq25uciMG3iFWX7">비즈니스 제안</a>
        </li>
        {admin || (
          <>
            <li>
              <a href="http://pf.kakao.com/_JxoExhG">CS</a>
            </li>
            <li>
              <a href="http://pf.kakao.com/_JxoExhG">탈퇴하기</a>
            </li>
          </>
        )}
      </UnorderList>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--gray100-color);
  padding: 40px 16px;

  & > img {
    margin-bottom: 12px;
  }

  p {
    font-family: var(--font--Medium);
    /* padding: 5px 0; */
    line-height: 24px;
    font-size: 12px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
`;

const UnorderList = styled.ul`
  display: flex;
  gap: 12px;
  font-size: 10px;
`;
