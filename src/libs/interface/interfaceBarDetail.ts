import { CocktailProps } from "./interfaceCocktail";

export interface BarProps {
  barUid: number;
  barName: string;
  barLocation: string;
  barLocationDetail: string;
  barPics: string[];
  barMood: string;
  barDetail: string;
  barTime: string;
  barsCocktail: CocktailProps[];
  coverCharge?: number | string;
  coverChargeOff?: number | string;
}
