import React, { useState, useEffect } from "react";
import arrow from "../../assets/icon/icon_arrow_down.svg";
import { styled } from "styled-components";
import { INPUT_EVENT } from "../../libs/interface/typeEvent";
import { TAG_TYPE_VARIANTS } from "../../libs/interface/typeCommon";

interface NewTagListOption {
  itemlist: string[];
  typevariants: TAG_TYPE_VARIANTS;
  selected?: string | undefined;
  settag?: (value: string) => void;
}

const SearchTag = ({ typevariants, itemlist, selected, settag }: NewTagListOption) => {
  const items = itemlist;
  const [selector, setSelector] = useState(selected ? selected : "");
  const [nonSelectors, setNonSelectors] = useState<string[]>(itemlist);
  const [showNonSelectors, setShowNonSelectors] = useState(typevariants === "tertiary" ? true : false);

  useEffect(() => {
    settag!(selector);
    setNonSelectors(items.filter((item) => item !== selector));
  }, [items, selector, settag]);

  const handleTag = (e: INPUT_EVENT, typevariants: TAG_TYPE_VARIANTS) => {
    if (typevariants === "secondary") return;

    const value = e.currentTarget.value;
    setSelector(selector === value ? "" : value);
    setNonSelectors(items.filter((item) => item !== selector));
  };

  return (
    <>
      {/** 선택한 값이 없는 경우 */}
      {!selector ? (
        <ul>
          {items.map((item, idx) => {
            return (
              <TagContainer key={`select_${idx}`}>
                <input
                  id={`tag_${idx}`}
                  type="checkbox"
                  value={item}
                  onChange={(e) => handleTag(e, typevariants)}
                  checked={selected ? selected === item : false}
                />
                <label htmlFor={`tag_${idx}`}>{item}</label>
              </TagContainer>
            );
          })}
        </ul>
      ) : (
        <>
          {/** 선택한 값이 있는 경우 */}
          {/** 미선택 요소 표시 여부 */}
          {selector && typevariants === "primary" && (
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
            <TagContainer key={`select_item`}>
              <input id={`select_item`} type="checkbox" value={selector} onChange={(e) => handleTag(e, typevariants)} />
              <label className="selected-item" htmlFor={`select_item`}>
                {selector}
              </label>
            </TagContainer>

            {showNonSelectors && (
              <>
                {nonSelectors.map((item, idx) => {
                  return item !== selector ? (
                    <TagContainer key={`nonselect_${idx}`}>
                      <input
                        id={`select_${idx}`}
                        type="checkbox"
                        value={item}
                        onChange={(e) => handleTag(e, typevariants)}
                      />
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

export default SearchTag;

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
