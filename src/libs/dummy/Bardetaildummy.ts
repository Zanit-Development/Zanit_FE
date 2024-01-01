import { BarProps } from "../interface/interfaceBarDetail";

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

export const BarInfoList: BarProps[] = [
  {
    barUid: 0,
    barName: "믹스드 라인",
    barPics: [1, 2, 3, 4].map((e) => require(`../../assets/sample-img/bar1/bar${e}.png`)),
    barMood: "고급스러운",
    barDetail: `전체적인 밸런스가 괜찮은 한식 다이닝바`,
    barLocation: "중구",
    barLocationDetail: "충무로5길 18",
    barTime: `목 18:00 - 24:00
    금 18:00 - 24:00
    토 17:00 - 24:00
    일 정기휴무 (매주 일요일)
    월 정기휴무 (매주 월요일)
    화 18:00 - 24:00
    수 18:00 - 24:00`,
    coverCharge: "[기존금액]",
    coverChargeOff: "[할인금액]",
    barsCocktail: [
      {
        cocktailName: "클라랑 델 루즈",
        cocktailPicture: require("../../assets/sample-img/bar1/cocktail1.png"),
        recoUser: 2,
        cocktailDetail: "아름다운 균형미를 보여주는 와인으로 체리, 블랙 베리, 블랙 커런트 향과 은은하게 전달되는 초콜릿 풍미가 조화를 이룬다",
      },
      {
        cocktailName: "오마쥬 아 호베르",
        cocktailPicture: require("../../assets/sample-img/bar1/cocktail2.png"),
        recoUser: 0,
        cocktailDetail: `레드체리와 라즈베리를 주로한 복합적인 레드과일 풍미가 기분좋은 산도와 혀를 간지럽히는 탄산감이 와인을 발랄하게 해줍니다.`,
      },
      {
        cocktailName: "알토 몬카요 베라톤",
        cocktailPicture: require("../../assets/sample-img/bar1/cocktail3.png"),
        recoUser: 1,
        cocktailDetail: "와인의 짙은 농도를 느끼게 하는 짙고 어두운 질감의 검붉은 색감과 함께 잘익은 농익은 과일향과 다크 초콜릿의 조화가 매우 인상적이다.",
      },
    ],
  },
  {
    barUid: 1,
    barName: "허밍",
    barPics: [1, 2, 3, 4].map((e) => require(`../../assets/sample-img/bar2/bar${e}.png`)),
    barMood: "고즈넉한",
    barDetail: `Music Pub 허밍은 지역별 다양한 싱글몰트 위스키와 50가지 칵테일을 전문 바텐더를 통해 합리적인 가격에 맛 보실 수 있습니다. 
    또, 수천장의 LP 앨범이 소장되어 있어, 듣고 싶은 곡을 직접 신청하여 40년된 빈티지 오디오시스템과 6개의 명품스피커를 통해 감상하실 수도 있습니다.`,
    barLocation: "강남구",
    barLocationDetail: "언주로 605",
    barTime: `목 19:00 - 01:00
    금 19:00 - 01:00
    토 20:00 - 01:00
    일 19:00 - 24:00
    월 19:00 - 01:00
    화 19:00 - 01:00
    수 19:00 - 01:00`,
    coverCharge: "[기존금액]",
    coverChargeOff: "[할인금액]",
    barsCocktail: [
      {
        cocktailName: "드라이 마티니",
        cocktailPicture: require("../../assets/sample-img/bar2/cocktail1.png"),
        recoUser: 2,
        cocktailDetail: "드라이 마티니는 진과 드라이 베르무트의 조화로운 조합을 중시합니다.",
      },
      {
        cocktailName: "애플 마티니",
        cocktailPicture: require("../../assets/sample-img/bar2/cocktail2.png"),
        recoUser: 1,
        cocktailDetail: `애플 마티니는 그린 애플의 상큼한 향과 애플 플레이버드 보드카의 부드러운 맛이 어우러져 특유의 맛을 만듭니다.`,
      },
      {
        cocktailName: "코즈모 폴리탄",
        cocktailPicture: require("../../assets/sample-img/bar2/cocktail3.png"),
        recoUser: 1,
        cocktailDetail: "코즈모폴리탄은 보통 분홍빛의 색상을 가지며, 상큼하면서도 약간의 단맛이 더해진 맛을 제공합니다. ",
      },
    ],
  },
  {
    barUid: 2,
    barName: "성지술례",
    barPics: [1, 2, 3, 4].map((e) => require(`../../assets/sample-img/bar3/bar${e}.png`)),
    barMood: "레트로한",
    barDetail: `공중전화기를 밀고 들어서면 비밀스런 공간이 등장합니다. 소규모 모임에 적절한 스피크이지 바`,
    barLocation: "경기 성남시 중원구",
    barLocationDetail: "광명로32번길 8 1층",
    barTime: `목 19:00 - 03:00 
    금 19:00 - 03:00 
    토 19:00 - 03:00
    일 19:00 - 03:00
    월 정기휴무 (매주 월요일)
    화 19:00 - 03:00
    수 19:00 - 03:00
    `,
    coverCharge: "[기존금액]",
    coverChargeOff: "[할인금액]",
    barsCocktail: [
      {
        cocktailName: "깔루아 밀크",
        cocktailPicture: require("../../assets/sample-img/bar3/cocktail1.png"),
        recoUser: 0,
        cocktailDetail: "리큐르를 베이스로 한 칵테일. 말 그대로 우유에 커피 리큐르인 깔루아를 섞은 것으로 달콤하고 부드러우며 도수는 맥주와 비슷한 정도.",
      },
      {
        cocktailName: "잭콕",
        cocktailPicture: require("../../assets/sample-img/bar3/cocktail2.png"),
        recoUser: 1,
        cocktailDetail: `위스키 베이스 칵테일. 그 유명한 잭 다니엘에 콜라를 섞어 마시는 매우 간단한 칵테일이다.`,
      },
      {
        cocktailName: "파우스트",
        cocktailPicture: require("../../assets/sample-img/bar3/cocktail3.png"),
        recoUser: 2,
        cocktailDetail: "오버프루프 럼이 들어가는 만큼 알콜도수가 높은 칵테일이다. 보통 사람들이 알고 있는 칵테일중에서는 알콜도수가 거의 최상위권에 들어있는 칵테일.",
      },
    ],
  },
  {
    barUid: 3,
    barName: "뽀빠이피자클럽",
    barPics: [1, 2, 3, 4].map((e) => require(`../../assets/sample-img/bar4/bar${e}.png`)),
    barMood: "신나는",
    barDetail: `조각 피자 부터 13인치 안산 유일한 18인치 대형 피자까지 직접 반죽하고 48시간 숙성 후 기계가 아닌 손으로 피는 수제피자와 다양한 라인업의 수제 맥주를 즐길 수 있는 피자펍!`,
    barLocation: "경기 안산시 단원구",
    barLocationDetail: "광덕2로 163-7 뱅뱅프라자 101, 102호",
    barTime: `목 17:00 - 01:00
    금 17:00 - 02:00
    토 17:00 - 02:00
    일 17:00 - 01:00
    월 17:00 - 01:00
    화 17:00 - 01:00
    수 17:00 - 01:00`,
    coverCharge: "[기존금액]",
    coverChargeOff: "[할인금액]",
    barsCocktail: [
      {
        cocktailName: "진토닉",
        cocktailPicture: require("../../assets/sample-img/bar4/cocktail1.png"),
        recoUser: 1,
        cocktailDetail: "집에서 만들기 쉬운 칵테일 베스트 1에 들어가는 칵테일이다. ",
      },
      {
        cocktailName: "미도리 사워",
        cocktailPicture: require("../../assets/sample-img/bar4/cocktail2.png"),
        recoUser: 0,
        cocktailDetail: `미도리 사워는 미도리 메론 리큐어의 특유의 멜론 향과 신선한 레몬 주스가 조화를 이루어 만들어집니다.`,
      },
      {
        cocktailName: "아그와 밤",
        cocktailPicture: require("../../assets/sample-img/bar4/cocktail3.png"),
        recoUser: 1,
        cocktailDetail: "코카 잎을 사용한 청량한 음료를 기반으로 하는 칵테일입니다.",
      },
    ],
  },
  {
    barUid: 4,
    barName: "탐스",
    barPics: [1, 2, 3, 4].map((e) => require(`../../assets/sample-img/bar5/bar${e}.png`)),
    barMood: "캐주얼한",
    barDetail: `20년 전통의 이문동 터줏대감`,
    barLocation: "동대문구",
    barLocationDetail: "휘경로2길 5-10 지하 1층",
    barTime: `목 18:00 - 02:00
    금 18:00 - 02:00
    토 19:00 - 02:00
    일 19:00 - 02:00
    월 18:00 - 02:00
    화 18:00 - 02:00
    수 18:00 - 02:00`,
    coverCharge: "[기존금액]",
    coverChargeOff: "[할인금액]",
    barsCocktail: [
      {
        cocktailName: "롱티",
        cocktailPicture: require("../../assets/sample-img/bar5/cocktail1.png"),
        recoUser: 0,
        cocktailDetail: "롱 아일랜드 아이스티는 데킬라, 럼, 보드카 등 여러 양주를 베이스로 하는 칵테일이며, 한국의 바에서는 줄여서 롱티라고 흔히 부른다.",
      },
      {
        cocktailName: "갓파더",
        cocktailPicture: require("../../assets/sample-img/bar5/cocktail2.png"),
        recoUser: 2,
        cocktailDetail: `갓파더는 부드러운 위스키 풍미와 달콤한 아몬드 향이 어우러져 풍부하면서도 부드러운 맛을 제공합니다.`,
      },
    ],
  },
];
