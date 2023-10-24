import { INPUT_EVENT } from "../../../libs/interface/typeEvent";
import { MEMBERSHIP_TYPE } from "./Membership";

export const handleMembershipType = (e: INPUT_EVENT, membershipTypeRef: React.MutableRefObject<MEMBERSHIP_TYPE>) => {
  const id = e.target.id;

  if (id === "membership1") {
    membershipTypeRef.current = "TYPE1";
  } else if (id === "membership2") {
    membershipTypeRef.current = "TYPE2";
  } else if (id === "membership3") {
    membershipTypeRef.current = "TYPE3";
  }
};
