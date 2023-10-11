export interface CocktailProps {
  cocktailDetail: string;
  cocktailName: string;
  cocktailPicture: string;
  recoUser: number;
}

export interface ManagementCocktailProps extends Omit<CocktailProps, "cocktailPicture"> {
  cocktailUid?: string;
  cocktailPicture: File;
  cocktailPreview?: string;
}
