import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import { styled } from "styled-components";

import Layout from "../../layouts/Layout";

import Button from "../../components/common/button/Button";

import { ButtonProps } from "../../libs/interface/interfaceCommon";
import BarInfomation from "../../components/barDetail/BarInfomation";
import { getBarInfo } from "../../libs/apis/barDetail";
import { BarProps } from "../../libs/interface/interfaceBarDetail";

const Bardetail = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<BarProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setData(await getBarInfo(searchParams.get("barUid")!));
      setIsLoading(false);
    })();
  }, []);

  const btnOption: ButtonProps = {
    typevariants: "fill",
    sizevariants: "large",
    value: "ZAN 쿠폰 사용하기",
    disabled: false,
    onClick() {
      navigate("/myCoupon");
    },
  };

  return isLoading ? (
    <div>로딩중 </div>
  ) : (
    <Layout>
      <BarInfomation BarInfo={data!} />
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
