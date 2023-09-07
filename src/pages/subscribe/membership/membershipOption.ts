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
    name: "X 멤버십",
    discountper: 25,
    cost: 29900,
    round: "",
  },
  TYPE2: {
    typevariants: "simple",
    id: "membership2",
    name: "Y 멤버십",
    discountper: 17,
    cost: 99900,
    round: "3",
  },
  TYPE3: {
    typevariants: "simple",
    id: "membership3",
    name: "Z 멤버십",
    discountper: 0,
    cost: 39900,
    round: "1",
  },
};
