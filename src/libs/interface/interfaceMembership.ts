import { MEMBERSHIP_TYPE_VARIANTS } from "./typeCommon";
import { BUTTON_EVENT, INPUT_EVENT } from "./typeEvent";

export interface MembershipTypeProps {
  typevariants: MEMBERSHIP_TYPE_VARIANTS;
  id: string;
  membershipname: string;
  discountper: number;
  cost: number;
  round: string;
  checked?: boolean;
  defaultcheck?: boolean;
  onChange?: (e: INPUT_EVENT) => void;
}
