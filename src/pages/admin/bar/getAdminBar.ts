import { authInstance, XAuthInstance } from "../../../libs/apis/axios";
import { bar } from "../../../libs/interface/interfaceAPI";

export const getBarInfo = async () => {
  try {
    const res: bar = (await authInstance.get(`/admin/adminsBar`)).data;

    console.log(res);

    // const temp: BarProps = {
    //   barUid: res.barUid,
    //   barName: res.barName,
    //   barLocation: res.barLocation,
    //   barPics: res.barPicsPath?.map((item) => item.barPicture) ?? [barDummy, barDummy2, barDummy3],
    //   barMood: res.barMood,
    //   barDetail: res.barDetail ?? "더미설명",
    //   barsCocktail: res.barsCocktail!.map((item) => {
    //     return {
    //       cocktailPicture: item.cocktailPicPath!,
    //       cocktailName: item.cocktailName!,
    //       recoUser: item.recoUser!,
    //       cocktailDetail: item.cocktailDetail!,
    //     };
    //   }),
    //   coverCharge: res.coverCharge,
    //   price: "40000",
    //   openHours: "평일 8시~11시",
    // };

    // console.log(temp);

    // return temp;
    return;
  } catch (e) {
    throw e;
  }
};
