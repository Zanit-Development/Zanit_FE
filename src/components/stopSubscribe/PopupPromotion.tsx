import React from "react";
import { Modal } from "../modal/Modal";
import popup_promotion from "../../assets/popup_promotion.svg";
import icon_arrow_promotion from "../../assets/icon/icon_arrow_promotion.svg";
import { styled } from "styled-components";
import Button from "../common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { useNavigate } from "react-router";
import { priceFormat } from "../../libs/utils/priceFormat";
import { membershipPrice } from "../../libs/utils/membershipPrice";

export const PopupPromotion = ({ ...props }) => {
  const { closeModal, setShowPopupComplete, setIsModalOpen, userInfo } = props;

  const showPopupComplete = () => {
    setShowPopupComplete(true);
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const gotoCoupon = () => {
    navigate("/mycoupon");
  };

  return (
    <Modal border={false} onClose={closeModal}>
      <H3>프로모션</H3>
      <PromotionInfo>
        <p>지금 {userInfo.userName}님이 받고 있는 혜택을 확인해보세요 </p>
        <strong>
          현재 적용 중인
          <br />
          할인 혜택이 있어요!
        </strong>
        <CouponImgArticle>
          <div className="topContent">
            <span>{userInfo.subscribeName}</span>
            <p>1개월 {membershipPrice(userInfo.subscribeName).discount}% 할인</p>
          </div>
          <div className="bottomContent">
            <p>
              정상가
              <br />
              {priceFormat(membershipPrice("Z 멤버십").price)}원
            </p>
            <img src={icon_arrow_promotion} alt="오른쪽으로 향한 화살표" />
            <p className="discount">
              할인가
              <br />
              <strong>{priceFormat(membershipPrice(userInfo.subscribeName).price)}원</strong>
            </p>
          </div>
        </CouponImgArticle>
        <p>돌아오는 결제일에 할인가로 적용됩니다.</p>
        <Button {...BUTTON_OPTIONS.PROMOTION} onClick={gotoCoupon} />
        <Button {...BUTTON_OPTIONS.PROMOTION_CANCLE} onClick={showPopupComplete} />
      </PromotionInfo>
    </Modal>
  );
};

const H3 = styled.h3`
  font-size: 20px;
  margin: 50px 0 20px;
  text-align: center;
  font-family: var(--font--Medium);
`;

const PromotionInfo = styled.section`
  padding: 45px 25px;
  background-color: #ffeae6;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;

  & > p {
    margin-bottom: 10px;
    color: #121212;
    &:last-of-type {
      font-size: 13px;
      color: var(--gray500-color);
      margin-bottom: 7px;
      line-height: 22px;
    }
  }

  strong {
    margin-top: 10px;
    font-family: var(--font--semibold);
    font-size: 20px;
    line-height: 1.3;
  }

  button {
    &:last-of-type {
      margin-top: 12px;
    }
  }
`;

const CouponImgArticle = styled.article`
  width: 100%;
  height: 236px;
  position: relative;
  margin: 20px 0 40px;
  background: url(${popup_promotion}) no-repeat center/contain;
  text-align: center;
  color: var(--main-color);
  font-family: var(--font--Medium);

  .topContent {
    position: absolute;
    left: 50%;
    top: 85px;
    transform: translateX(-50%);

    span {
      font-size: 10px;
    }

    p {
      margin-top: 5px;
      font-family: var(--font--semibold);
      font-size: 16px;
    }
  }

  .bottomContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    position: absolute;
    top: 160px;
    font-size: 12px;
    line-height: 1.5;

    .discount {
      color: #7025d8;
      strong {
        font-size: 20px;
        font-family: var(--font--Bold);
      }
    }
  }
`;
