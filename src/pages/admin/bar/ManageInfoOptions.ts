import { InputProps } from "../../../libs/interface/interfaceCommon";
import { INPUT_EVENT } from "../../../libs/interface/typeEvent";

const InfoBase: InputProps = {
  typevariants: "primary",
  sizevariants: "small",
  type: "text",
  value: "",
  placeholder: "",
  onChange: function (e: INPUT_EVENT): void {
    throw new Error("Function not implemented.");
  },
};

export const BAR_INFO = {
  NAME: {
    ...InfoBase,
    id: "barName",
    placeholder: "상호명을 입력해주세요(띄어쓰기 없이)",
  },
  LOCATION: {
    ...InfoBase,
    id: "barLocation",
    placeholder: "전체 주소",
  },
  MOOD: {
    ...InfoBase,
    id: "barMood",
    placeholder: "상호명을 입력해주세요(띄어쓰기 없이)",
  },
  COVER_CHARGE: {
    ...InfoBase,
    id: "coverCharge",
    placeholder: "기존 금액",
  },
  DISCOUNT: {
    ...InfoBase,
    id: "discount",
    placeholder: "쟈닛 고객의 할인된 커버차지 금액",
  },
};
