export interface bar {
  barUid: number;
  barName: string;
  barLocation: string;
  barPics: string[] | null;
  barPicsPath: barPicsPathInterface[];
  barMood: string;
  barDetail: string | null;
  barsCocktail: cocktail[] | null;
  barOwner: string | null;
  barPhone: string | null;
  coverCharge: string;
}

export interface cocktail {
  barUid: number;
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
