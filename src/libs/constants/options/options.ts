import { PLACEHOLDER_SIGN } from "../values/placeholder";
import { BUTTON_VALUE } from "../values/outputValues";
import { ButtonProps, InputProps } from "../../interface/interfaceCommon";

const INPUT_OPTIONS_BASE: InputProps = {
  typevariants: "basic",
  sizevariants: "small",
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

  WELCOME_SEARCH: {
    ...BUTTON_OPTIONS_BASE,
    typevariants: "stroke",
    sizevariants: "small",
    value: BUTTON_VALUE.WELCOME.SEARCH,
  },

  WELCOME_SUBSCRIBE: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.WELCOME.SUBSCRIBE,
  },

  USE_COUPON_HISTORY: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.BACK_MYCOUPON,
  },

  MEMBERSHIP_STOP_PROMOTION_CANCLE: {
    ...BUTTON_OPTIONS_BASE,
    typevariants: "stroke",
    sizevariants: "small",
    value: BUTTON_VALUE.MEMBERSHIP_STOP.PROMOTION_CANCLE,
  },

  MEMBERSHIP_STOP_CANCLE: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.MEMBERSHIP_STOP.CANCLE,
  },

  PROMOTION: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.MEMBERSHIP_STOP.PROMOTION,
  },

  PROMOTION_CANCLE: {
    ...BUTTON_OPTIONS_BASE,
    typevariants: "stroke",
    sizevariants: "small",
    value: BUTTON_VALUE.MEMBERSHIP_STOP.PROMOTION_CANCLE,
  },

  PASSWORD_FIND_GO_SIGNUP: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.PASSWORD_FIND.GO_SIGNUP,
  },

  PASSWORD_FIND_GO_SIGNIN: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.PASSWORD_FIND.GO_SIGNIN,
  },

  PASSWORD_FIND_CLOSE: {
    ...BUTTON_OPTIONS_BASE,
    sizevariants: "small",
    value: BUTTON_VALUE.PASSWORD_FIND.CLOSE_MODAL,
  },
};

export const SIGNIN_OPTIONS = {
  PHONE: {
    ...INPUT_OPTIONS_BASE,
    type: "tel",
    placeholder: PLACEHOLDER_SIGN.IN.PHONE,
    id: "userphone",
    name: "userphone",
  },

  PASSWORD: {
    ...INPUT_OPTIONS_BASE,
    id: "userpassword",
    type: "password",
    placeholder: PLACEHOLDER_SIGN.IN.PASSWORD,
    name: "userpassword",
  },

  ID: {
    ...INPUT_OPTIONS_BASE,
    id: "userid",
    type: "string",
    placeholder: PLACEHOLDER_SIGN.IN.ID,
    name: "userid",
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
    type: "tel",
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
