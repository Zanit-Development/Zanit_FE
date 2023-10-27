import React from "react";
import { styled } from "styled-components";
import { Modal } from "../Modal";
import Button from "../../common/button/Button";
import { BUTTON_OPTIONS } from "../../../libs/constants/options/options";
import { useNavigate } from "react-router";

export const PopupSignUpSuccess = ({ name }: { name: string }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/signIn");
  };

  const gotoMain = () => {
    navigate("/");
  };

  const gotoSubscribe = () => {
    navigate("/subscribe");
  };

  return (
    <Modal border={true} onClose={closeModal}>
      <WelcomeArticle>
        <strong>{name}님 환영합니다 &#58;&#41;</strong>
        <p>
          오늘부터 쟈닛의 멤버가 되셨어요!
          <br />
          멤버십 구독을 통해
          <br />
          새로운 칵테일 경험을 시작해보세요
        </p>
        <ButtonDiv>
          <Button {...BUTTON_OPTIONS.WELCOME_SEARCH} onClick={gotoMain} />
          <Button {...BUTTON_OPTIONS.WELCOME_SUBSCRIBE} onClick={gotoSubscribe} />
        </ButtonDiv>
      </WelcomeArticle>
    </Modal>
  );
};

const WelcomeArticle = styled.article`
  padding: 49px 35px 25px;

  strong {
    display: block;
    margin: 30px 0 12px;
    font-size: 22px;
    font-family: var(--font--semibold);
  }
  p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 8px;
`;
