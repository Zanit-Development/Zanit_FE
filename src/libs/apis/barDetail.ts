import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import barDummy2 from "../../assets/sample-img/bar2.png";
import barDummy3 from "../../assets/sample-img/bar3.png";
import { randomBarList } from "../../pages/home/interface";
import { BarProps } from "../interface/interfaceBarDetail";
import cocktailImg1 from "../../assets/sample-img/cocktail1.jpg";
import cocktailImg2 from "../../assets/sample-img/cocktail2.jpg";
import cocktailImg3 from "../../assets/sample-img/cocktail3.jpg";

export const getBarInfo = async (barUid: string): Promise<any> => {
  try {
    const res = (await defaultInstance.get(`/barInfo?barId=${barUid}`)).data;

    const temp: BarProps = {
      barUid: res.barUid,
      barName: res.barName,
      barLocation: res.barLocation,
      barPics: res.barPics ?? [barDummy, barDummy2, barDummy3],
      barMood: res.barMood,
      barDetail: res.barDetail ?? "더미설명",
      barsCocktail: res.barsCocktail ?? [
        {
          title: "임시",
          img: cocktailImg1,
          level: "수준",
          description: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
        },
        {
          title: "임시",
          img: cocktailImg2,
          level: "수준",
          description: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
        },
        {
          title: "임시",
          img: cocktailImg3,
          level: "수준",
          description: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
        },
        {
          title: "임시",
          img: cocktailImg3,
          level: "수준",
          description: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
        },
        {
          title: "임시",
          img: cocktailImg2,
          level: "수준",
          description: `대표적인 레이디 킬러 칵테일 중 하나로,\n 달콤한 맛에 비해 도수가 무려 20도를 넘어선다.\nIBA 공식 칵테일에 등록되어 있는 레시피 중 하나`,
        },
      ],
      coverCharge: res.coverCharge,
      price: "40000",
      openHours: "평일 8시~11시",
    };

    console.log(temp);

    return temp;
  } catch (e) {
    return e;
  }
};
