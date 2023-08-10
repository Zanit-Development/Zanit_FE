export interface cocktailInfo {
  img: string;
  title: string;
  level: string;
  description: string;
}

export interface barInfo {
  title: string;
  img: string;
  tags: string[];
  description: string;
  address: string;
  openHours: string[];
  cocktails: cocktailInfo[];
}
