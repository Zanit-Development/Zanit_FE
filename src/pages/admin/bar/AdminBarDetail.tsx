import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import BarInfomation from "../../../components/barDetail/BarInfomation";
import AdminLayout from "../../../layouts/adminLayout/AdminLayout";
import Button from "../../../components/common/button/Button";

import { ButtonProps } from "../../../libs/interface/interfaceCommon";
import { BarInfo } from "../../../libs/utils/Bardetaildummy";
import { getBarInfo } from "./getAdminBar";

const AdminBardetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getBarInfo();
    })();
  }, []);

  const btnOption: ButtonProps = {
    typevariants: "fill",
    sizevariants: "large",
    value: "수정하기",
    disabled: false,
    onClick() {
      navigate("/admin/management");
    },
  };

  return (
    <AdminLayout>
      <BarInfomation BarInfo={BarInfo} />
      <ButtonContainer>
        <Button {...btnOption} />
        <DeleteButton>전체 정보 삭제하기</DeleteButton>
      </ButtonContainer>
    </AdminLayout>
  );
};

const ButtonContainer = styled.section`
  margin: 35px 0 39px;
  padding: 0 20px;

  text-align: center;
`;

const DeleteColor = `var(--gray500-color)`;
const DeleteButton = styled.button`
  font-size: 12px;
  font-family: var(--font--Medium);
  color: ${DeleteColor};
  margin-top: 11px;
  border-bottom: 0.7px solid ${DeleteColor};
`;

export default AdminBardetail;
