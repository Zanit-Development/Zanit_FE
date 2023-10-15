import styled from "styled-components";
import Category from "../../components/search/Category";
import { useState } from "react";
import { categoryList } from "./options";
import { INPUT_EVENT } from "../../libs/interface/typeEvent";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { CategoryProps } from "../../libs/interface/interfaceCommon";
import { useRecoilState } from "recoil";
import { categoryAtom } from "../../recoil/SearchAtom";

const SearchCategory = ({ ...props }) => {
  const state = props?.state; // 홈에서 넘어오는 경우 상태
  console.log(state);
  const [categoryState, setCategoryState] = useRecoilState(categoryAtom);
  const [category, setCategory] = useState<SearchCategoryType>(categoryState);

  // 카테고리 핸들러
  const handleCategory = (e: INPUT_EVENT) => {
    setCategory(e.target.value as SearchCategoryType);
    setCategoryState(e.target.value as SearchCategoryType);
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
