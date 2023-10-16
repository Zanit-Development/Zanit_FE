/**
 * 검색 카테고리 컴포넌트
 */

import React from "react";
import styled from "styled-components";
import Category from "../../components/search/Category";
import { categoryList } from "./options";
import { INPUT_EVENT } from "../../libs/interface/typeEvent";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { CategoryProps } from "../../libs/interface/interfaceCommon";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, listFilterState } from "../../recoil/SearchAtom";

const SearchCategory = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const setFilter = useSetRecoilState(listFilterState);

  // 카테고리 핸들러
  const handleCategory = (e: INPUT_EVENT) => {
    setCategory(e.target.value as SearchCategoryType);
    setFilter(e.target.value);
  };

  return (
    <MenuSection>
      {categoryList?.map((item, idx) => {
        const categoryOptions: CategoryProps = {
          menu: item[0],
          value: item[1] as SearchCategoryType,
          idx: idx,
          onChange: handleCategory,
          defaultcheck: category === item[1],
        };

        return <Category {...categoryOptions} key={"category_" + idx} />;
      })}
    </MenuSection>
  );
};

export default SearchCategory;

const MenuSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 20px;
`;
