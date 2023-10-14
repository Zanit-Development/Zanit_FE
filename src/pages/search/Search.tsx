import React, { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import Input from "../../components/common/input/Input";
import Category from "../../components/search/Category";
import SearchTag from "../../components/tag/SearchTag";
import searchIcon from "../../assets/icon/icon_search.svg";
import SearchList from "./SearchList";
import { CategoryProps, InputProps } from "../../libs/interface/interfaceCommon";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";
import { BarProps } from "../../libs/interface/interfaceBarDetail";
import { styled } from "styled-components";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { CocktailProps } from "../../libs/interface/interfaceCocktail";
import { barBaseTagOptions, barLocationTagOption, barMoodTagOption, categoryList, cocktailTagOption } from "./options";
import { useLocation } from "react-router";
import { defaultInstance } from "../../libs/apis/axios";
import { useRecoilState } from "recoil";
import { filteringBarLocationAtom, filteringBarMoodAtom, filteringBarNameAtom } from "../../recoil/barListAtom";
import { filteringCocktailListAtom } from "../../recoil/cocktailListAtom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState<SearchCategoryType>("barName");
  const [tag, setTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 검색된 바, 칵테일 목록
  const [searchBarList, setSearchBarList] = useState<BarProps[]>([]);
  const [cocktailList, setCocktailList] = useState<CocktailProps[]>([]);

  // 필터링된 바, 칵테일 목록
  const [filteringBarName, setFilteringBarName] = useRecoilState<BarProps[]>(filteringBarNameAtom);
  const [filteringBarMood, setFilteringBarMood] = useRecoilState<BarProps[]>(filteringBarMoodAtom);
  const [filteringBarLocation, setFilteringBarLocation] = useRecoilState<BarProps[]>(filteringBarLocationAtom);
  const [filteringCocktails, setFilteringCocktails] = useRecoilState<CocktailProps[]>(filteringCocktailListAtom);

  // 홈에서 넘어온 태그, 검색 값
  const { state } = useLocation();

  // 초기값 세팅
  useEffect(() => {
    (async () => {
      setSearchBarList(await barListGenerator());
      setCocktailList(await cocktailListGenerator());

      if (state) {
        state.category && setCategory(state.category);
        state.value && setInputValue(state.value);
      }
    })();
  }, []);

  // 카테고리, 태그 변경
  useEffect(() => {
    category === "cocktail" && getFilteringCocktail(tag);
    category !== "cocktail" && getFilteringBarList(category, tag);
  }, [category, tag]);

  // 바 목록 제너레이터
  const barListGenerator = async (category: string = "", value: string = "") => {
    setIsLoading(true);
    let requestUrl;

    if (!category) {
      requestUrl = "barListHome";
    } else {
      requestUrl = `barList?${category}=${value}`;
    }

    try {
      const response = await defaultInstance.get(requestUrl);
      return response.data;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  // 칵테일 목록 제너레이터
  const cocktailListGenerator = async () => {
    setIsLoading(true);
    const requestUrl = "getCocktailList?";

    try {
      const response = await defaultInstance.get(requestUrl);
      return response.data;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  // 바 목록 필터링
  const getFilteringBarList = (category = "", tag = "") => {
    switch (category) {
      case "barName" || "":
        setFilteringBarName(
          tag
            ? searchBarList?.filter(
                (item: BarProps) => item.barName === tag || item.barMood === tag || item.barLocation === tag
              )
            : searchBarList
        );
        break;
      case "barMood":
        setFilteringBarMood(tag ? searchBarList?.filter((item: BarProps) => item.barMood === tag) : searchBarList);
        break;
      case "barLocation":
        setFilteringBarLocation(
          tag ? searchBarList?.filter((item: BarProps) => item.barLocation === tag) : searchBarList
        );
        break;
    }
  };

  // 칵테일 목록 필터링
  const getFilteringCocktail = (tag: string) => {
    const filteringCoctails = tag
      ? cocktailList.filter((item: CocktailProps) => {
          return item.recoUser === cocktailTagOption.indexOf(tag);
        })
      : cocktailList;

    setFilteringCocktails(filteringCoctails);
  };

  // 검색어 핸들러
  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
  };

  // 태그 핸들러
  const handleTagSelected = (category: SearchCategoryType, tag: string | undefined) => {
    let selectedTag;

    if (category === "cocktail") {
      selectedTag = cocktailTagOption.filter((item) => item === tag);
    } else if (category === "barMood") {
      selectedTag = barMoodTagOption.filter((item) => item === tag);
    } else if (category === "barLocation") {
      selectedTag = barLocationTagOption.filter((item) => item === tag);
    }

    return selectedTag?.join("");
  };

  // 카테고리 핸들러
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
          e.preventDefault();
          const response = await barListGenerator(category, inputValue);
          setSearchBarList(response?.data);
        }}
      >
        <StyledTitle>BAR 검색</StyledTitle>
        <Input {...inputOptions} />
        <SearchButton type="submit">
          <img src={searchIcon} alt="" />
        </SearchButton>
      </InputContainer>
      <CategoryContainer>
        {/* 카테고리 목록 표시 */}
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
          {/* 태그 목록 표시 */}
          <SearchTag
            typevariants="primary"
            itemlist={getTagList(category)}
            selected={handleTagSelected(state?.category, state?.value)}
            settag={setTag}
          />
        </TagSection>
      </CategoryContainer>
      {/* 검색 목록 표시 */}
      {isLoading && <span>loading...</span>}
      {category === "cocktail" ? (
        <SearchList items={tag ? filteringCocktails : cocktailList} />
      ) : category === "barMood" ? (
        <SearchList items={tag ? filteringBarMood : searchBarList} />
      ) : category === "barLocation" ? (
        <SearchList items={tag ? filteringBarLocation : searchBarList} />
      ) : (
        // barName
        <SearchList items={tag ? filteringBarName : searchBarList} />
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

const SearchButton = styled.button`
  position: absolute;
  top: 81px;
  right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
