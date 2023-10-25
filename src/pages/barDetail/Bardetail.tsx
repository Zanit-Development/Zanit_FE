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
      setData(await getBarInfo(searchParams.get("barUid")!));
      setIsLoading(false);
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
    if (typeof user === "string") {
      // 비회원
      navigate("/signIn"); // 로그인 페이지로 이동
    } else if (user.subscribe || user.couponUsed) {
      // 회원이지만 구독하지 않았거나 쿠폰을 사용하지 않음
      navigate("/myCoupon"); // 내 쿠폰함 페이지로 이동
    } else {
      // 회원이며 구독하고 쿠폰이 남아 있음
      navigate("/useCoupon", { state: data.barName }); // 쿠폰 사용 페이지로 이동
    }
  };

  // 테스트용
  // const handleClick = () => {
  //   navigate("/useCoupon", { state: data.barName });
  // };

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
