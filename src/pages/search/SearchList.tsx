import React from "react";
import { CocktailProps } from "../../libs/interface/interfaceCocktail";
import { BarProps } from "../../libs/interface/interfaceBarDetail";
import Item from "../../components/common/item/Item";
import styled from "styled-components";

const SearchList = ({ items }: { items: BarProps[] | CocktailProps[] }) => {
  return (
    <ListContainer>
      {items ? (
        items.map((item: any, idx) => {
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
        <EmptyList>검색 결과가 없습니다.</EmptyList>
      )}
    </ListContainer>
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
