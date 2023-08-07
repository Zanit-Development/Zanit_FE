import { PLACEHOLDER_SIGN } from "../../libs/constants/values/placeholder";
import { BUTTON_VALUE } from "../../libs/constants/values/outputValues";
import { ButtonProps, InputProps } from "../../libs/interface/interfaceCommon";

const inputOptionsBase: InputProps = {
  typeVariants: "primary",
  sizeVariants: "large",
  type: "text",
  value: "",
  placeholder: "",
  onChange: () => {},
};

const buttonOptionsBase: ButtonProps = {
  typeVariants: "primary",
  sizeVariants: "large",
  value: "",
  disabled: false,
  onClick: () => {},
};

export const SIGNIN_OPTIONS = {
  EMAIL: {
    ...inputOptionsBase,
    id: "email",
    type: "email",
    placeholder: PLACEHOLDER_SIGN.IN.EMAIL,
  },

  PASSWORD: {
    ...inputOptionsBase,
    id: "password",
    type: "password",
    placeholder: PLACEHOLDER_SIGN.IN.PASSWORD,
  },
};

export const SIGNUP_OPTIONS = {
  NAME: {
    ...inputOptionsBase,
    placeholder: PLACEHOLDER_SIGN.UP.NAME,
    id: "name",
  },

  PHONE: {
    ...inputOptionsBase,
    type: "number",
    placeholder: PLACEHOLDER_SIGN.UP.PHONE,
    id: "phoneNum",
  },

  EMAIL: {
    ...inputOptionsBase,
    type: "email",
    placeholder: PLACEHOLDER_SIGN.UP.EMAIL,
    id: "email",
  },

  PASSWORD: {
    ...inputOptionsBase,
    type: "password",
    placeholder: PLACEHOLDER_SIGN.UP.PASSWORD,
    id: "password",
  },

  PASSWORD_CHECK: {
    ...inputOptionsBase,
    type: "password",
    placeholder: PLACEHOLDER_SIGN.UP.PASSWORD2,
    id: "passwordCheck",
  },
};

export const BUTTON_OPTIONS = {
  SIGNIN: {
    ...buttonOptionsBase,
    value: BUTTON_VALUE.SIGN.IN,
  },

  SIGNUP: {
    ...buttonOptionsBase,
    value: BUTTON_VALUE.SIGN.UP,
  },
};
