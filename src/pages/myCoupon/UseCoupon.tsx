import React, { useEffect, useState, useMemo } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import ShowPopupButton from "../../components/useCoupon/ShowPopupButton";

import SelectBox from "../../components/common/select-box/SelectBox";

const UseCoupon = () => {
  const barList = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"];
  const [selectedBar, setSelectedBar] = useState("");
  const CocktailList: { [prop: string]: string[] } = useMemo(
    () => ({
      bar1: ["cock1", "cock2", "cock3", "cock4", "cock5"],
      bar2: ["1", "2", "3", "4", "5"],
    }),
    []
  );
  const [selectedCocktail, setSelectedCocktail] = useState("");

  useEffect(() => {
    setSelectedCocktail("");
  }, [selectedBar]);

  const BarOptions = {
    bgcolor: "#F4F4F4",
    selected: selectedBar,
    setSelected: setSelectedBar,
    data: barList,
    placeholder: "바 이름을 검색해 보세요",
    nulltext: "바 선택하기",
  };

  const CocktailOptions = {
    bgcolor: "#F4F4F4",
    selected: selectedCocktail,
    setSelected: setSelectedCocktail,
    data: CocktailList[selectedBar] || [],
    placeholder: "칵테일을 선택해 주세요",
    nulltext: "칵테일 선택하기",
  };

  return (
    <Layout>
      <MainContainer>
        <h2>쿠폰 사용하기</h2>
        <h3>어떤 바를 방문하셨나요?</h3>
        <SelectBox {...BarOptions} />
        <h3>어떤 칵테일을 마셨나요?</h3>
        <SelectBox {...CocktailOptions} />
        <ShowPopupButton bar={selectedBar} cock={selectedCocktail} />
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  margin: 30px 20px 35px;

  h2 {
    font-family: var(--font--Medium);
    font-size: 20px;
    margin-bottom: 45px;
  }

  h3 {
    display: block;
    margin-bottom: 15px;
    font-family: var(--font--Medium);
    font-size: 14px;
    margin-top: 20px;
  }

  button {
    margin-top: calc(25px + 202px);
  }
`;

export default UseCoupon;
