import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import barDummy2 from "../../assets/sample-img/bar2.png";
import barDummy3 from "../../assets/sample-img/bar3.png";
import { BarProps } from "../interface/interfaceBarDetail";
import { bar } from "../interface/interfaceAPI";
import { BarInfoList } from "../dummy/Bardetaildummy";

export const getBarInfo = async (barUid: string) => {
  try {
    const res: bar = (await defaultInstance.get(`/barInfo?barId=${barUid}`, { timeout: 100 })).data;

    const temp: BarProps = {
      barUid: res.barUid,
      barName: res.barName,
      barLocation: res.barLocation,
      barLocationDetail: res.barLocationDetail,
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
      coverChargeOff: res.coverChargeOff,
      barTime: res.barTime,
    };

    return temp;
  } catch (e) {
    const idx = Number(barUid);
    return BarInfoList[idx];

    // throw e;
  }
};
