import { ChangeEvent } from "react";
import { SELECT_EVENT } from "../../../libs/interface/typeEvent";

const checkInputNumber = /[,a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/g;

export const handleChangeInput = (e: ChangeEvent<any>, type: React.MutableRefObject<string>) => {
  const inputValue = e.target.value;
  type.current = inputValue;
};

export const handleChangeSelect = (e: SELECT_EVENT) => {
  const selectId = e.target.id;
  const selectValue = e.target.value;

  if (selectId === "selectMood") {
  } else if (selectId === "selectCoverCharge") {
  } else if (selectId === "selectDiscount") {
  }
};
