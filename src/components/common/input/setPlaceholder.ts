import { PLACEHOLDER_SIGN } from "../../../libs/constants/values/placeholder";

export const setPlaceholder = (type: string): string => {
  let placeholder = "";

  if (type === "name") {
    placeholder = PLACEHOLDER_SIGN.UP.NAME;
  } else if (type === "phone") {
    placeholder = PLACEHOLDER_SIGN.UP.PHONE;
  } else if (type === "password") {
    placeholder = PLACEHOLDER_SIGN.UP.PASSWORD;
  } else if (type === "password2") {
    placeholder = PLACEHOLDER_SIGN.UP.PASSWORD2;
  }

  return placeholder;
};
