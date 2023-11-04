import { ButtonProps, InputProps } from "../../../libs/interface/interfaceCommon";

const inputBase: InputProps = {
  typevariants: "basic",
  sizevariants: "small",
  type: "text",
  placeholder: "",
};

export const BAR_INFO = {
  NAME: {
    ...inputBase,
    name: "barName",
    placeholder: "상호명을 입력해주세요(띄어쓰기 없이)",
  },
  LOCATION_DETAIL: {
    ...inputBase,
    name: "barLocationDetail",
    placeholder: "전체 주소",
  },
  MOOD: {
    ...inputBase,
    name: "barMood",
    placeholder: "상호명을 입력해주세요(띄어쓰기 없이)",
  },
  COVER_CHARGE: {
    ...inputBase,
    name: "coverCharge",
    placeholder: "기존 금액",
  },
  DISCOUNT: {
    ...inputBase,
    name: "discount",
    placeholder: "쟈닛 고객의 할인된 커버차지 금액",
  },
};

export const ButtonOptions: ButtonProps = {
  typevariants: "fill",
  sizevariants: "small",
  value: "저장하기",
  disabled: false,
  onClick: () => {},
};
