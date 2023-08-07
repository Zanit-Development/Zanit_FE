import { PLACEHOLDER_SIGN } from "../values/placeholder";
import { BUTTON_VALUE } from "../values/outputValues";
import { ButtonProps, InputProps } from "../../interface/interfaceCommon";

const INPUT_OPTIONS_BASE: InputProps = {
  typeVariants: "primary",
  sizeVariants: "large",
  type: "text",
  value: "",
  placeholder: "",
  onChange: () => {},
};

const BUTTON_OPTIONS_BASE: ButtonProps = {
  typeVariants: "primary",
  sizeVariants: "large",
  value: "",
  disabled: false,
  onClick: () => {},
};

export const SIGNIN_OPTIONS = {
  EMAIL: {
    ...INPUT_OPTIONS_BASE,
    id: "email",
    type: "email",
    placeholder: PLACEHOLDER_SIGN.IN.EMAIL,
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

  EMAIL: {
    ...INPUT_OPTIONS_BASE,
    type: "email",
    placeholder: PLACEHOLDER_SIGN.UP.EMAIL,
    id: "email",
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

export const BUTTON_OPTIONS = {
  SIGNIN: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.SIGN.IN,
  },

  SIGNUP: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.SIGN.UP,
  },

  COUPON: {
    ...BUTTON_OPTIONS_BASE,
    value: BUTTON_VALUE.COUPON.USE,
  },
};
