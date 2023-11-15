// Todo
// 바 정보 coverCharge 타입 다시 정리 (bardetail & useCoupon)

import React, { useState } from "react";
import { styled } from "styled-components";

import { Address } from "../../components/common/text";
import Button from "../../components/common/button/Button";
import { Alert } from "../../components/common/alert/Alert";

import { PopupProps } from "../../libs/interface/interfaceUseCoupon";
import { ButtonProps } from "../../libs/interface/interfaceCommon";

import { Modal } from "../../components/modal/Modal";
import { postUseCoupon } from "../../libs/apis/useCoupon";

export const UseCouponPopup = (props: PopupProps) => {
  const { barPicture, barName, barUid, barLocation, cocktailName, cocktailPrice, cocktailUid, coverChargeOff, onClose } = props;

  const [btnDisabled, setBtnDisabled] = useState(false);

  const buttonProps: ButtonProps = {
    typevariants: "fill",
    sizevariants: "small",
    value: "ZAN 쿠폰 승인하기",
    disabled: btnDisabled,
    onClick: () => {
      setBtnDisabled(true);
      // 요청 대기 시간 0.5초로 일단 둬봄
      setTimeout(async () => {
        try {
          const data = { usedBar: barUid, usedCocktail: cocktailUid };
          const response: number | undefined = await postUseCoupon(data);
          if (response === undefined) throw new Error("undefined");
          response === 1 ? props.setResult(1) : props.setResult(2);
        } catch (error: any) {
          // 타입 뭐로 해야댐?
          console.log(error.response.status);
          console.log("오류");
          props.setResult(2);
        } finally {
          onClose();
        }
      }, 500);
    },
  };

  // 마운트 되면 데이터 요청
  return (
    <>
      <Modal border={false} onClose={onClose}>
        <ModalStyle>
          <h2>결제하기</h2>
          <PopupContent>
            <img src={barPicture} alt="바 메인이미지" />
            <h3>{barName}</h3>
            <PopupAddress>{barLocation}</PopupAddress>
            <Price name={cocktailName} price={cocktailPrice} />
            {coverChargeOff && (
              <>
                <Price name="커버차지" price={coverChargeOff} />
                <Line />
                <Price name="합계" price={cocktailPrice + coverChargeOff} />
              </>
            )}
          </PopupContent>
          <Button {...buttonProps} />
          <Alert content={`[승인하기] 버튼은 Bar 결제 담당자님께서\n직접 눌러주셔야 해요!`} />
        </ModalStyle>
      </Modal>
    </>
  );
};

const Price = ({ name, price }: { name: string; price: number }) => {
  return (
    <PriceParagraph>
      {name}
      <strong>{typeof price === "number" ? price.toLocaleString() : price}원</strong>
    </PriceParagraph>
  );
};

// dropshadow 추가 필요
const ModalStyle = styled.div`
  h2 {
    font-family: var(--font--Medium);
    font-size: 20px;
  }

  padding: 58px 25px 60px;
  article {
    margin-top: 22px;
  }
`;

const PopupContent = styled.div`
  padding: 14px 14px 20px 14px;
  margin: 22px 0 43px;
  border: 1px solid #eaeaea;

  img {
    width: 271px;
    height: 271px;
    object-fit: contain;
  }
  h3 {
    font-family: var(--font--Bold);
    font-size: 20px;
    margin: 17px 0 10px;
  }
`;

const PopupAddress = styled(Address)`
  margin-bottom: 22px;
`;

const PriceParagraph = styled.p`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: var(--font--Medium);
  font-size: 13px;

  strong {
    font-family: var(--font--Bold);
    font-size: 16px;
  }
`;

const Line = styled.div`
  border-top: 1px solid #eaeaea;
  margin: 10px 0;
`;
