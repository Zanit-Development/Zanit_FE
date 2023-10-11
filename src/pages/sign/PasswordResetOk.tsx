import React from "react";
import Layout from "../../layouts/Layout";
import check from "../../assets/icon/icon_check_black.svg";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import Button from "../../components/common/button/Button";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

const PasswordResetOk = () => {
  const navigate = useNavigate();

  const goSignin = () => {
    navigate("/signIn");
  };

  return (
    <Layout>
      <ResetOkSection>
        <strong>
          비밀번호가
          <br />
          성공적으로 변경되었습니다!
        </strong>
        <Button {...BUTTON_OPTIONS.PASSWORD_FIND_GO_SIGNIN} onClick={goSignin} />
      </ResetOkSection>
    </Layout>
  );
};

export default PasswordResetOk;

const ResetOkSection = styled.section`
  padding: 0 20px 160px;
  background: url(${check}) no-repeat center 55px;
  strong {
    font-family: var(--font--Medium);
    font-size: 20px;
    text-align: center;
    display: block;
    margin-bottom: 90px;
    padding-top: 100px;
    line-height: 1.5;
  }
`;
