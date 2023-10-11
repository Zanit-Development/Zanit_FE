import { ButtonProps } from "../../../libs/interface/interfaceCommon";
import { MembershipTypeProps } from "../../../libs/interface/interfaceMembership";

export const membershipOption: ButtonProps = {
  typevariants: "fill",
  sizevariants: "large",
  value: "",
  disabled: false,
  onClick: () => {},
};

export const MEMBERSHIP: {
  TYPE1: MembershipTypeProps;
  TYPE2: MembershipTypeProps;
  TYPE3: MembershipTypeProps;
} = {
  TYPE1: {
    typevariants: "card",
    id: "membership1",
    membershipname: "X 멤버십",
    discountper: 25,
    cost: 29900,
    round: "",
    defaultcheck: true,
  },
  TYPE2: {
    typevariants: "simple",
    id: "membership2",
    membershipname: "Y 멤버십",
    discountper: 17,
    cost: 99900,
    disccost: "(회차 별 33,000원에 이용)",
    round: "3",
  },
  TYPE3: {
    typevariants: "simple",
    id: "membership3",
    membershipname: "Z 멤버십",
    discountper: 0,
    cost: 39900,
    round: "1",
  },
};
