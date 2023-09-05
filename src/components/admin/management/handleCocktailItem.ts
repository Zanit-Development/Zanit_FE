export const handleCocktailList = (checked: boolean, setChecked: Function, setShowList: Function) => {
  setChecked(!checked);

  if (checked) {
    setShowList();
  } else {
    setShowList();
  }
};
