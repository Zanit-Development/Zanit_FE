import { MEMBERSHIP_TYPE_VARIANTS } from "./typeCommon";

export interface MembershipTypeProps {
  typevariants: MEMBERSHIP_TYPE_VARIANTS;
  id: string;
  membershipname: string;
  discountper: number;
  cost: number;
  round: string;
  checked?: boolean;
  defaultcheck?: boolean;
  setMembershipType?: Function;
}
