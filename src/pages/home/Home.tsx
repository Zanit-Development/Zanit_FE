import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import { InputProps, ItemProps } from "../../libs/interface/interfaceCommon";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";

import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import TagList from "../../components/tag/TagList";
import { HomeBanner, ItemList } from "../../components/home";

import cocktailImg from "../../assets/icon/icon_wine.svg";
import barImg from "../../assets/icon/icon_store.svg";
import { getRandomDataAPI } from "../../libs/apis/home";
import searchIcon from "../../assets/icon/icon_search.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { categoryAtom, inputValueAtom, selectTagAtom } from "../../recoil/SearchAtom";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [barData, setBarData] = useState<ItemProps[]>([]);
  const [cockData, setCockData] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  //
  const [categoryState, setCategoryState] = useRecoilState(categoryAtom);
  const [tagState, setTagState] = useRecoilState(selectTagAtom);
  const [inputValueState, setInputValueState] = useRecoilState(inputValueAtom);

  useEffect(() => {
    (async () => {
      try {
        const { barList, cockList } = await getRandomDataAPI();
        setBarData(barList);
        setCockData(cockList);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleSubmit = (e: FORM_EVENT) => {
    e.preventDefault();
    // 링크 넘기기

    setCategoryState("barName");
    setInputValue(inputValue);
    navigate("/search", { state: { category: "barName", value: inputValue } });
  };

  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  const inputOptions: InputProps = {
    typevariants: "search",
    sizevariants: "medium",
    value: inputValue,
    type: "text",
    placeholder: "오늘은 어떤 Bar를 방문해 볼까요?",
    onChange: handleSearch,
  };

  return isLoading ? (
    <div>로딩중</div>
  ) : (
    <Layout>
      <HomeBanner />
      <FormContainer onSubmit={(e: FORM_EVENT) => handleSubmit(e)}>
        <StyledTitle className="a11y-hidden">BAR 검색</StyledTitle>
        <Input {...inputOptions} />
        <SearchButton type="submit">
          <img src={searchIcon} alt="" />
        </SearchButton>
      </FormContainer>
      <TagList />
      <CocktailContainer>
        <TitleStyle img={cocktailImg}>
          <h2>Cocktail</h2>
          <span>지금 당신을 기다리고 있는</span>
        </TitleStyle>
        <ItemList itemOptions={cockData} />
      </CocktailContainer>
      <BarContainer>
        <TitleStyle img={barImg}>
          <h2>Bar</h2>
          <span>지금 당신을 기다리고 있는</span>
        </TitleStyle>
        <ItemList itemOptions={barData} />
      </BarContainer>
    </Layout>
  );
};

export default Home;

const FormContainer = styled.form`
  width: 100%;
  padding: 25px 20px 20px;
  box-sizing: border-box;
  position: relative;

  & > input {
    margin: 0 auto;
    background-color: var(--gray100-color);

    &::placeholder {
      color: var(--gray500-color);
    }
  }
`;

const StyledTitle = styled.h2`
  margin: 20px 0;
  font-family: var(--font--Medium);
  color: white;
`;

const TitleStyle = styled.div<{ img: string }>`
  display: flex;
  font-family: var(--font--Medium);

  margin-left: 20px;
  margin-bottom: 16px;
  padding-left: 20px;

  position: relative;

  h2,
  span {
    margin-left: 4px;
  }

  h2 {
    font-size: 1.25rem;
  }
  h2::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 20px;
    height: 20px;
    background: url(${(props) => props.img}) no-repeat center;
  }
  span {
    font-size: 0.75rem;
    color: var(--gray500-color);
    margin-top: 7px;
  }
`;

const CocktailContainer = styled.section`
  margin-bottom: 30px;
`;

const BarContainer = styled.section`
  margin-bottom: 30px;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 28px;
  right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
