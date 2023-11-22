import React, { useState } from "react";
import { styled } from "styled-components";

import { ItemProps } from "../../libs/interface/interfaceCommon";

import Item from "../../components/common/item/Item";

import arrowImg from "../../assets/icon/icon_arrow_left.svg";

function pickItem(arr: ItemProps[], idx: number) {
  const len = arr.length;

  if (len < 3) {
    const temp: (ItemProps | string)[] = arr;
    while (temp.length < 3) {
      temp.push("empty");
    }
    return temp;
  }

  const left = (idx - 1 + len) % len;
  const right = (idx + 1) % len;

  return [arr[left], arr[idx], arr[right]];
}

const ItemList = (props: { itemOptions: ItemProps[] }) => {
  const { itemOptions } = props;
  const dataLength = itemOptions!.length;
  const [idx, setIdx] = useState(1);
  const itemArray = pickItem(itemOptions, idx);
  function handleLeft() {
    setIdx((prev) => (prev - 1 + dataLength) % dataLength);
  }
  function handleRight() {
    setIdx((prev) => (prev + 1) % dataLength);
  }

  return (
    <ListContainer>
      <ItemContainer>
        {itemArray.map((item: ItemProps | string, idx) => {
          if (typeof item !== "string") {
            return <Item key={item.name + "_" + idx} {...item} />;
          }
          return <li className="empty"></li>;
        })}
      </ItemContainer>
      <ArrowButton onClick={handleLeft} className={dataLength <= 3 ? "disabled" : ""}>
        <img src={arrowImg} alt="더보기(왼쪽)" />
      </ArrowButton>
      <ArrowButton onClick={handleRight} className={dataLength <= 3 ? "disabled" : ""}>
        <img src={arrowImg} alt="더보기(오른쪽)" />
      </ArrowButton>
    </ListContainer>
  );
};

export default ItemList;

const ListContainer = styled.section`
  padding: 0 10px;
  display: flex;
  align-items: center;

  gap: 5px;

  ul {
    order: 2;
  }
`;

const ArrowButton = styled.button`
  height: 100px;
  align-self: flex-start;
  cursor: pointer;
  img {
    width: 24px;
  }

  &:first-of-type(1) {
    order: 1;
  }

  &:nth-of-type(2) {
    transform: rotateY(180deg);
    order: 3;
  }

  &.disabled {
    cursor: initial;
    pointer-events: none;
  }
`;

const ItemContainer = styled.ul`
  width: 100%;

  li {
    display: inline-block;
    width: calc((100% - 16px) / 3);
    margin-left: 8px;
    vertical-align: top;

    &.empty {
      aspect-ratio: 1/1;
      background-color: var(--gray200-color);
      border-radius: 4px;
    }

    &:first-of-type {
      margin-left: 0;
    }

    img {
      height: 100%;
      aspect-ratio: 1/1;
      /* 애매.. */
      object-fit: contain;
      box-sizing: border-box;
      border: 1px solid #ddd;
    }
    span {
      text-align: center;
      margin-top: 8px;
      font-size: 12px;
    }
  }
`;
