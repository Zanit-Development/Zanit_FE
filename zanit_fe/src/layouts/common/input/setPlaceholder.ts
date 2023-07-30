import { INPUT } from "../../../../constants/messages/placeholder";

export const setPlaceholder = (type: string): string => {
  let message = "";

  if (type === "name") {
    message = INPUT.NAME;
  } else if (type === "phone") {
    message = INPUT.PHONE;
  } else if (type === "email") {
    message = INPUT.EMAIL;
  } else if (type === "password") {
    message = INPUT.PASSWORD;
  } else if (type === "password2") {
    message = INPUT.PASSWORD2;
  } else {
    return message;
  }

  return message;
};
