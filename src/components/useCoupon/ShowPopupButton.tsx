import React, { useState } from "react";

import Button from "../common/button/Button";
import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { UseCouponPopup } from "./UseCouponPopup";
import { PopupProps } from "../../libs/interface/interfaceUseCoupon";
import { UseCouponResultPopup } from "./UseCouponResultPopup";

const ShowPopupButton = (props: any) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showResult, setShowResult] = useState(0);

  const { barPicture, barName, barLocation, barUid, coverCharge, cocktailName, cocktailPrice, cocktailUid } = props;

  // 닫기 esc 필요?
  const onClose = () => {
    setShowPopup(false);
  };

  const buttonProps: ButtonProps = {
    typevariants: "fill",
    sizevariants: "small",
    value: "ZAN 쿠폰 사용하기",
    disabled: Object.keys(props).length === 0,
    onClick: () => {
      // 누르면 popup 마운트
      setShowPopup(true);
    },
  };

  const PopupOption: Omit<Omit<PopupProps, "onClose">, "setResult"> = {
    barPicture,
    barName,
    barLocation,
    barUid,
    cocktailName,
    cocktailPrice,
    cocktailUid,
    coverCharge: parseInt(coverCharge),
  };

  return (
    <>
      <Button {...buttonProps} />
      {showPopup && <UseCouponPopup onClose={onClose} setResult={setShowResult} {...PopupOption} />}
      {showResult && <UseCouponResultPopup showResult={showResult} />}
    </>
  );
};

export default ShowPopupButton;
