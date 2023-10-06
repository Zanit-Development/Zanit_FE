import React from "react";
import { styled } from "styled-components";

import { Address } from "../../components/common/text";
import Button from "../../components/common/button/Button";
import { Alert } from "../../components/common/alert/Alert";

import { PopupProps } from "../../libs/interface/interfaceUseCoupon";
import { ButtonProps } from "../../libs/interface/interfaceCommon";

import { Modal } from "../../components/modal/Modal";
import { postUseCoupon } from "../../libs/apis/useCoupon";

const buttonProps: ButtonProps = {
  typevariants: "fill",
  sizevariants: "small",
  value: "ZAN 쿠폰 승인하기",
  disabled: false,
  onClick: () => {
    postUseCoupon();
  },
};

export const Popup = ({ ...props }: PopupProps) => {
  const { barPicture, barName, barLocation, cocktailName, cocktailPrice, coverCharge, onClose } = props;
  // 마운트 되면 데이터 요청
  return (
    <Modal border={false} onClose={onClose}>
      <ModalStyle>
        <h2>결제하기</h2>
        <PopupContent>
          <img src={barPicture} alt="바 메인이미지" />
          <h3>{barName}</h3>
          <PopupAddress>{barLocation}</PopupAddress>
          <Price name={cocktailName} price={cocktailPrice} />
          {coverCharge && (
            <>
              <Price name="커버차지" price={coverCharge} />
              <Line />
              <Price name="합계" price={cocktailPrice + coverCharge} />
            </>
          )}
        </PopupContent>
        <Button {...buttonProps} />
        <Alert content={`[승인하기] 버튼은 Bar 결제 담당자님께서\n직접 눌러주셔야 해요!`} />
      </ModalStyle>
    </Modal>
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
    object-fit: cover;
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
