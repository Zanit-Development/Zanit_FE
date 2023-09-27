import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import cockDummy from "../../assets/sample-img/cocktail1.jpg";
import { randomBarList, randomCockList } from "../../pages/home/interface";

export const getRandomDataAPI = async () => {
  try {
    const barData = await defaultInstance.get("/barListHome");
    const barList = barData.data.map((item: randomBarList) => {
      return {
        link: `/bar-detail?barUid=${item.barUid}`,
        name: item.barName,
        typevariants: "primary",
        url: item.barPics?.[0] ?? barDummy,
      };
    });

    const cockData = await defaultInstance.get("/getCocktailRandom");
    const cockList = cockData.data.map((item: randomCockList) => {
      return {
        link: `/bar-detail?barUid=${item.barUid}`,
        name: item.cocktailName,
        typevariants: "primary",
        url: item.cocktailPic ?? cockDummy,
      };
    });

    return { barList, cockList };
  } catch (e) {
    throw e;
  }
};
