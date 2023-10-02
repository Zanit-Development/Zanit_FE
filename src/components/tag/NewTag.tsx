import React, { useState, useEffect } from "react";
import { css, styled } from "styled-components";
import { INPUT_EVENT } from "../../libs/interface/typeEvent";
import { TAG_TYPE_VARIANTS } from "../../libs/interface/typeCommon";
import arrow from "../../assets/icon/icon_arrow_down.svg";

interface NewTagListOption {
  itemlist: string[];
  typevariants: TAG_TYPE_VARIANTS;
  settag?: (value: string) => void;
}

const NewTag = ({ typevariants, itemlist, settag }: NewTagListOption) => {
  const items = itemlist;
  const [selector, setSelector] = useState("");
  const [nonSelectors, setNonSelectors] = useState<string[]>(itemlist);
  const [showNonSelectors, setShowNonSelectors] = useState(false);

  useEffect(() => {
    settag!(selector);
    setNonSelectors(items.filter((item) => item !== selector));
  }, [items, selector, settag]);

  const handleTag = (e: INPUT_EVENT, typevariants: TAG_TYPE_VARIANTS) => {
    if (typevariants !== "primary") return;

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
              <TagContainer key={`select_${idx}`} typevariants={typevariants}>
                <input
                  id={`tag_${idx}`}
                  type="checkbox"
                  value={item}
                  onChange={(e) => handleTag(e, typevariants)}
                  defaultChecked={false}
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
          {selector && (
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
            <TagContainer key={`select_item`} typevariants={typevariants}>
              <input id={`select_item`} type="checkbox" value={selector} onChange={(e) => handleTag(e, typevariants)} />
              <label className="selected-item" htmlFor={`select_item`}>
                {selector}
              </label>
            </TagContainer>

            {showNonSelectors && (
              <>
                {nonSelectors.map((item, idx) => {
                  return item !== selector ? (
                    <TagContainer key={`select_${idx * 2}`} typevariants={typevariants}>
                      <input
                        id={`select_${idx}`}
                        type="checkbox"
                        value={item}
                        onChange={(e) => handleTag(e, typevariants)}
                        defaultChecked={true}
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

export default NewTag;

const TYPE_VARIANTS = {
  primary: css`
    padding: 8px;
    background-color: var(--gray100-color);
    font-family: var(--font--Medium);
    color: var(--black-color);
  `,

  secondary: css`
    padding: 3px;
    background-color: var(--main-color);
    font-family: var(--font--semibold);
    color: white;
  `,

  tertiary: css`
    padding: 3px;
    background-color: transparent;
    outline: 1px solid var(--gray500-color);
    font-family: var(--font--Bold);
    color: var(--gray500-color);
  `,
};

interface TagContainerOption {
  typevariants: TAG_TYPE_VARIANTS;
}

const TagContainer = styled.li<TagContainerOption>`
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
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 20px;
    user-select: none;
    cursor: pointer;

    ${(props) => TYPE_VARIANTS[props.typevariants]}
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
