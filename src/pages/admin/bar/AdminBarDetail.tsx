import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import BarInfomation from "../../../components/barDetail/BarInfomation";
import AdminLayout from "../../../layouts/adminLayout/AdminLayout";
import Button from "../../../components/common/button/Button";

import { ButtonProps } from "../../../libs/interface/interfaceCommon";
import { BarInfo } from "../../../libs/dummy/Bardetaildummy";
import { getAdminBarInfo } from "./getAdminBar";
import { BarProps } from "../../../libs/interface/interfaceBarDetail";
import { getLoginCookie } from "../../../libs/utils/loginCookie";

const AdminBardetail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [barData, setBarData] = useState<BarProps>(BarInfo);

  if (!getLoginCookie()) navigate("/admin/signIn");

  useEffect(() => {
    (async () => {
      const data = await getAdminBarInfo();
      setBarData(data);
      setIsLoading(false);
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
      {isLoading ? <div>로딩</div> : <BarInfomation BarInfo={barData} />}
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
  cursor: pointer;
`;

export default AdminBardetail;
