export interface CocktailProps {
  cocktailDetail: string;
  cocktailName: string;
  cocktailPicture: string;
  recoUser: number;
}

export interface ManagementCocktailProps extends Omit<CocktailProps, "cocktailPicture"> {
  cocktailUid?: string;
  // cocktailPic: File;
  cocktailPreview?: string;
  cocktailPrice: number;
  activated: boolean;
}

export interface ManagementCocktailImageProps {
  cocktailPic: File;
}
