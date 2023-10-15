import Item from "../../components/common/item/Item";
import styled from "styled-components";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  categoryState,
  cocktailListState,
  filteredListState,
  inputValueState,
  listFilterState,
  searchBarListState,
  selectTagState,
} from "../../recoil/SearchAtom";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { isLoadingAtom } from "../../recoil/loadingAtom";
import listGenerator from "./listGenerator";

const SearchList = () => {
  const inputValue = useRecoilValue(inputValueState);
  const tag = useRecoilValue(selectTagState);
  const category = useRecoilValue(categoryState);
  // 목록 필터
  const setSearchBarList = useSetRecoilState(searchBarListState);
  const setCocktailList = useSetRecoilState(cocktailListState);
  const setFilter = useSetRecoilState(listFilterState);
  const filteredList = useRecoilValue(filteredListState);
  // 로딩
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  // 초기값 세팅
  useEffect(() => {
    (async () => {
      setIsLoading(true);

      setSearchBarList(await listGenerator.barListGenerator(inputValue));
      setCocktailList(await listGenerator.cocktailListGenerator());

      setIsLoading(false);
    })();
  }, []);

  const pageGenerator = (category: SearchCategoryType, tag: string) => {
    setFilter(category);

    return (
      <ListContainer>
        {filteredList ? (
          filteredList.length ? (
            filteredList.map((item: any, idx: number) => {
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
