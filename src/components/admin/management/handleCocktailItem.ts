export const handleCocktailList = (
  checked: boolean,
  setChecked: Function,
  setShowList: React.MutableRefObject<string>
) => {
  setChecked(!checked);
};
