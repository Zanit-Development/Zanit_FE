import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import cockDummy from "../../assets/sample-img/cocktail1.jpg";
import { bar, cocktail } from "../interface/interfaceAPI";
import { barItemOptions, cocktailItemOptions } from "../dummy/Homedummy";

export const getRandomDataAPI = async () => {
  try {
    const [barData, cockData] = await Promise.all([defaultInstance.get("/barListHome", { timeout: 500 }), defaultInstance.get("/getCocktailRandom", { timeout: 500 })]);

    const barList = barData.data.map((item: bar) => {
      return {
        link: `/bar-detail?barUid=${item.barUid}`,
        name: item.barName,
        typevariants: "primary",
        url: item.barPicsPath[0]?.barPicture ?? barDummy,
      };
    });

    const cockList = cockData.data.map((item: cocktail) => {
      return {
        link: `/bar-detail?barUid=${item.barUid}`,
        name: item.cocktailName,
        typevariants: "primary",
        url: item.cocktailPicPath ?? cockDummy,
      };
    });

    return { barList, cockList };
  } catch (e) {
    return { barList: barItemOptions, cockList: shuffleArray(cocktailItemOptions).slice(0, 10) };
  }
};

function shuffleArray(array: any) {
  // 배열의 길이를 저장
  let currentIndex = array.length,
    randomIndex;

  // 남아있는 요소가 남아있을 때까지
  while (currentIndex !== 0) {
    // 랜덤한 인덱스 선택
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // 현재 요소와 랜덤하게 선택된 요소 교환
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
