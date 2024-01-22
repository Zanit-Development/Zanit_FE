import React, { lazy, Suspense, useEffect, useState } from "react";

import Button from "../common/button/Button";
import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { PopupProps, useCouponPropsType } from "../../libs/interface/interfaceUseCoupon";

const UseCouponPopup = lazy(() => import("./UseCouponPopup"));
const UseCouponResultPopup = lazy(() => import("./UseCouponResultPopup"));

interface couponButtonProps extends ButtonProps {
  onMouseOver?: (e: MouseEvent) => void;
  onTouchStart?: (e: TouchEvent) => void;
}

const ShowPopupButton = (props: useCouponPropsType) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showResult, setShowResult] = useState(0);

  const { barPicture, barName, barLocation, barUid, coverChargeOff, cocktailName, cocktailPrice, cocktailUid } = props;

  // 닫기 esc 필요?
  const onClose = () => {
    setShowPopup(false);
  };

  const handlePreLoad = () => {
    const img = new Image();
    img.src = barPicture;
  };

  const buttonProps: couponButtonProps = {
    typevariants: "fill",
    sizevariants: "small",
    value: "ZAN 쿠폰 사용하기",
    disabled: Object.keys(props).length === 0,
    onClick: () => {
      // 누르면 popup 마운트
      setShowPopup(true);
    },
    onMouseOver: handlePreLoad,
    onTouchStart: handlePreLoad,
  };

  useEffect(() => {
    import("./UseCouponPopup");
    import("./UseCouponResultPopup");
  }, []);

  const PopupOption: Omit<Omit<PopupProps, "onClose">, "setResult"> = {
    barPicture,
    barName,
    barLocation,
    barUid,
    cocktailName,
    cocktailPrice,
    cocktailUid,
    coverChargeOff,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Suspense fallback={null}>
        {showPopup && <UseCouponPopup onClose={onClose} setResult={setShowResult} {...PopupOption} />}
        {!!showResult && <UseCouponResultPopup showResult={showResult} />}
      </Suspense>
    </>
  );
};

export default ShowPopupButton;
