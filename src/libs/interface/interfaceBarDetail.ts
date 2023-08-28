export interface CocktailProps {
  img: string;
  title: string;
  level: string;
  description: string;
}

export interface BarProps {
  barUid: number;
  barName: string;
  barPics: string;
  barMood: string[];
  barLocation: string;
  description: string;
  openhours: string;
  cocktails: CocktailProps[];
  price: number;
  discount: number;
}
