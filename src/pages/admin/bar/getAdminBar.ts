import { authInstance } from "../../../libs/apis/axios";
import { bar } from "../../../libs/interface/interfaceAPI";
import { BarProps } from "../../../libs/interface/interfaceBarDetail";
import { BarInfo } from "../../../libs/utils/Bardetaildummy";

export const getAdminBarInfo = async () => {
  try {
    const res = await authInstance.get(`/admin/adminsBar`);

    if (res.statusText !== "OK") throw new Error("바 정보 없다");

    const data: bar = res.data;

    const temp: BarProps = {
      barUid: data.barUid,
      barName: data.barName,
      barLocation: data.barLocation,
      barLocationDetail: data.barLocationDetail,
      barPics: data.barPicsPath?.map((item) => item.barPicture),
      barMood: data.barMood,
      barDetail: data.barDetail ?? "",
      barTime: data.barTime,
      barsCocktail: data.barsCocktail!.map((item) => {
        return {
          cocktailPicture: item.cocktailPicPath!,
          cocktailName: item.cocktailName!,
          recoUser: item.recoUser!,
          cocktailDetail: item.cocktailDetail!,
        };
      }),
      coverCharge: data.coverCharge,
      coverChargeOff: data.coverChargeOff,
    };

    return temp;
  } catch (e) {
    return BarInfo;
  }
};
