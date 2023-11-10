export interface PopupProps extends useCouponPropsType {
  onClose: () => void;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

export interface useCouponPropsType extends Omit<useCouponBar, "barCocktail">, useCouponCocktail {}

// 전체 바 리스트
// 바별 칵테일 리스트

export interface useCouponBar {
  barUid: number;
  barPicture: string;
  barName: string;
  barLocation: string;
  barCocktail: useCouponCocktail[];
  coverChargeOff?: number;
}

// 바 1번 사진
// 바 이름
// 바 주소
// 커버차지
// 칵테일 리스트

export interface useCouponCocktail {
  cocktailUid: number;
  cocktailName: string;
  cocktailPrice: number;
}
// 칵테일 이름
// 칵테일 가격
