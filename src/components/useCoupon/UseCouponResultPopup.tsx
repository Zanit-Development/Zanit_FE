import { useNavigate } from "react-router";

import styled from "styled-components";
import { Modal } from "../modal/Modal";
import Button from "../common/button/Button";

import icon from "../../assets/icon/icon_check_black.svg";
import sad from "../../assets/icon/icon_sad_face.svg";

import { BUTTON_OPTIONS } from "../../libs/constants/options/options";

export const UseCouponResultPopup = ({ showResult }: { showResult: number }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/myCoupon");
  };

  // 334
  const passNumber = 1;

  const STRONG_MESSAGE = showResult === passNumber ? "쿠폰 사용 완료" : "쿠폰 사용 실패";

  return (
    <Modal border={true} onClose={handleClose}>
      <Container>
        <img src={showResult === passNumber ? icon : sad} alt="" />

        <strong>{STRONG_MESSAGE}</strong>
        <p className={`type${showResult}`}>팝업이 닫히면 내 쿠폰함으로 이동합니다.</p>
        <Button {...BUTTON_OPTIONS[`USE_COUPON_RESULT${showResult}`]} onClick={handleClose} />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  padding: 50px 0;
  text-align: center;
  padding-bottom: 40px;
  img {
    margin: 40px 0 10px;
    width: 60px;
    height: 60px;
  }
  strong {
    font-size: 20px;
    font-family: var(--font--Medium);
    display: block;
  }
  p {
    color: var(--gray500-color);

    font-family: var(--font--Medium);

    font-size: 12px;
    margin: 5px 0 20px;
    line-height: 20px;
  }
  button {
    display: block;
    margin: 0 auto;
    width: 45%;
    height: 45px;
    font-size: 14px;
  }
`;
