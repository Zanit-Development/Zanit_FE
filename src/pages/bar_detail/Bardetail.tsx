import React from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";

import { barInfo } from "../../libs/interface/interfaceBarDetail";

import barImg from "../../assets/sample-img/bar2.jpg";
import cocktailImg1 from "../../assets/sample-img/cocktail1.jpg";
import cocktailImg2 from "../../assets/sample-img/cocktail2.jpg";
import cocktailImg3 from "../../assets/sample-img/cocktail3.jpg";
import addressIcon from "../../assets/icon/icon_pin.svg";
import timeIcon from "../../assets/icon/icon_clock.svg";

import Cocktail from "../../components/bardetail/Cocktail";
import BardetailTag from "../../components/bardetail/BardetailTag";

const Bardetail: React.FC = () => {
  const barInfo: barInfo = {
    title: "바 이름",
    img: barImg,
    tags: ["태그1", "태그2"],
    description: "유니크한 청담동 칵테일 마신 밤 티베이스칵테일 이곳에는 바에 대한 최대 50자의 설명이 들어갑니다. ",
    address: "주소",
    openHours: ["월 1시~3시", "월 1시~3시", "월 1시~3시", "월 1시~3시", "월 1시~3시"],
    cocktails: [
      {
        title: "임시",
        img: cocktailImg1,
        level: "수준",
        description: "대표적인 레이디 킬러 칵테일 중 하나로, 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.IBA 공식 칵테일에 등록되어 있는 레시피 중 하나",
      },
      {
        title: "임시",
        img: cocktailImg2,
        level: "수준",
        description: "대표적인 레이디 킬러 칵테일 중 하나로, 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.IBA 공식 칵테일에 등록되어 있는 레시피 중 하나",
      },
      {
        title: "임시",
        img: cocktailImg3,
        level: "수준",
        description: "대표적인 레이디 킬러 칵테일 중 하나로, 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.IBA 공식 칵테일에 등록되어 있는 레시피 중 하나",
      },
      {
        title: "임시",
        img: cocktailImg3,
        level: "수준",
        description: "대표적인 레이디 킬러 칵테일 중 하나로, 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.IBA 공식 칵테일에 등록되어 있는 레시피 중 하나",
      },
      {
        title: "임시",
        img: cocktailImg2,
        level: "수준",
        description: "대표적인 레이디 킬러 칵테일 중 하나로, 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.IBA 공식 칵테일에 등록되어 있는 레시피 중 하나",
      },
    ],
  };

  return (
    <Layout>
      <Img src={barImg} alt="" />
      <BarInfoContainer>
        <h2>{barInfo.title}</h2>
        <TagContainer>
          {barInfo.tags.map((tag, idx) => {
            return (
              <li key={idx}>
                <BardetailTag label={tag} />
              </li>
            );
          })}
        </TagContainer>
        <p>{barInfo.description}</p>
        <address>{barInfo.address}</address>
        <ul>
          {barInfo.openHours.map((time, idx) => {
            return <li key={idx}>{time}</li>;
          })}
        </ul>
      </BarInfoContainer>
      <CocktailContainer>
        <h3 className="a11y-hidden">칵테일 목록</h3>
        <ul>
          {barInfo.cocktails.map((cocktail, idx) => (
            <Cocktail key={idx} info={cocktail} />
          ))}
        </ul>
      </CocktailContainer>
    </Layout>
  );
};

const Img = styled.img`
  width: 100%;
  height: 200px;

  margin-bottom: 32px;
`;

const BarInfoContainer = styled.section`
  padding: 0 20px;
  h2 {
    font-family: var(--font--Bold);
    font-size: 20px;
    margin-bottom: 8px;
  }
  p {
    font-family: var(--font--Medium);
    margin-bottom: 12px;
  }

  address,
  address + ul {
    position: relative;
    color: var(--gray500-color);
    font-family: var(--font--Medium);
    font-size: 12px;
    padding-left: 20px;
    padding-top: 2px;
  }

  address + ul {
    margin: 10px 0 25px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  address::before,
  address + ul::before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0.5px;
    left: 0;
  }

  address::before {
    background: url(${addressIcon}) no-repeat center;
  }

  address + ul::before {
    background: url(${timeIcon}) no-repeat center;
  }
`;

const TagContainer = styled.ul`
  margin-bottom: 18px;
  li {
    display: inline-block;
  }
  li + li {
    margin-left: 10px;
  }
  span {
    display: block;
  }
`;

const CocktailContainer = styled.section`
  padding: 0 20px;
  margin-bottom: 32px;

  ul {
    padding: 20px;
    background-color: var(--gray100-color);
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`;

export default Bardetail;
