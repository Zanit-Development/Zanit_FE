import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { BUTTON_EVENT } from "../../libs/interface/typeEvent";

import Button from "../common/button/Button";

import backgroundImg from "../../assets/home_banner.png";

const HomeBanner = () => {
  const navigate = useNavigate();

  const options: ButtonProps = {
    typeVariants: "fill",
    sizeVariants: "small",
    value: "지금 구독하기",
    disabled: false,
    onClick: (e: BUTTON_EVENT) => {
      navigate("/subscribe");
    },
  };
  return (
    <Container>
      <h2>새로운 칵테일 경험의 시작</h2>
      <p>자닛은 구독형 칵테일 멤버십 서비스입니다.</p>
      <p>월 29,000원으로 매주 한잔의 칵테일을 무료로 즐겨보세요!</p>
      <Button {...options} />
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  width: calc(100% - 20px);
  margin: auto 10px;
  border-radius: 8px;
  background: var(--main-color) url(${backgroundImg}) no-repeat 82px -60px;
  padding: 39px 21px 33px;
  box-sizing: border-box;

  color: var(--white-color);

  h2 {
    font-family: var(--font--semibold);
    font-size: 22px;
  }

  button,
  p {
    font-family: var(--font--Medium);
    font-size: 13px;
  }

  p {
    line-height: 16px;
    &:nth-of-type(1) {
      margin-top: 13px;
      margin-bottom: 6px;
    }
    &:nth-of-type(2) {
      margin-bottom: 66px;
    }
  }
  button {
    background-color: var(--white-color);
    color: var(--black-color);

    width: 110px;

    height: 36px;
    padding: 0 17px;

    position: relative;
    bottom: 0;
  }
`;
