import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { InputProps, ItemProps } from "../../libs/interface/interfaceCommon";
import { styled } from "styled-components";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";
import { Input } from "../../components/common/input/Input";
import SectionTitle from "./SectionTitle";
import SubscribeBox from "./SubscribeBox";
import TagList from "./TagList";
import sampleImg from "../../assets/sample-img/cocktail1.jpg";
import ItemSection from "./ItemSection";

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
  ];

  return (
    <Layout>
      <SubscribeBox />
      <InputContainer onSubmit={(e: FORM_EVENT) => handleSubmit(e)}>
        <StyledTitle className="a11y-hidden">BAR 검색</StyledTitle>
        <Input {...inputOptions} />
      </InputContainer>
      <TagContainer>
        <TagList />
      </TagContainer>
      <CocktailContainer>
        <SectionTitle title="Cocktail" img="/" />
        <ItemSection itemOptions={itemOptions} />
      </CocktailContainer>
      <BarContainer>
        <SectionTitle title="Bar" img="/" />
        <ItemSection itemOptions={itemOptions} />{" "}
      </BarContainer>
    </Layout>
  );
};

const StyledTitle = styled.h1`
  margin: 20px 0;
  font-family: var(--font--Medium);
  color: white;
`;

const InputContainer = styled.form`
  width: 100%;
  padding: 25px 16px 20px;
  box-sizing: border-box;

  & > input {
    margin: 0 auto;
    background-color: var(--gray100-color);

    &::placeholder {
      color: var(--gray500-color);
    }
  }
`;

const TagContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 36px;

  & > div {
    margin-right: 10px;
  }

  label {
    font-size: 12px;
    padding: 6px 16px;
    background-color: var(--main-color);
    color: var(--white-color);
  }
`;

const CocktailContainer = styled.section`
  margin-bottom: 33px;
  padding: 0 20px;
`;

const BarContainer = styled.section`
  margin-bottom: 51px;
  padding: 0 20px;
`;
