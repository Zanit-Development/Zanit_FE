export interface bar {
  barUid: number;
  barName: string;
  barLocation: string;
  barLocationDetail: string;
  barPics: string[] | null;
  barPicsPath: barPicsPathInterface[];
  barMood: string;
  barDetail: string | null;
  barTime: string;
  barsCocktail: cocktail[] | null;
  barOwner: number | null;
  barPhone: string | null;
  coverCharge: number;
  coverChargeOff: number;
}

export interface cocktail {
  barUid: number;
  cocktailUid: number;
  cocktailName: string;
  cocktailDetail: string;
  recoUser: number;
  cocktailPrice: number;
  cocktailPic: string | null;
  cocktailPicPath: string | null;
  cocktailPicPaths: null;
  activated: boolean;
}

export interface barPicsPathInterface {
  barPicUid: number;
  barUid: number;
  barPicture: string;
}

// 업데이트 필요
export interface user {
  couponUsed: boolean;
  subScribeType: string | null;
  subsEndDate: string | null;
  subsStartDate: string | null;
  subscribe: boolean;
  subscribeName: string | null;
  userGender: boolean;
  userName: string;
  userPhone: string;
  userUid: number;
}
