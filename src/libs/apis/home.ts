import { defaultInstance } from "./axios";
import barDummy from "../../assets/sample-img/bar1.png";
import { randomBarList } from "../../pages/home/interface";

export const getRandomBarAPI = async () => {
  try {
    const res = await defaultInstance.get("/barListHome");
    const temp = res.data.map((item: randomBarList) => {
      return {
        link: `/bar-detail?barUid=${item.barUid}`,
        name: item.barName,
        typevariants: "primary",
        url: item.barPics?.[0] ?? barDummy,
      };
    });
    return temp;
  } catch (e) {
    return e;
  }
};
