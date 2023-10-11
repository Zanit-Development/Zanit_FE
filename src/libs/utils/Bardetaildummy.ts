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
  barPics: [bar1, bar2, bar3, bar1],
  barMood: "태그",
  barDetail: `유니크한 청담동 칵테일 마신 밤 티베이스칵테일\n이곳에는 바에 대한 최대 50자의 설명이 들어갑니다. `,
  barLocation: "서울 강남구 선릉로162길 16 엘리자벳빌딩 1층",
  openHours: "평일 8시~11시",
  price: "55000",
  coverCharge: "5000",
  barsCocktail: [
    {
      cocktailName: "임시",
      cocktailPicture: cocktailImg1,
      recoUser: 2,
      cocktailDetail: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
    },
    {
      cocktailName: "임시",
      cocktailPicture: cocktailImg1,
      recoUser: 0,
      cocktailDetail: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
    },
    {
      cocktailName: "임시",
      cocktailPicture: cocktailImg1,
      recoUser: 1,
      cocktailDetail: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
    },
    {
      cocktailName: "임시",
      cocktailPicture: cocktailImg1,
      recoUser: 2,
      cocktailDetail: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
    },
  ],
};
