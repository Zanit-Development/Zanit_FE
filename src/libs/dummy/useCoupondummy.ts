import { useCouponBar } from "../interface/interfaceUseCoupon";
export const barLists: useCouponBar[] = [
  {
    barPicture: require(`../../assets/sample-img/bar1/bar1.png`),
    barUid: 0,
    barName: "믹스드 라인",
    barLocation: "중구 충무로5길 18",
    coverChargeOff: 10000,
    barCocktail: [
      {
        cocktailUid: 0,
        cocktailName: "클라랑 델 루즈",
        cocktailPrice: 10000,
      },
      {
        cocktailUid: 1,
        cocktailName: "오마쥬 아 호베르",
        cocktailPrice: 10000,
      },
      {
        cocktailUid: 2,
        cocktailName: "알토 몬카요 베라톤",
        cocktailPrice: 10000,
      },
    ],
  },
  {
    barPicture: require(`../../assets/sample-img/bar2/bar1.png`),
    barUid: 1,
    barName: "허밍",
    barLocation: "강남구 언주로 605",
    coverChargeOff: 10000,
    barCocktail: [
      {
        cocktailUid: 3,
        cocktailName: "드라이 마티니",
        cocktailPrice: 10000,
      },
      {
        cocktailUid: 4,
        cocktailName: "애플 마티니",
        cocktailPrice: 10000,
      },
      {
        cocktailUid: 5,
        cocktailName: "코즈모 폴리탄",
        cocktailPrice: 10000,
      },
    ],
  },
  {
    barUid: 2,
    barName: "성지술례",
    barPicture: require(`../../assets/sample-img/bar3/bar1.png`),
    barLocation: "경기 성남시 중원구 광명로32번길 8 1층",
    barCocktail: [
      {
        cocktailUid: 6,
        cocktailPrice: 10000,
        cocktailName: "깔루아 밀크",
      },
      {
        cocktailUid: 7,
        cocktailPrice: 10000,
        cocktailName: "잭콕",
      },
      {
        cocktailUid: 8,
        cocktailPrice: 10000,
        cocktailName: "파우스트",
      },
    ],
  },
  {
    barUid: 3,
    barName: "뽀빠이피자클럽",
    barPicture: require(`../../assets/sample-img/bar4/bar1.png`),
    barLocation: "경기 안산시 단원구 광덕2로 163-7 뱅뱅프라자 101, 102호",
    coverChargeOff: 10000,
    barCocktail: [
      {
        cocktailUid: 9,
        cocktailPrice: 10000,
        cocktailName: "진토닉",
      },
      {
        cocktailUid: 10,
        cocktailPrice: 10000,
        cocktailName: "미도리 사워",
      },
      {
        cocktailUid: 11,
        cocktailPrice: 10000,

        cocktailName: "아그와 밤",
      },
    ],
  },
  {
    barUid: 4,
    barName: "탐스",
    barPicture: require(`../../assets/sample-img/bar5/bar1.png`),
    barLocation: "동대문구 휘경로2길 5-10 지하 1층",
    coverChargeOff: 10000,
    barCocktail: [
      {
        cocktailUid: 12,
        cocktailPrice: 10000,
        cocktailName: "롱티",
      },
      {
        cocktailUid: 13,
        cocktailName: "갓파더",
        cocktailPrice: 10000,
      },
    ],
  },
];
