import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import Layout from "../../layouts/Layout";

import Button from "../../components/common/button/Button";

import { ButtonProps } from "../../libs/interface/interfaceCommon";
import BarInfomation from "../../components/bardetail/BarInfomation";

const Bardetail = () => {
  const navigate = useNavigate();

  const btnOption: ButtonProps = {
    typevariants: "fill",
    sizevariants: "large",
    value: "ZAN 쿠폰 사용하기",
    disabled: false,
    onClick() {
      navigate("/myCoupon");
    },
  };

  return (
    <Layout>
      <BarInfomation />
      <ButtonContainer>
        <Button {...btnOption} />
      </ButtonContainer>
    </Layout>
  );
};

const ButtonContainer = styled.section`
  margin: 32px 0 42px;
  padding: 0 20px;
`;

export default Bardetail;
