import React, { useState } from "react";

import Button from "../common/button/Button";
import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { Popup } from "./UseCouponPopup";
import { PopupProps } from "../../libs/interface/interfaceUseCoupon";

const ShowPopupButton = ({ option }: any) => {
  const [showPopup, setShowPopup] = useState(false);

  const { barPicture, barName, barLocation, coverCharge, cocktailName, cocktailPrice } = option;

  // 닫기 esc 필요?
  const onClose = () => {
    setShowPopup(false);
  };

  const buttonProps: ButtonProps = {
    typevariants: "fill",
    sizevariants: "small",
    value: "ZAN 쿠폰 사용하기",
    disabled: Object.keys(option).length === 0,
    onClick: () => {
      // 누르면 popup 마운트
      setShowPopup(true);
    },
  };

  const PopupOption: Omit<PopupProps, "onClose"> = {
    barPicture: barPicture,
    barName: barName,
    barLocation: barLocation,
    cocktailName: cocktailName,
    cocktailPrice: cocktailPrice,
    coverCharge: parseInt(coverCharge),
  };

  return (
    <>
      <Button {...buttonProps} />
      {showPopup && <Popup onClose={onClose} {...PopupOption} />}
    </>
  );
};

export default ShowPopupButton;
