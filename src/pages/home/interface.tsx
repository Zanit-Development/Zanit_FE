export interface randomBarList {
  barUid: number;
  barName: string;
  barLocation: string;
  barPics: string[] | null;
  barMood: string;
  barDetail: string | null;
  barsCocktail: string[] | null;
  barOwner: string | null;
  barPhone: string | null;
  coverCharge: string;
}

export interface randomCockList {
  barUid: number;
  cocktailName: string;
  cocktailDetail: string;
  recoUser: number;
  cocktailPrice: number;
  cocktailPic: string | null;
  cocktailPicPath: string | null;
  activated: boolean;
}
