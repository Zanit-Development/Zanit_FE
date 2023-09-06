import React from "react";
import { Modal } from "../Modal";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { BUTTON_OPTIONS } from "../../../libs/constants/options/options";
import Button from "../../common/button/Button";

export const PopupPasswordFind = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();
  const gotoSignup = () => {
    navigate("/signUp");
  };

  return (
    <Modal border={true} onClose={closeModal}>
      <PasswordFindArticle>
        <strong>Oops &#33;</strong>
        <p>가입되지 않은 전화번호예요</p>
        <Button {...BUTTON_OPTIONS.PASSWORD_FIND_CLOSE} onClick={closeModal} />
        <Button {...BUTTON_OPTIONS.PASSWORD_FIND_GO_SIGNUP} onClick={gotoSignup} />
      </PasswordFindArticle>
    </Modal>
  );
};

const PasswordFindArticle = styled.article`
  padding: 49px 90px 50px;
  text-align: center;

  strong {
    display: block;
    margin-top: 40px;
    font-size: 22px;
    font-family: var(--font--Bold);
  }

  p {
    font-size: 14px;
    margin: 15px 0 36px;
  }

  & button:last-child {
    margin-top: 10px;
  }
`;
