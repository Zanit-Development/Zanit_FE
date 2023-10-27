export interface PopupProps {
  barPicture: string;
  barName: string;
  barLocation: string;
  barUid: number;
  cocktailName: string;
  cocktailPrice: number;
  cocktailUid: number;
  coverCharge?: number;
  onClose: () => void;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

export interface propsType {
  barPicture: string;
  barName: string;
  barLocation: string;
  barUid: number;
  coverCharge: string;
  cocktailName: string;
  cocktailPrice: number;
  cocktailUid: number;
}

// 전체 바 리스트
// 바별 칵테일 리스트

export interface bar {
  barUid: number;
  barPicture: string;
  barName: string;
  barLocation: string;
  coverCharge: string;
  barCocktail: cocktail[];
}

// 바 1번 사진
// 바 이름
// 바 주소
// 커버차지
// 칵테일 리스트

export interface cocktail {
  cocktailName: string;
  cocktailPrice: number;
}

// 칵테일 이름
// 칵테일 가격
