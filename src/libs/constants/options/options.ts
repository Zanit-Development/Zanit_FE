import { PLACEHOLDER_SIGN } from "../values/placeholder";
import { BUTTON_VALUE } from "../values/outputValues";
import { ButtonProps, InputProps } from "../../interface/interfaceCommon";

const INPUT_OPTIONS_BASE: InputProps = {
  typevariants: "primary",
  sizevariants: "large",
  type: "text",
  value: "",
  placeholder: "",
  onChange: () => {},
};

const BUTTON_OPTIONS_BASE: ButtonProps = {
  typevariants: "fill",
  sizevariants: "large",
  value: "",
  disabled: false,
  onClick: () => {},
};

export const BUTTON_OPTIONS: {
  [key: string]: ButtonProps;
} = {
  SIGNIN: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.SIGN.IN,
  },

  SIGNUP: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.SIGN.UP,
  },

  SUBSCRIBE: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.SUBSCRIBE,
  },

  SUBSCRIBE_NOW: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.SUBSCRIBE_NOW,
  },

  SUBSCRIBE_POPUP: {
    ...BUTTON_OPTIONS_BASE,
    typevariants: "stroke",
    value: BUTTON_VALUE.PAYMENT.CONFIRM,
  },

  DISCOUNT: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.PAYMENT.DISCOUNT(25),
  },

  HOW_TO_USE: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.SEARCH_BAR,
  },

  USE_COUPON: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.COUPON.USE,
  },

  EXTEND_COUPON: {
    ...BUTTON_OPTIONS_BASE,
    typevariants: "stroke",
    sizevariants: "small",
    value: BUTTON_VALUE.COUPON.EXTEND,
  },

  OK: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.OK,
  },

  PASSWORD_RESET: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.PASSWORD_RESET,
  },
};

export const SIGNIN_OPTIONS = {
  PHONE: {
    ...INPUT_OPTIONS_BASE,
    type: "number",
    placeholder: PLACEHOLDER_SIGN.IN.PHONE,
    id: "phoneNum",
  },

  PASSWORD: {
    ...INPUT_OPTIONS_BASE,
    id: "password",
    type: "password",
    placeholder: PLACEHOLDER_SIGN.IN.PASSWORD,
  },
};

export const SIGNUP_OPTIONS = {
  NAME: {
    ...INPUT_OPTIONS_BASE,
    placeholder: PLACEHOLDER_SIGN.UP.NAME,
    id: "name",
  },

  PHONE: {
    ...INPUT_OPTIONS_BASE,
    type: "number",
    placeholder: PLACEHOLDER_SIGN.UP.PHONE,
    id: "phoneNum",
  },

  PASSWORD: {
    ...INPUT_OPTIONS_BASE,
    type: "password",
    placeholder: PLACEHOLDER_SIGN.UP.PASSWORD,
    id: "password",
  },

  PASSWORD_CHECK: {
    ...INPUT_OPTIONS_BASE,
    type: "password",
    placeholder: PLACEHOLDER_SIGN.UP.PASSWORD2,
    id: "passwordCheck",
  },
};
