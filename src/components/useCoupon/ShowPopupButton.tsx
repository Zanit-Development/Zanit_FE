import React, { useState } from "react";

import Button from "../common/button/Button";
import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { Popup } from "./UseCouponPopup";

import bar1 from "../../assets/sample-img/bar1.png";
import { PopupProps } from "../../libs/interface/interfaceUseCoupon";

const ShowPopupButton = ({ bar, cock }: { bar: string; cock: string }) => {
  const [showPopup, setShowPopup] = useState(false);

  // 닫기 esc 필요?
  const onClose = () => {
    setShowPopup(false);
  };

  const buttonProps: ButtonProps = {
    typevariants: "fill",
    sizevariants: "small",
    value: "ZAN 쿠폰 사용하기",
    disabled: !(bar !== "" && cock !== ""),
    onClick: () => {
      // 누르면 popup 마운트
      setShowPopup(true);
    },
  };

  const PopupOption: PopupProps = {
    barimg: bar1,
    barname: "바 티센트",
    barlocation: "서울 강남구 선릉로162길 16 엘리자벳빌딩 1층",
    cocktailname: "깔루아 밀크",
    cocktailprice: 28000,
    // covercharge: 10000,
    onClose: onClose,
  };

  return (
    <>
      <Button {...buttonProps} />
      {showPopup && <Popup {...PopupOption} />}
    </>
  );
};

export default ShowPopupButton;
