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
import { userInfoAPI } from "../../libs/apis/user";
import { user } from "../../libs/interface/interfaceAPI";

const Bardetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<BarProps>({} as BarProps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setData(await getBarInfo(searchParams.get("barUid")!));
        setIsLoading(false);
      } catch (error) {
        navigate("/404");
      }
    })();
  }, [searchParams]);

  const btnOption: ButtonProps = {
    typevariants: "fill",
    sizevariants: "large",
    value: "ZAN 쿠폰 사용하기",
    disabled: false,
    onClick() {
      handleClick();
    },
  };
  /**
   * 비회원 -> go to page [로그인]
  회원_구독x -> go to page [내 쿠폰함_구독x]
  회원_구독o_쿠폰 없음 -> go to page [내쿠폰함]
  회원_구독o_쿠폰 남음 -> go to page [쿠폰 사용하기]
   */
  const handleClick = async () => {
    const user = (await userInfoAPI()) as user | string;
    console.log(user);
    if (typeof user === "string") {
      navigate("/signin"); // 비회원 로그인 페이지로 이동
    } else if (user.subscribe) {
      user.couponUsed ? navigate("/mycoupon") : navigate("/usecoupon", { state: data.barName });
    } else {
      navigate("/mycoupon"); // 내 쿠폰함 페이지로 이동
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <BarInfomation BarInfo={data} />
          <ButtonContainer>
            <Button {...btnOption} />
          </ButtonContainer>
        </>
      )}
    </Layout>
  );
};

const ButtonContainer = styled.section`
  margin: 32px 0 42px;
  padding: 0 20px;
`;

export default Bardetail;
