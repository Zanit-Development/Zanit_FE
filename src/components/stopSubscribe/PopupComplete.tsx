import React from "react";
import { Modal } from "../modal/Modal";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PopupComplete = ({ ...props }) => {
  const { closeModal } = props;
  return (
    <Modal border={true} onClose={closeModal}>
      <CompleteArticle>
        <strong>See You again &#58;&#41;</strong>
        <p>
          {"X 멤버십"} 구독 해지신청이 정상적으로 완료되었습니다.
          <br />
          그 동안 쟈닛을 이용해주셔서 진심으로 감사드립니다.
          <br />
          칵테일 한 잔이 그립다면 언제든 돌아오세요!
        </p>
        <Link to="/">닫기</Link>
      </CompleteArticle>
    </Modal>
  );
};

const CompleteArticle = styled.article`
  padding: 49px 15px 30px;
  text-align: center;

  strong {
    display: block;
    margin: 45px 0 20px;
    font-size: 22px;
    font-family: var(--font--Bold);
  }

  p {
    font-size: 12px;
    line-height: 22px;
  }

  a {
    display: inline-block;
    margin-top: 25px;
    padding: 16px 73px;
    color: var(--white-color);
    background-color: var(--main-color);
    border-radius: 30px;
    font-family: var(--font--semibold);
  }
`;
