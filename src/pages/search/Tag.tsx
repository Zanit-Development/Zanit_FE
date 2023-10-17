/**
 * 검색 태그 아이템
 */

import React, { useState, useEffect } from "react";
import arrow from "../../assets/icon/icon_arrow_down.svg";
import { styled } from "styled-components";
import { INPUT_EVENT } from "../../libs/interface/typeEvent";
import { TAG_TYPE_VARIANTS } from "../../libs/interface/typeCommon";
import { useRecoilState } from "recoil";
import { selectedTagState } from "../../recoil/SearchAtom";

interface NewTagListOption {
  itemlist: string[];
  typevariants: TAG_TYPE_VARIANTS;
  selected?: string | undefined;
}

const Tag = ({ typevariants, itemlist }: NewTagListOption) => {
  const tagList = itemlist;
  const [selectedTag, setSelectedTag] = useRecoilState(selectedTagState);
  const [nonSelectors, setNonSelectors] = useState<string[]>(tagList);
  const [showNonSelectors, setShowNonSelectors] = useState(typevariants === "secondary");

  useEffect(() => {
    // 이미 선택된 태그가 있을 때(홈에서 넘어오는 경우)
    selectedTag && setSelectedTag(selectedTag);
    setNonSelectors(tagList.filter((tag) => tag !== selectedTag));
  }, []);

  const handleTag = (e: INPUT_EVENT) => {
    const value = e.currentTarget.value;
    setSelectedTag(selectedTag === value ? "" : value);
    setNonSelectors(tagList.filter((tag) => tag !== value));
  };

  return (
    <>
      {/** 선택한 값이 없는 경우 */}
      {!selectedTag ? (
        <ul>
          {tagList.map((tag, idx) => {
            return (
              <TagContainer key={`select_${idx}`}>
                <input id={`tag_${idx}`} type="checkbox" value={tag} onChange={(e) => handleTag(e)} />
                <label htmlFor={`tag_${idx}`}>{tag}</label>
              </TagContainer>
            );
          })}
        </ul>
      ) : (
        <>
          {/** 선택한 값이 있는 경우 */}
          {/** 미선택 요소 표시 여부 */}
          {selectedTag && typevariants === "primary" && (
            <>
              <ShowNonSelectorButton
                type="checkbox"
                id="show_nonselectors"
                onChange={() => setShowNonSelectors(!showNonSelectors)}
              />
              <label htmlFor="show_nonselectors">
                <img src={arrow} alt="미선택 태그 보기" />
              </label>
            </>
          )}
          <ul>
            {/* 선택된 아이템 */}
            <TagContainer key={`select_item`}>
              <input id={`select_item`} type="checkbox" value={selectedTag} onChange={(e) => handleTag(e)} />
              <label className={"selected-item"} htmlFor={`select_item`}>
                {selectedTag}
              </label>
            </TagContainer>

            {showNonSelectors && (
              <>
                {/* 미선택 아이템 */}
                {nonSelectors.map((item, idx) => {
                  return item !== selectedTag ? (
                    <TagContainer key={`nonselect_${idx}`}>
                      <input id={`select_${idx}`} type="checkbox" value={item} onChange={(e) => handleTag(e)} />
                      <label htmlFor={`select_${idx}`}>{item}</label>
                    </TagContainer>
                  ) : null;
                })}
              </>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default Tag;

const TagContainer = styled.li`
  display: block;

  & > input {
    display: none;
  }

  & > label.selected-item {
    background-color: var(--main-color);
    color: white;
  }

  & > label {
    display: inline-block;
    padding: 8px;
    background-color: var(--gray100-color);
    border-radius: 20px;
    box-sizing: border-box;
    font-family: var(--font--Medium);
    font-size: 12px;
    color: var(--black-color);
    line-height: 20px;
    user-select: none;
    cursor: pointer;
  }

  & > label::before {
    content: "#";
  }
`;

const ShowNonSelectorButton = styled.input`
  & + label {
    position: absolute;
    right: 20px;
    top: 8px;
    width: 15px;
    transition: transform 0.3s;
    cursor: pointer;
  }

  &:checked + label {
    transform: rotate(180deg);
  }
`;
