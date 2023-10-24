import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { BUTTON_EVENT } from "../../libs/interface/typeEvent";

import Button from "../common/button/Button";

import backgroundImg from "../../assets/home_banner.png";
import { getLoginCookie } from "../../libs/utils/loginCookie";
import { userInfoAPI } from "../../libs/apis/user";
import { user } from "../../libs/interface/interfaceAPI";

const HomeBanner = () => {
  const navigate = useNavigate();
  const isToken = getLoginCookie(); // 로그인 여부 테스트용 불리언

  const commonOptions: Pick<ButtonProps, "typevariants" | "sizevariants" | "disabled"> = {
    typevariants: "fill",
    sizevariants: "small",
    disabled: false,
  };

  const optionSignup = {
    ...commonOptions,
    value: "회원가입 하기",
    onClick: () => {
      navigate("/signUp");
    },
  };

  const optionSubscribe = {
    ...commonOptions,
    value: "지금 구독하기",
    onClick: async () => {
      const res = (await userInfoAPI()) as user | string;
      let url;
      if (typeof res === "string") {
        url = "/signIn";
      } else {
        url = res.subscribe ? "/subscribe/start" : "/subscribe";
      }
      navigate(url);
    },
  };

  return (
    <Container>
      <h2>새로운 칵테일 경험의 시작</h2>
      <p>자닛은 구독형 칵테일 멤버십 서비스입니다.</p>
      <p>월 29,000원으로 매주 한잔의 칵테일을 무료로 즐겨보세요!</p>
      {isToken ? null : <Button {...optionSignup} />}
      <Button {...optionSubscribe} />
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  box-sizing: border-box;
  height: 251px;
  padding: 27px 0 27px 16px;
  margin: 0 10px;
  border-radius: 8px;

  background: var(--main-color) url(${backgroundImg}) no-repeat 82px -74px;
  color: var(--white-color);

  position: relative;

  h2 {
    font-family: var(--font--semibold);
    font-size: 22px;
  }

  button,
  p {
    font-family: var(--font--Medium);
  }

  button {
    font-size: 13px;
  }

  p {
    font-size: 13px;

    line-height: 16px;
    &:nth-of-type(1) {
      margin-top: 19px;
      margin-bottom: 6px;
    }
    &:nth-of-type(2) {
      margin-bottom: 37px;
    }
  }

  button {
    display: block;
    width: 110px;
    height: 36px;

    background-color: var(--main-color);
    color: var(--white-color);
    border: 1px solid var(--white-color);

    &:last-of-type {
      background-color: var(--white-color);
      color: var(--black-color);
      position: absolute;
      bottom: 27px;
    }
  }
`;
