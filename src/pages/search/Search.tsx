import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import Category from "../../components/search/Category";
import Tag from "../../components/tag/Tag";
import Item from "../../components/common/item/Item";
import handleSubmit from "./handleSubmit";
import getBarListHome from "./initBarList";
import { CategoryProps, InputProps, TagProps } from "../../libs/interface/interfaceCommon";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";
import { BarProps } from "../../libs/interface/interfaceBarDetail";
import { styled } from "styled-components";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState<SearchCategoryType>("barName");
  const [searchData, setSearchData] = useState<BarProps[]>([]);

  useEffect(() => {
    const initRandomBar = async () => {
      const response = await getBarListHome();
      const randomBarList = response?.data as BarProps[];

      setSearchData(randomBarList);
    };

    initRandomBar();
  }, []);

  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  const handleCategory = (e: INPUT_EVENT) => {
    setCategory(e.target.value as SearchCategoryType);
  };

  const inputOptions: InputProps = {
    typevariants: "search",
    sizevariants: "medium",
    value: inputValue,
    type: "text",
    placeholder: "오늘은 어떤 Bar를 방문해 볼까요?",
    onChange: handleSearch,
  };

  const categoryList = [
    ["전체", ""],
    ["바", "barName"],
    ["분위기", "barMood"],
    ["위치", "barLocation"],
  ];
  const tagOptions = ["로맨틱한", "데이트장소", "조용한", "청담동", "신나는", "분위기있는", "힙한", "소개팅"];

  return (
    <Layout>
      <InputContainer
        onSubmit={async (e: FORM_EVENT) => {
          const response = await handleSubmit(e, inputValue, category);
          setSearchData(response?.data);
        }}
      >
        <StyledTitle>BAR 검색</StyledTitle>
        <Input {...inputOptions} />
      </InputContainer>
      <CategoryContainer>
        <MenuSection>
          {categoryList?.map((item, idx) => {
            const categoryOptions: CategoryProps = {
              menu: item[0],
              value: item[1] as SearchCategoryType,
              idx: idx,
              onChange: handleCategory,
            };

            return <Category {...categoryOptions} key={idx} />;
          })}
        </MenuSection>
        <TagSection>
          {tagOptions.map((item, idx) => {
            const tagOptions: TagProps = {
              typevariants: "primary",
              tagid: `tag_${idx}`,
              value: item,
              name: "searchTag",
            };

            return <Tag {...tagOptions} key={idx} />;
          })}
        </TagSection>
      </CategoryContainer>
      <ListContainer>
        {!searchData
          ? "검색결과가 없습니다."
          : searchData.map((item, idx) => {
              return (
                <li>
                  <Item typevariants={"primary"} link={""} url={""} name={item.barName} key={idx} />
                  {/* <Item typevariants={"primary"} link={""} url={""} name={item.cocktailName} key={idx} /> */}
                </li>
              );
            })}
      </ListContainer>
    </Layout>
  );
};

export default Search;

const StyledTitle = styled.h1`
  margin-bottom: 27px;
  font-family: var(--font--Medium);
  line-height: 140%;
  font-size: 20px;
  color: white;
`;

const InputContainer = styled.form`
  width: 100%;
  height: 145px;
  padding: 23px 20px 21px;
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
  margin-top: 12px;
  padding: 20px;
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
  gap: 32px 10px;
  padding: 20px;
`;
