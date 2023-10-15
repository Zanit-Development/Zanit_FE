import Input from "../../components/common/input/Input";
import searchIcon from "../../assets/icon/icon_search.svg";
import listGenerator from "./listGenerator";
import { useState } from "react";
import { FORM_EVENT, INPUT_EVENT } from "../../libs/interface/typeEvent";
import { styled } from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { InputProps } from "../../libs/interface/interfaceCommon";
import { isLoadingAtom } from "../../recoil/loadingAtom";
import { inputValueState, searchBarListState } from "../../recoil/SearchAtom";

const SearchForm = () => {
  const inputValueAtHome = useRecoilValue(inputValueState);
  const [inputValue, setInputValue] = useState(inputValueAtHome || "");

  // 검색된 바, 칵테일 목록
  const setSearchBarList = useSetRecoilState(searchBarListState);
  // 로딩
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);

  // 검색어 핸들러
  const handleSearch = (e: INPUT_EVENT) => {
    setInputValue(e.target.value);
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
    <>
      <InputContainer
        onSubmit={async (e: FORM_EVENT) => {
          e.preventDefault();
          setIsLoading(true);
          const response = await listGenerator.barListGenerator(inputValue);
          setSearchBarList(response);
          setIsLoading(false);
        }}
      >
        <StyledTitle>BAR 검색</StyledTitle>
        <Input {...inputOptions} />
        <SearchButton type="submit">
          <img src={searchIcon} alt="검색 버튼" />
        </SearchButton>
      </InputContainer>
    </>
  );
};

export default SearchForm;

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

const SearchButton = styled.button`
  position: absolute;
  top: 81px;
  right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
