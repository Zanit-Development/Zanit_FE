import React from "react";
import AutoPaymentCoupon from "./AutoPaymentCoupon";
import ManualPaymentCoupon from "./ManualPaymentCoupon";

const HasCoupon = () => {
  const auto = true;

  return <>{auto ? <AutoPaymentCoupon /> : <ManualPaymentCoupon />}</>;
};

export default HasCoupon;
