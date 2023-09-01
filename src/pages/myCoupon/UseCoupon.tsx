import React, { useState } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import ShowPopupButton from "../../components/useCoupon/ShowPopupButton";

import ArrowIcon from "../../assets/icon/icon_arrow_down.svg";
import BarSelectBox from "./BarSelectBox";
import SelectBox from "./SelectBox";

const UseCoupon = () => {
  const barList = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"];
  const [selectedBar, setSelectedBar] = useState("");
  const CocktailList = ["cock1", "cock2", "cock3"];
  const [selectedCocktail, setSelectedCocktail] = useState("");
  return (
    <Layout>
      <MainContainer>
        <h2>쿠폰 사용하기</h2>
        <h3>어떤 바를 방문하셨나요?</h3>
        <BarSelectBox selected={selectedBar} setSelected={setSelectedBar} data={barList} />
        <h3>어떤 칵테일을 마셨나요?</h3>
        <SelectBox selected={selectedCocktail} setSelected={setSelectedCocktail} data={!selectedBar ? [] : CocktailList} />

        {/* 
        <form action="">
          <select name="" id="bars" onChange={(e) => setSelectedBar(e.target.value)}>
            <option value="" disabled selected hidden>
              바 이름을 검색해보세요
            </option>
            <option disabled>바 선택하기</option>
            {barList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select name="" id="cocktails" onChange={(e) => setSelectedCocktail(e.target.value)}>
            <option value="" disabled selected hidden>
              칵테일을 선택해 주세요
            </option>
            {selectedBar ? (
              <>
                <option value="" disabled>
                  바 선택하기
                </option>
                {CocktailList.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </>
            ) : (
              <option disabled>방문하신 Bar를 선택해주세요</option>
            )}
          </select>
        </form> */}
        <ShowPopupButton />
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  margin: 30px 20px 239px;

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
    margin-top: calc(59px);
  }
`;

export default UseCoupon;
