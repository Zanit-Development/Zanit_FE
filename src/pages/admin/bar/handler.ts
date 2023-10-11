import { INPUT_EVENT, SELECT_EVENT } from "../../../libs/interface/typeEvent";

const checkInputNumber = /[,a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/g;

export const handleChangeInput = (e: INPUT_EVENT, setValue: Function) => {
  const inputValue = e.target.value;

  setValue(inputValue);
};

export const handleChangeInputNumber = (e: INPUT_EVENT, setValue: Function) => {
  const inputValue = e.target.value.replace(checkInputNumber, "");
  setValue(inputValue === "" ? "" : parseInt(inputValue).toLocaleString("en"));
};

export const handleChangeSelect = (e: SELECT_EVENT) => {
  const selectId = e.target.id;
  const selectValue = e.target.value;

  if (selectId === "selectMood") {
  } else if (selectId === "selectCoverCharge") {
  } else if (selectId === "selectDiscount") {
  }
};
