import React, { useEffect } from "react";
import Layout from "../../layouts/Layout";
import SearchCategory from "./SearchCategory";
import SearchForm from "./SearchForm";
import SearchTag from "./SearchTag";
import styled from "styled-components";
import SearchList from "./SearchList";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { isLoadingAtom } from "../../recoil/loadingAtom";
import { categoryState, inputValueState, selectedTagState } from "../../recoil/SearchAtom";

const Search = () => {
  const isLoading = useRecoilValue(isLoadingAtom);
  const resetInputValueState = useResetRecoilState(inputValueState);
  const resetCategoryState = useResetRecoilState(categoryState);
  const resetTag = useResetRecoilState(selectedTagState);

  useEffect(() => {
    // 검색 페이지 벗어날 때 상태 초기화
    return () => {
      resetInputValueState();
      resetCategoryState();
      resetTag();
    };
  }, []);

  return (
    <Layout>
      <SearchForm />
      <SearchCategory />
      <SearchTag />
      <SearchList />

      {isLoading && (
        <Loading>
          <span>임시로딩창...</span>
        </Loading>
      )}
    </Layout>
  );
};

export default Search;

const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 30px;
    border: 1px solid black;
    background-color: white;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 28px;
    transform: translate(-50%, -50%);
  }
`;
