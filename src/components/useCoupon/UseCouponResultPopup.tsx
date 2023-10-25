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

  const STRONG_MESSAGE = showResult === passNumber ? "쿠폰 사용 완료" : null;
  const MESSAGE =
    showResult === passNumber ? null : (
      <>
        쿠폰이 유효한지 확인해주세요
        <br />
      </>
    );

  return (
    <Modal border={true} onClose={handleClose}>
      <Container>
        <img src={showResult === passNumber ? icon : sad} alt="" />

        <strong>{STRONG_MESSAGE}</strong>
        <p>
          {MESSAGE}
          팝업이 닫히면 내 쿠폰함으로 이동합니다
        </p>
        <Button {...BUTTON_OPTIONS[`USE_COUPON_RESULT${passNumber}`]} onClick={handleClose} />
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  padding: 50px 0;
  text-align: center;
  & > div {
    padding: 20px 0 10px;
  }
  img {
    margin: 20px 0 10px;
    width: 80px;
    height: 80px;
  }
  strong {
    font-size: 24px;
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
    width: 45%;
  }
`;
