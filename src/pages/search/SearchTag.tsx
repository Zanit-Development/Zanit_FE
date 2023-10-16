/**
 * 검색 태그 컴포넌트
 */

import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { useRecoilValue } from "recoil";
import { filteredTagState } from "../../recoil/SearchAtom";

const SearchTag = () => {
  const tagList = useRecoilValue(filteredTagState);

  // 선택된 태그
  return (
    <TagSection>
      {/* 태그 목록 표시 */}
      <Tag typevariants="primary" itemlist={tagList} />
    </TagSection>
  );
};

export default SearchTag;

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
