import { BarProps } from "../../libs/interface/interfaceBarDetail";

import bar1 from "../../assets/sample-img/bar1.png";
import bar2 from "../../assets/sample-img/bar2.png";
import bar3 from "../../assets/sample-img/bar3.png";
import cocktailImg1 from "../../assets/sample-img/cocktail1.jpg";
import cocktailImg2 from "../../assets/sample-img/cocktail2.jpg";
import cocktailImg3 from "../../assets/sample-img/cocktail3.jpg";

export const BarInfo: BarProps = {
  barUid: 1234,
  barName: "바 이름",
  barPics: bar1,
  barMood: ["태그1", "태그2"],
  description: "유니크한 청담동 칵테일 마신 밤 티베이스칵테일 이곳에는 바에 대한 최대 50자의 설명이 들어갑니다. ",
  barLocation: "서울 강남구 선릉로162길 16 엘리자벳빌딩 1층",
  openhours: "평일 8시~11시",
  price: 1000,
  discount: 5000,
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
