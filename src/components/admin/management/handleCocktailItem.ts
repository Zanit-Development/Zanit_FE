import { INPUT_EVENT } from "../../../libs/interface/typeEvent";

export const handleCocktailList = (e: INPUT_EVENT, setChecked: Function, setShowList: Function) => {
  const checked = e.target.checked;
  setChecked(!checked);

  if (checked) {
    setShowList();
  } else {
    setShowList();
  }
};
