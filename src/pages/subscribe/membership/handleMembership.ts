import { INPUT_EVENT } from "../../../libs/interface/typeEvent";

export const handleMembershipType = (e: INPUT_EVENT, setMembershipType: Function) => {
  const id = e.target.id;
  console.log(id);

  if (id === "membership1") {
    setMembershipType("TYPE1");
  } else if (id === "membership2") {
    setMembershipType("TYPE2");
  } else if (id === "membership3") {
    setMembershipType("TYPE3");
  }
};
