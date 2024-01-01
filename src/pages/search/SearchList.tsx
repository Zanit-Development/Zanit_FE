/**
 * 검색 목록 컴포넌트
 */

import React, { useEffect } from "react";
import Item from "../../components/common/item/Item";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoadingAtom } from "../../recoil/loadingAtom";
import listGenerator from "./listGenerator";
import { categoryState, cocktailListState, filteredListState, inputValueState, listFilterState, searchBarListState } from "../../recoil/SearchAtom";

const SearchList = () => {
  const inputValue = useRecoilValue(inputValueState);
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

      // setSearchBarList(await listGenerator.barListGenerator(inputValue));
      // setCocktailList(await listGenerator.cocktailListGenerator());

      await Promise.all([listGenerator.barListGenerator(inputValue), listGenerator.cocktailListGenerator()]).then((response) => {
        setSearchBarList(response[0]);
        setCocktailList(response[1]);
        console.log(response);
      });

      if (category !== "barName") {
        setFilter(category);
      }

      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <ListContainer>
        {filteredList ? (
          filteredList.length ? (
            filteredList?.map((item: any, idx: number) => {
              let itemName;
              let picUrl;
              // dummy code
              try {
                itemName = category !== "cocktail" ? item?.barName : item?.cocktailName;
                picUrl = category !== "cocktail" ? (item?.barPicsPath?.length ? item?.barPicsPath[0].barPicture : item.barPics[0]) : item?.cocktailPicPath || item.cocktailPicture;
              } catch (e) {
                // recoil bug
                itemName = item?.cocktailName;
                picUrl = item?.cocktailPicPath || item.cocktailPicture;
              }
              return <Item key={`search_item_${idx}`} typevariants={"primary"} link={`/bar-detail?barUid=${item.barUid}`} url={picUrl} name={itemName ?? item.name} />;
            })
          ) : (
            <EmptyList>선택 결과가 없습니다.</EmptyList>
          )
        ) : (
          <EmptyList>검색 결과가 없습니다.</EmptyList>
        )}
      </ListContainer>
    </>
  );
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
