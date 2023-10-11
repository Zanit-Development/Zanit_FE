export interface CouponInfoType {
  createdDate: string | null;
  modifiedDate: string | null;
  couponUid: number;
  userView: {
    userUid: number;
    userName: string;
    subscribe: boolean;
  };
  userUid: number;
  couponName: string | null;
  usedBar: string | null;
  usedCocktail: string | null;
  coverCharge: number;
  expDate: string;
  usedTime: string | null;
  used: boolean;
}

// 쿠폰 생성일
// 쿠폰 수정일
// 쿠폰고유번호
// 유저고유번호
// 유저이름
// 구독여부
// 유저고유번호
// 쿠폰이름
// 사용된바
// 사용된 칵테일
// 커버차지
// 유효기간
// 사용된 시간
// 사용여부

// TODO: 수정 필요할듯
export interface UsedCouponList {
  createdDate: string | null;
  modifiedDate: string | null;
  couponUid: number;
  userView: null;
  userUid: number;
  couponName: string | null;
  usedBar: {
    barPicUid: null;
    barUids: number;
    barName: string;
    barPicture: null;
  };
  usedBars: null;
  usedCocktail: {
    cocktailPicUid: null;
    cocktailName: string;
    cocktailUids: number;
    cocktailPicture: null;
  };
  usedCocktails: null;
  coverCharge: number;
  expDate: string;
  usedTime: null;
  used: boolean;
}
