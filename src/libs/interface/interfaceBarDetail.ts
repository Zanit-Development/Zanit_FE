export interface CocktailProps {
  img: string;
  title: string;
  level: string;
  description: string;
}

export interface BarProps {
  barUid: number;
  barName: string;
  barLocation: string;
  barPics: string[];
  barMood: string;
  barDetail: string;
  barsCocktail: CocktailProps[];
  coverCharge: string;
  price: string;
  openHours: string;
}
