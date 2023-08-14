import React from "react";
import { ModalProps } from "../../libs/interface/interfaceCommon";
import { styled } from "styled-components";
import closeButton from "../../assets/icon/icon_close.svg";
// import Button from "../common/button/Button";

export const Modal = ({ typeVariants, title, content }: ModalProps) => {
  return (
    <ModalCover>
      <ModalContainer>
        <ClosedButton>
          <img src={closeButton} alt="닫기" />
        </ClosedButton>
        <hr />
        <h2>{title}</h2>
        <p>{content}</p>
        <ButtonContainer>
          {/* {typeVariants === "single"?
            <Button />:(<Button /> <Button />)
          } */}
        </ButtonContainer>
      </ModalContainer>
    </ModalCover>
  );
};

const ModalCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const ModalContainer = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350px;
  background-color: white;
  border-radius: 8px;
  transform: translate(-50%, -50%);

  & > hr {
    margin-top: 35px;
    background-color: #e2e2e2;
  }

  & h2 {
    margin-bottom: 10px;
    padding: 20px 30px 0;
    font-family: var(--font--Medium);
    font-size: 1.4rem;
  }

  & p {
    padding: 0 30px 30px;
    white-space: pre-line;
  }
`;

const ButtonContainer = styled.section`
  & button {
    width: calc(100% - 60px);
    margin-left: 30px;
    margin-bottom: 30px;
  }
`;

const ClosedButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  text-align: center;
  cursor: pointer;
`;
