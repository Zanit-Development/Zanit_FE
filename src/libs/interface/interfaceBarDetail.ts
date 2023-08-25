export interface CocktailProps {
  img: string;
  title: string;
  level: string;
  description: string;
}

export interface BarProps {
  title: string;
  img: string;
  tags: string[];
  description: string;
  address: string;
  openhours: string[];
  cocktails: CocktailProps[];
}
