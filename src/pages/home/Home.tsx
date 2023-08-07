import React, { useState } from "react";
import { styled } from "styled-components";

import { InputProps, ItemProps } from "../../libs/interface/interfaceCommon";
import { listProps } from "../../libs/interface/interfaceHome";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";

import { Layout } from "../../layouts/Layout";
import { Input } from "../../components/common/input/Input";
import SubscribeBox from "../../components/home/HomeBanner";
import TagList from "../../components/tag/TagList";
import ItemList from "../../components/home/ItemList";

import sampleImg from "../../assets/sample-img/cocktail1.jpg";
import cocktailImg from "../../assets/icon/icon_wine.svg";
import barImg from "../../assets/icon/icon_store.svg";

export const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FORM_EVENT) => {
    e.preventDefault();
  };

  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  const inputOptions: InputProps = {
    typeVariants: "secondary",
    sizeVariants: "medium",
    value: inputValue,
    type: "text",
    placeholder: "오늘은 어떤 Bar를 방문해 볼까요?",
    onChange: handleSearch,
  };

  const itemOptions: ItemProps[] = [
    {
      typeVariants: "primary",
      link: "#",
      url: sampleImg,
      name: "임시",
    },
    {
      typeVariants: "primary",
      link: "#",
      url: sampleImg,
      name: "임시",
    },
    {
      typeVariants: "primary",
      link: "#",
      url: sampleImg,
      name: "임시",
    },
    {
      typeVariants: "primary",
      link: "#",
      url: sampleImg,
      name: "임시",
    },
    {
      typeVariants: "primary",
      link: "#",
      url: sampleImg,
      name: "임시",
    },
    {
      typeVariants: "primary",
      link: "#",
      url: sampleImg,
      name: "임시",
    },
  ];

  const cocktailOptions: listProps = {
    title: "Cocktail",
    img: cocktailImg,
    itemOptions: itemOptions,
  };
  const barOptions: listProps = {
    title: "Bar",
    img: barImg,
    itemOptions: itemOptions,
  };

  return (
    <Layout>
      <SubscribeBox />
      <FormContainer onSubmit={(e: FORM_EVENT) => handleSubmit(e)}>
        <StyledTitle className="a11y-hidden">BAR 검색</StyledTitle>
        <Input {...inputOptions} />
      </FormContainer>
      <TagList />
      <CocktailContainer>
        <ItemList {...cocktailOptions} />
      </CocktailContainer>
      <BarContainer>
        <ItemList {...barOptions} />
      </BarContainer>
    </Layout>
  );
};

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

const CocktailContainer = styled.section`
  margin-bottom: 41px;
`;

const BarContainer = styled.section`
  margin-bottom: 51px;
`;
