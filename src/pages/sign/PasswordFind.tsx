import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { styled } from "styled-components";
import Input from "../../components/common/input/Input";
import { BUTTON_OPTIONS, SIGNIN_OPTIONS } from "../../libs/constants/options/options";
import Button from "../../components/common/button/Button";
import { PopupPasswordFind } from "../../components/modal/UseSignPage/PopupPasswordFind";

const PasswordFind = () => {
  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "userphone") {
      setPhoneNumValue(value);
    }
  };

  const handlePasswordFind = () => {
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <Layout>
      <PasswordFindSection>
        <h2>비밀번호 찾기</h2>
        <p>
          가입한 전화번호를 입력해주세요
          <br />
          비밀번호 재설정을 위한 링크를 카카오톡으로 보내드릴게요
        </p>
        <Input {...SIGNIN_OPTIONS.PHONE} onChange={handleInputChange} value={phoneNumValue} />
        <Button {...BUTTON_OPTIONS.OK} onClick={handlePasswordFind} />
      </PasswordFindSection>
      {isModal && <PopupPasswordFind closeModal={handleClose} />}
    </Layout>
  );
};

export default PasswordFind;

const PasswordFindSection = styled.section`
  padding: 10px 20px 200px 20px;

  h2 {
    font-size: 20px;
    font-family: var(--font--semibold);
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }

  input {
    border: 1px solid #eee;
    margin: 25px 0 80px;
  }
`;
