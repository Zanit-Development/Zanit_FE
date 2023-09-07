import React, { useEffect, useState, useMemo } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import ShowPopupButton from "../../components/useCoupon/ShowPopupButton";

import SelectBox from "../../components/common/select-box/SelectBox";

export interface SelectType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
  placeholder: string;
  nulltext: string;
  styletype?: "primary" | "secondary";
}

const UseCoupon = () => {
  const barList = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"];
  const [selectedBar, setSelectedBar] = useState("");
  const CocktailList: { [prop: string]: string[] } = {
    bar1: ["cock1", "cock2", "cock3", "cock4", "cock5"],
    bar2: ["1", "2", "3", "4", "5"],
    bar3: ["a", "b", "c", "d", "e"],
    bar4: ["a1", "a2", "a3", "a4", "a5"],
    bar5: ["q1", "q2", "q3", "q4", "q5"],
    bar6: ["w1", "w2", "w3", "w4", "w5"],
    bar7: ["e1", "e2", "e3", "e4", "e5"],
    bar8: ["r1", "r2", "r3", "r4", "r5"],
  };
  const [selectedCocktail, setSelectedCocktail] = useState("");

  useEffect(() => {
    setSelectedCocktail("");
  }, [selectedBar]);

  const BarOptions: SelectType = {
    selected: selectedBar,
    setSelected: setSelectedBar,
    data: barList,
    placeholder: "바 이름을 검색해 보세요",
    nulltext: "바 선택하기",
  };

  const CocktailOptions: SelectType = {
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
  padding: 10px 20px 35px;

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
