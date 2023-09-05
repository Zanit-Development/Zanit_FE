import { INPUT_EVENT, SELECT_EVENT } from "../../../libs/interface/typeEvent";

const checkNumberRegex = /\d/g;

export const handleChangeInput = (e: INPUT_EVENT, setValue: Function) => {
  // const inputId = e.target.id;
  const inputValue = e.target.value;

  setValue(inputValue);

  // inputId === "barName" ? setBarName(inputValue) : setBarLocation(inputValue);
};

export const handleChangeInputNumber = (e: INPUT_EVENT, setValue: Function) => {
  // const inputId = e.target.id;
  const inputValue = e.target.value.replaceAll(",", "");

  if (inputValue === "" || !checkNumberRegex.test(inputValue)) {
    setValue(inputValue);
    return false;
  }

  const result = parseInt(inputValue).toLocaleString("en");

  setValue(inputValue);
};

export const handleChangeSelect = (e: SELECT_EVENT) => {
  const selectId = e.target.id;
  const selectValue = e.target.value;

  if (selectId === "selectMood") {
  } else if (selectId === "selectCoverCharge") {
  } else if (selectId === "selectDiscount") {
  }
};
