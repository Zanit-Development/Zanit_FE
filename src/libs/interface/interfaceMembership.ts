import { MEMBERSHIP_TYPE_VARIANTS } from "./typeCommon";

export interface MembershipTypeProps {
  typevariants: MEMBERSHIP_TYPE_VARIANTS;
  id: string;
  name: string;
  discountper: number;
  cost: number;
  round: string;
}
