import { CocktailProps } from "./interfaceCocktail";

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
