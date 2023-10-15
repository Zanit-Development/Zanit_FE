import Item from "../../components/common/item/Item";
import styled from "styled-components";
import { useEffect } from "react";
import { CocktailProps } from "../../libs/interface/interfaceCocktail";
import { BarProps } from "../../libs/interface/interfaceBarDetail";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoryAtom,
  cocktailListAtom,
  filteringBarLocationAtom,
  filteringBarMoodAtom,
  filteringBarNameAtom,
  filteringCocktailListAtom,
  inputValueAtom,
  searchBarListAtom,
  selectTagAtom,
} from "../../recoil/SearchAtom";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { cocktailTagOption } from "./options";
import { isLoadingAtom } from "../../recoil/loadingAtom";
import listGenerator from "./listGenerator";

const SearchList = ({ ...props }) => {
  const state = props?.state;
  const category = useRecoilValue(categoryAtom);
  const tag = useRecoilValue(selectTagAtom);
  const inputValue = useRecoilValue(inputValueAtom);
  const [searchBarList, setSearchBarList] = useRecoilState(searchBarListAtom);
  const [cocktailList, setCocktailList] = useRecoilState(cocktailListAtom);
  const [filteringBarName, setFilteringBarName] = useRecoilState(filteringBarNameAtom);
  const [filteringBarMood, setFilteringBarMood] = useRecoilState(filteringBarMoodAtom);
  const [filteringBarLocation, setFilteringBarLocation] = useRecoilState(filteringBarLocationAtom);
  const [filteringCocktails, setFilteringCocktails] = useRecoilState(filteringCocktailListAtom);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);

  // 초기값 세팅
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (state) {
        setCocktailList(await listGenerator.cocktailListGenerator());
        if (state.category === "barName") {
          // 홈에서 검색어를 입력하여 넘어왔을 때
          setSearchBarList(await listGenerator.barListGenerator(state.value));
        } else {
          // 홈에서 태그를 눌러 넘어왔을 때
          setSearchBarList(await listGenerator.barListGenerator(""));
        }
      } else {
        // 그냥 검색페이지 링크로 넘어왔을 때
        setSearchBarList(await listGenerator.barListGenerator(""));
        setCocktailList(await listGenerator.cocktailListGenerator());
      }
      setIsLoading(false);
    })();
  }, []);

  // 카테고리, 태그 변경
  useEffect(() => {
    if (category === "cocktail") {
      getFilteringCocktail(tag);
    } else {
      getFilteringBarList(category, tag);
    }
  }, [category, tag]);

  // 바 목록 필터링
  const getFilteringBarList = (category: SearchCategoryType = "barName", tag = "") => {
    switch (category) {
      case "barName":
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

  const pageGenerator = (category: SearchCategoryType, tag: string) => {
    let itemList;

    switch (category) {
      case "cocktail":
        itemList = tag ? filteringCocktails : cocktailList;
        break;
      case "barMood":
        itemList = tag ? filteringBarMood : searchBarList;
        break;
      case "barLocation":
        itemList = tag ? filteringBarLocation : searchBarList;
        break;
      default:
        itemList = tag ? filteringBarName : searchBarList;
    }

    return (
      <ListContainer>
        {itemList ? (
          itemList.length ? (
            itemList.map((item: any, idx: number) => {
              const itemName = item?.barName || item?.cocktailName;
              return (
                <Item
                  key={`search_item_${idx}`}
                  typevariants={"primary"}
                  link={""}
                  url={item?.barPics || item?.cocktailPicPath || ""}
                  name={itemName}
                />
              );
            })
          ) : (
            <EmptyList>선택 결과가 없습니다.</EmptyList>
          )
        ) : (
          <EmptyList>검색 결과가 없습니다.</EmptyList>
        )}
      </ListContainer>
    );
  };

  return <>{pageGenerator(category, tag)}</>;
};

export default SearchList;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 10px;
  padding: 20px;
`;

const EmptyList = styled.span`
  font-size: 12px;
`;
