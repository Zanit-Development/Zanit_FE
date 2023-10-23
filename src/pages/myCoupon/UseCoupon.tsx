import React, { useEffect, useState, useMemo } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import ShowPopupButton from "../../components/useCoupon/ShowPopupButton";

import SelectBox from "../../components/common/selectBox/SelectBox";
import { getBarList } from "../../libs/apis/useCoupon";
import { bar } from "../../libs/interface/interfaceUseCoupon";
import { useLocation } from "react-router";

export interface FormSelectType {
  name: string;
  data: string[];
  placeholder: string;
  nulltext: string;
  styletype?: "primary" | "secondary";
}

export interface SelectType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
  placeholder: string;
  nulltext: string;
  styletype?: "primary" | "secondary";
}

type strArrayObj = { [prop: string]: string[] };

const UseCoupon = () => {
  const { state } = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<bar[]>([]);

  const [barNameList, setBarNameList] = useState<string[]>([]);
  const [cocktailNameList, setCocktailNameList] = useState<strArrayObj>({});
  // barName : cockList
  const [selectedBar, setSelectedBar] = useState("");
  // barName
  const [selectedCocktail, setSelectedCocktail] = useState("");
  // cocktailname
  const [selectedOption, setSelectedOption] = useState<any>({});
  // option

  useEffect(() => {
    (async () => {
      const getResult: bar[] = await getBarList();
      setData(getResult);

      const cocktailMap: strArrayObj = {};
      setBarNameList(getResult.map((item) => item.barName));
      getResult.forEach((item) => {
        cocktailMap[item.barName] = item.barCocktail.map((cocktail) => cocktail.cocktailName);
      });
      setCocktailNameList(cocktailMap);
      setIsLoading(false);

      if (state) setSelectedBar(state);
    })();
  }, []);

  useEffect(() => {
    setSelectedCocktail("");
  }, [selectedBar]);

  useEffect(() => {
    if (selectedCocktail === "") {
      setSelectedOption({});
    } else {
      const bar = data.find((item) => item.barName === selectedBar);
      const cocktail = bar?.barCocktail.find((item) => item.cocktailName === selectedCocktail);

      setSelectedOption({
        ...bar,
        ...cocktail,
      });
    }
  }, [selectedCocktail]);

  const BarOptions: SelectType = {
    selected: selectedBar,
    setSelected: setSelectedBar,
    data: barNameList,
    placeholder: "바 이름을 검색해 보세요",
    nulltext: "바 선택하기",
  };

  const CocktailOptions: SelectType = {
    selected: selectedCocktail,
    setSelected: setSelectedCocktail,
    data: cocktailNameList[selectedBar],
    placeholder: "칵테일을 선택해 주세요",
    nulltext: "칵테일 선택하기",
  };

  return (
    <Layout>
      <MainContainer>
        <h2>쿠폰 사용하기</h2>
        {isLoading ? (
          <div>로딩</div>
        ) : (
          <>
            <h3>어떤 바를 방문하셨나요?</h3>
            <SelectBox {...BarOptions} />
            <h3>어떤 칵테일을 마셨나요?</h3>
            <SelectBox {...CocktailOptions} />
            <ShowPopupButton option={selectedOption} />
          </>
        )}
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
