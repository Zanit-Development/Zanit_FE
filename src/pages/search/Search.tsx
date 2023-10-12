import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import Category from "../../components/search/Category";
import Item from "../../components/common/item/Item";
import handleSubmit from "./handleSubmit";
import SearchTag from "../../components/tag/SearchTag";
import searchIcon from "../../assets/icon/icon_search.svg";
import { getBarListHome, getCocktailListHome } from "./initBarList";
import { CategoryProps, InputProps } from "../../libs/interface/interfaceCommon";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";
import { BarProps } from "../../libs/interface/interfaceBarDetail";
import { styled } from "styled-components";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { CocktailProps } from "../../libs/interface/interfaceCocktail";
import { barBaseTagOptions, barLocationTagOption, barMoodTagOption, categoryList, cocktailTagOption } from "./options";
import { useLocation } from "react-router";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState<SearchCategoryType>("barName");
  const [tag, setTag] = useState("");
  const [searchBarData, setSearchBarData] = useState<Array<BarProps>>([]);
  const [searchCocktailData, setSearchCocktailData] = useState<Array<CocktailProps>>([]);
  const [filteringBarData, setFilteringBarData] = useState<BarProps[]>([]);
  const [filteringCocktailData, setFilteringCocktailData] = useState<CocktailProps[]>([]);
  const { state } = useLocation();

  const getHomeSearchCocktail = async () => {
    const getCocktailList = await getCocktailListHome();
    const cocktailList = getCocktailList?.data as CocktailProps[];
    setSearchCocktailData(cocktailList);
    setCategory(state.category);
    setTag(state.value);
  };

  const getHomeSearch = async () => {
    const response = await handleSubmit(null, state.value, state.category);
    setSearchBarData(response?.data);
  };

  const initSearchDataBar = async () => {
    const getBarList = await getBarListHome();
    const randomBarList = getBarList?.data as BarProps[];
    setSearchBarData(randomBarList);
  };

  const initSearchDataCocktail = async () => {
    const getCocktailList = await getCocktailListHome();
    const cocktailList = getCocktailList?.data as CocktailProps[];
    setSearchCocktailData(cocktailList);
  };

  useEffect(() => {
    // 초기 랜덤 바 요청
    if (state) {
      // home에서 넘어올 때
      if (state.category === "cocktail") {
        getHomeSearchCocktail();
      } else {
        getHomeSearch();
      }
    } else {
      setCategory("barName");
      initSearchDataBar();
      initSearchDataCocktail();
    }
  }, []);

  useEffect(() => {
    // 태그 선택에 따른 검색값 필터링
    let filteringItem: Array<BarProps | CocktailProps> = [];

    if (category === "cocktail") {
      // 칵테일이 카테고리인 경우 태그 필터링
      const selectoRecoUser = cocktailTagOption.filter((number) => number[1] === tag)[0] || null;
      if (!selectoRecoUser) return;

      filteringItem = searchCocktailData.filter((item: any) => {
        return item.recoUser === selectoRecoUser[0];
      }) as CocktailProps[];
      setFilteringCocktailData([...filteringItem] as CocktailProps[]);
    } else if (category === "barLocation") {
      filteringItem = searchBarData.filter((item: any) => {
        return item.barLocation === tag;
      }) as BarProps[];
      setFilteringBarData([...filteringItem] as BarProps[]);
    } else {
      filteringItem = searchBarData.filter((item: any) => {
        return item.barMood === tag;
      }) as BarProps[];
      setFilteringBarData([...filteringItem] as BarProps[]);
    }
  }, [tag, category, searchCocktailData, searchBarData]);

  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  const handleCategory = (e: INPUT_EVENT) => {
    setCategory(e.target.value as SearchCategoryType);
  };

  const getTagList = (category: string) => {
    switch (category) {
      case "barMood":
        return barMoodTagOption;
      case "barLocation":
        return barLocationTagOption;
      case "cocktail":
        return cocktailTagOption;

      default:
        return barBaseTagOptions;
    }
  };

  const inputOptions: InputProps = {
    typevariants: "search",
    sizevariants: "medium",
    value: inputValue,
    type: "text",
    placeholder: "오늘은 어떤 Bar를 방문해 볼까요?",
    onChange: handleSearch,
  };

  return (
    <Layout>
      <InputContainer
        onSubmit={async (e: FORM_EVENT) => {
          const response = await handleSubmit(e, inputValue, category);
          setSearchBarData(response?.data);
        }}
      >
        <StyledTitle>BAR 검색</StyledTitle>
        <Input {...inputOptions} />
        <SearchButton type="submit">
          <img src={searchIcon} alt="" />
        </SearchButton>
      </InputContainer>
      <CategoryContainer>
        <MenuSection>
          {categoryList?.map((item, idx) => {
            const categoryOptions: CategoryProps = {
              menu: item[0],
              value: item[1] as SearchCategoryType,
              idx: idx,
              onChange: handleCategory,
              defaultcheck: state?.category === "cocktail" ? 1 : 0,
            };

            return <Category {...categoryOptions} key={idx} />;
          })}
        </MenuSection>
        <TagSection>
          <SearchTag
            typevariants="primary"
            itemlist={getTagList(category)}
            checked={
              state?.value === "입문자용"
                ? [0, "입문자용"]
                : state?.value === "캐주얼드링커용"
                ? [1, "캐주얼드링커용"]
                : state?.value === "헤비드링커용"
                ? [2, "헤비드링커용"]
                : null
            }
            settag={setTag}
          />
        </TagSection>
      </CategoryContainer>
      {category === "cocktail" ? (
        <ListContainer>
          {/** 카테고리 = 칵테일 */}
          {tag ? (
            !filteringCocktailData ? (
              <EmptyList key={"emptyList"}>"검색결과가 없습니다."</EmptyList>
            ) : (
              filteringCocktailData.map((item, idx) => {
                const data: any = item;
                return (
                  <Item
                    key={`search_item_${idx}`}
                    typevariants={"primary"}
                    link={""}
                    url={""}
                    name={data.cocktailName}
                  />
                );
              })
            )
          ) : !searchCocktailData ? (
            <EmptyList key={"emptyList"}>"검색결과가 없습니다."</EmptyList>
          ) : (
            searchCocktailData.map((item, idx) => {
              const data: any = item;
              return (
                <Item key={`search_item_${idx}`} typevariants={"primary"} link={""} url={""} name={data.cocktailName} />
              );
            })
          )}
        </ListContainer>
      ) : (
        <ListContainer>
          {/** 카테고리 = 바 */}
          {tag ? (
            !filteringBarData ? (
              <EmptyList key={"emptyList"}>"검색결과가 없습니다."</EmptyList>
            ) : (
              filteringBarData.map((item, idx) => {
                const data: any = item;
                return (
                  <Item key={`search_item_${idx}`} typevariants={"primary"} link={""} url={""} name={data.barName} />
                );
              })
            )
          ) : !searchBarData ? (
            <EmptyList key={"emptyList"}>"검색결과가 없습니다."</EmptyList>
          ) : (
            searchBarData.map((item, idx) => {
              const data: any = item;
              return (
                <Item key={`search_item_${idx}`} typevariants={"primary"} link={""} url={""} name={data.barName} />
              );
            })
          )}
        </ListContainer>
      )}
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
  position: relative;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
  }

  & > ul > li {
    margin-right: 10px;
  }
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 10px;
  padding: 20px;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 81px;
  right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const EmptyList = styled.span`
  font-size: 12px;
`;
