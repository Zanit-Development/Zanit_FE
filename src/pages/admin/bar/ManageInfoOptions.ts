import { ButtonProps, InputProps, SelectProps } from "../../../libs/interface/interfaceCommon";
import { INPUT_EVENT } from "../../../libs/interface/typeEvent";

const inputBase: InputProps = {
  typevariants: "basic",
  sizevariants: "small",
  type: "text",
  placeholder: "",
  onChange: function (e: INPUT_EVENT): void {
    throw new Error("Function not implemented.");
  },
};

export const BAR_INFO = {
  NAME: {
    ...inputBase,
    id: "barName",
    placeholder: "상호명을 입력해주세요(띄어쓰기 없이)",
  },
  LOCATION: {
    ...inputBase,
    id: "barLocation",
    placeholder: "전체 주소",
  },
  MOOD: {
    ...inputBase,
    id: "barMood",
    placeholder: "상호명을 입력해주세요(띄어쓰기 없이)",
  },
  COVER_CHARGE: {
    ...inputBase,
    id: "coverCharge",
    placeholder: "기존 금액",
  },
  DISCOUNT: {
    ...inputBase,
    id: "discount",
    placeholder: "쟈닛 고객의 할인된 커버차지 금액",
  },
};

const selectBase: SelectProps = {
  typevariants: "stroke",
  sizevariants: "small",
  id: "",
  options: [],
  values: [],
  onChange: () => {},
};

export const SELECT = {
  LOCATION: {
    ...selectBase,
    id: "selectLocation",
    options: [""],
    values: [],
  },
  MOOD: {
    ...selectBase,
    id: "selectMood",
    options: ["가", "나", "다"],
    values: [],
  },
  COVER_CHARGE: {
    ...selectBase,
    id: "selectCoverCharge",
    options: ["가", "나", "다"],
    values: [],
  },
  DISCOUNT: {
    ...selectBase,
    id: "selectDiscount",
    option: ["가", "나", "다"],
    values: [],
  },
};

export const ButtonOptions: ButtonProps = {
  typevariants: "fill",
  sizevariants: "small",
  value: "저장하기",
  disabled: false,
  onClick: () => {},
};
