import { defaultInstance, authInstance } from "./axios";
import { bar, cocktail } from "../interface/interfaceAPI";
import barDummy2 from "../../assets/sample-img/bar2.png";
import { barLists } from "../dummy/useCoupondummy";

export const getBarList = async () => {
  try {
    const [barData, cockData] = await Promise.all([defaultInstance.get("/barListHome", { timeout: 100 }), defaultInstance.get("/getCocktailList", { timeout: 100 })]);

    const temp = barData.data.map((barItem: bar) => {
      const barItemUid = barItem.barUid;

      return {
        barPicture: barItem.barPicsPath[0]?.barPicture ?? barDummy2,
        barUid: barItem.barUid,
        barName: barItem.barName,
        barLocation: barItem.barLocation,
        // coverChargeOff로 변경
        coverChargeOff: barItem.coverChargeOff,
        barCocktail: cockData.data
          .filter((item: cocktail) => {
            return item.barUid === barItemUid && item.activated;
          })
          .map((cockItem: cocktail) => {
            return {
              cocktailUid: cockItem.cocktailUid,
              cocktailName: cockItem.cocktailName,
              cocktailPrice: cockItem.cocktailPrice,
            };
          }),
      };
    });

    return temp;
  } catch (e) {
    return barLists;
  }
};

interface usedInfo {
  usedBar: number;
  usedCocktail: number;
}

export const postUseCoupon = async (data: usedInfo) => {
  try {
    const res = await authInstance.post("/couponUse", JSON.stringify(data));
    console.log(res);
    if (res.status === 200) {
      return res.data as number;
    }
  } catch (err) {
    throw err;
  }
};
