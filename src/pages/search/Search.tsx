import React, { useState } from "react";
import { styled } from "styled-components";
import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import { CategoryProps, InputProps, ItemProps, TagProps } from "../../libs/interface/interfaceCommon";
import Category from "../../components/search/Category";
import Tag from "../../components/tag/Tag";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";
import Item from "../../components/common/item/Item";
import sampleImg from "../../assets/sample-img/cocktail1.jpg";

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("전체");

  const handleSubmit = (e: FORM_EVENT) => {
    e.preventDefault();
  };

  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  const handleCategory = (e: INPUT_EVENT) => {
    setCategory(e.target.value);
  };

  const inputOptions: InputProps = {
    typeVariants: "secondary",
    sizeVariants: "medium",
    value: inputValue,
    type: "text",
    placeholder: "오늘은 어떤 Bar를 방문해 볼까요?",
    onChange: handleSearch,
  };

  const itemOptions: ItemProps = {
    typeVariants: "primary",
    link: "#",
    url: sampleImg,
    name: "임시",
  };

  const categorys = ["전체", "칵테일", "분위기", "지역"];
  const tagOptions = ["로맨틱한", "데이트장소", "조용한", "청담동", "신나는", "분위기있는", "힙한", "소개팅"];

  return (
    <Layout>
      <InputContainer onSubmit={(e: FORM_EVENT) => handleSubmit(e)}>
        <StyledTitle>BAR 검색</StyledTitle>
        <Input {...inputOptions} />
      </InputContainer>
      <CategoryContainer>
        <MenuSection>
          {categorys.map((item, idx) => {
            const categoryOptions: CategoryProps = {
              menu: item,
              idx: idx,
              onChange: handleCategory,
            };

            return <Category {...categoryOptions} key={idx} />;
          })}
        </MenuSection>
        <TagSection>
          {tagOptions.map((item, idx) => {
            const tagOptions: TagProps = {
              typeVariants: "primary",
              tagId: `tag_${idx}`,
              value: item,
            };

            return <Tag {...tagOptions} key={idx} />;
          })}
        </TagSection>
      </CategoryContainer>
      <ListContainer>
        <Item {...itemOptions} />
        <Item {...itemOptions} />
        <Item {...itemOptions} />
        <Item {...itemOptions} />
        <Item {...itemOptions} />
        <Item {...itemOptions} />
      </ListContainer>
    </Layout>
  );
};

export default Search;

const StyledTitle = styled.h1`
  margin: 20px 0;
  font-family: var(--font--Medium);
  color: white;
`;

const InputContainer = styled.form`
  width: 100%;
  height: 145px;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--main-color);

  & > input {
    margin: 0 auto;
  }
`;

const CategoryContainer = styled.section``;

const MenuSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 20px;

  & label {
    display: inline-block;
    width: 50px;
    height: 27px;
    font-family: var(--font--Medium);
    font-size: 1rem;
    text-align: center;
    line-height: 27px;
    color: #ababab;
    cursor: pointer;
  }

  & input:checked + label {
    color: var(--black-color);
    border-bottom: 1px solid var(--main-color);
  }
`;

const TagSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 20px;

  & > div {
    margin-right: 10px;
  }
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 20px;
`;
