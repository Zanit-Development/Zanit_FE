import React, { useState } from "react";
import { styled } from "styled-components";

import { InputProps } from "../../libs/interface/interfaceCommon";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";

import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import TagList from "../../components/tag/TagList";
import { HomeBanner, ItemList } from "../../components/home";

import cocktailImg from "../../assets/icon/icon_wine.svg";
import barImg from "../../assets/icon/icon_store.svg";
import { itemOptions } from "../../libs/utils/Homedummy";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FORM_EVENT) => {
    e.preventDefault();
  };

  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  const inputOptions: InputProps = {
    typevariants: "secondary",
    sizevariants: "medium",
    value: inputValue,
    type: "text",
    placeholder: "오늘은 어떤 Bar를 방문해 볼까요?",
    onChange: handleSearch,
  };

  return (
    <Layout>
      <HomeBanner />
      <FormContainer onSubmit={(e: FORM_EVENT) => handleSubmit(e)}>
        <StyledTitle className="a11y-hidden">BAR 검색</StyledTitle>
        <Input {...inputOptions} />
      </FormContainer>
      <TagList />
      <CocktailContainer>
        <TitleStyle img={cocktailImg}>
          <h2>Cocktail</h2>
          <span>지금 당신을 기다리고 있는</span>
        </TitleStyle>
        <ItemList itemOptions={itemOptions} />
      </CocktailContainer>
      <BarContainer>
        <TitleStyle img={barImg}>
          <h2>Bar</h2>
          <span>지금 당신을 기다리고 있는</span>
        </TitleStyle>
        <ItemList itemOptions={itemOptions} />
      </BarContainer>
    </Layout>
  );
};

export default Home;

const FormContainer = styled.form`
  width: 100%;
  padding: 25px 20px 20px;
  box-sizing: border-box;

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
  margin-bottom: 20px;
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
  margin-bottom: 41px;
`;

const BarContainer = styled.section`
  margin-bottom: 51px;
`;
