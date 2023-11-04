import React, { useState } from "react";
import { styled } from "styled-components";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import Button from "../common/button/Button";
import { useNavigate } from "react-router";
import { PopupPromotion } from "./PopupPromotion";
import { PopupComplete } from "./PopupComplete";
import { UserInfoType } from "../../libs/interface/interfaceUserInfo";
import { dateFormat } from "../../libs/utils/dateFormat";

export const StopMembership = ({ userInfo }: { userInfo: UserInfoType }) => {
  const [showPopupComplete, setShowPopupComplete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const goUseHistory = () => {
    navigate("/use-history");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StopMembershipContent>
      <p>
        <strong>{userInfo.subscribeName}</strong> 구독을 해지 신청하시겠습니까?
      </p>
      <ul>
        <li>&#91;{dateFormat(userInfo.subsEndDate)}&#93; 사용 후 서비스가 자동 해지됩니다.</li>
        <li>
          사용중인 멤버십 서비스&#40;ZAN 쿠폰 사용&#41;는
          <br /> &#91;{dateFormat(userInfo.subsEndDate)}&#93;까지 이용 가능합니다.
        </li>
        <li>
          결제 후 7일 내 서비스 이용 이력이 없는 경우 결제 취소 가능하며, <a href="http://pf.kakao.com/_JxoExhG">여기</a>를 통해 문의하시면 됩니다.
        </li>
      </ul>
      <ButtonDiv>
        <Button {...BUTTON_OPTIONS.MEMBERSHIP_STOP_PROMOTION_CANCLE} onClick={openModal} />
        <Button {...BUTTON_OPTIONS.MEMBERSHIP_STOP_CANCLE} onClick={goUseHistory} />
      </ButtonDiv>
      {isModalOpen && <PopupPromotion closeModal={closeModal} setShowPopupComplete={setShowPopupComplete} setIsModalOpen={setIsModalOpen} userInfo={userInfo} />}
      {showPopupComplete && (
        <PopupComplete
          subscribeName={userInfo.subscribeName}
          closeModal={() => {
            navigate("/");
          }}
        />
      )}
    </StopMembershipContent>
  );
};

const StopMembershipContent = styled.section`
  margin: 45px 20px;

  p {
    text-align: center;
    font-size: 16px;
    strong {
      font-family: var(--font--Bold);
    }
  }

  ul {
    margin: 35px 25px 45px;
    font-size: 14px;
    padding-inline-start: 15px;

    li {
      list-style: disc;
      line-height: 1.3;
      margin-bottom: 15px;
      white-space: pre-line;

      &:last-child {
        font-size: 12px;
        color: var(--gray500-color);
      }
      a {
        color: var(--gray500-color);
        font-family: var(--font--semibold);
        text-decoration: underline;
      }
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
