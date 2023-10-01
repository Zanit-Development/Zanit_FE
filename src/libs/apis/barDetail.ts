import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import barDummy2 from "../../assets/sample-img/bar2.png";
import barDummy3 from "../../assets/sample-img/bar3.png";
import { BarProps } from "../interface/interfaceBarDetail";
import { bar } from "../interface/interfaceAPI";

export const getBarInfo = async (barUid: string) => {
  try {
    const res: bar = (await defaultInstance.get(`/barInfo?barId=${barUid}`)).data;

    console.log(res);

    const temp: BarProps = {
      barUid: res.barUid,
      barName: res.barName,
      barLocation: res.barLocation,
      barPics: res.barPicsPath?.map((item) => item.barPicture) ?? [barDummy, barDummy2, barDummy3],
      barMood: res.barMood,
      barDetail: res.barDetail ?? "더미설명",
      barsCocktail: res.barsCocktail!.map((item) => {
        return {
          cocktailPicture: item.cocktailPicPath!,
          cocktailName: item.cocktailName!,
          recoUser: item.recoUser!,
          cocktailDetail: item.cocktailDetail!,
        };
      }),
      coverCharge: res.coverCharge,
      price: "40000",
      openHours: "평일 8시~11시",
    };

    console.log(temp);

    return temp;
  } catch (e) {
    throw e;
  }
};
