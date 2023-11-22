import { BarProps } from "../../libs/interface/interfaceBarDetail";

import sample from "../../assets/sample-img/sampleImg.png";

export const BarInfo: BarProps = {
  barUid: -9999,
  barName: "공간 이름",
  barPics: [sample, sample, sample, sample],
  barMood: "위치",
  barDetail: `공간 설명`,
  barLocation: "전체 주소",
  barLocationDetail: "",
  barTime: "쟈닛 쿠폰 사용 가능 요일 및 시간",
  coverCharge: "[기존금액]",
  coverChargeOff: "[할인금액]",
  barsCocktail: [
    {
      cocktailName: "칵테일 이름",
      cocktailPicture: sample,
      recoUser: 0,
      cocktailDetail: "칵테일 설명",
    },
  ],
};
