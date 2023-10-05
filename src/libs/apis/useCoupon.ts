import { defaultInstance } from "./axios";
import { bar, cocktail } from "../interface/interfaceAPI";
import barDummy2 from "../../assets/sample-img/bar2.png";

export const getBarList = async () => {
  try {
    const [barData, cockData] = await Promise.all([defaultInstance.get("/barListHome"), defaultInstance.get("/getCocktailList")]);

    const temp = barData.data.map((barItem: bar) => {
      const barItemUid = barItem.barUid;

      return {
        barPicture: barItem.barPicsPath[0]?.barPicture ?? barDummy2,
        barUid: barItem.barUid,
        barName: barItem.barName,
        barLocation: barItem.barLocation,
        coverCharge: barItem.coverCharge,
        barCocktail: cockData.data
          .filter((item: cocktail) => {
            return item.barUid === barItemUid && item.activated;
          })
          .map((cockItem: cocktail) => {
            return {
              cocktailName: cockItem.cocktailName,
              cocktailPrice: cockItem.cocktailPrice,
            };
          }),
      };
    });

    return temp;
  } catch (e) {
    throw e;
  }
};

export const postUseCoupon = async () => {
  try {
    const res = await defaultInstance.post("/couponUse");
    console.log(res);
    return res;
  } catch (e) {
    throw e;
  }
};