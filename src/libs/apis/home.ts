import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import cockDummy from "../../assets/sample-img/cocktail1.jpg";
import { bar, cocktail } from "../interface/interfaceAPI";

export const getRandomDataAPI = async () => {
  try {
    const [barData, cockData] = await Promise.all([defaultInstance.get("/barListHome"), defaultInstance.get("/getCocktailRandom")]);

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
    throw e;
  }
};
