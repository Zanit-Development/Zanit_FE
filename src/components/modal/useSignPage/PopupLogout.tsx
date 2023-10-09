import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import { BUTTON_OPTIONS } from "../../../libs/constants/options/options";
import Button from "../../common/button/Button";
import { removeLoginCookie } from "../../../libs/utils/loginCookie";
import { useNavigate } from "react-router";

interface LogoutProps {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  nav: string;
}

export const PopupLogout = ({ setIsModal, nav }: LogoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeLoginCookie({ path: "/" });
    setIsModal(false);
    navigate(nav);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <Modal border={true} onClose={handleClose}>
      <LogoutDiv>
        <strong>로그아웃 하시겠습니까?</strong>
        <LogoutBtn>
          <Button {...BUTTON_OPTIONS.LOGOUT_CANCEL} onClick={handleClose} />
          <Button {...BUTTON_OPTIONS.LOGOUT} onClick={handleLogout} />
        </LogoutBtn>
      </LogoutDiv>
    </Modal>
  );
};

const LogoutDiv = styled.div`
  padding: 50px 30px;
  text-align: center;
  strong {
    display: block;
    margin: 40px 0;
    font-size: 18px;
    font-family: var(--font--semibold);
  }
`;

const LogoutBtn = styled.div`
  display: flex;
  gap: 8px;
`;
