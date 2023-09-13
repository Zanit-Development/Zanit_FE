import React, { useState } from "react";
import { styled } from "styled-components";

import { ItemProps } from "../../libs/interface/interfaceCommon";

import Item from "../../components/common/item/Item";

import arrowImg from "../../assets/icon/icon_arrow_left.svg";

function pickItem(arr: ItemProps[], idx: number) {
  const left = idx - 1 < 0 ? idx - 1 + arr.length : idx - 1;
  const right = idx + 1 >= arr.length ? idx + 1 - arr.length : idx + 1;

  return [arr[left], arr[idx], arr[right]];
}

const ItemList = (props: { itemOptions: ItemProps[] }) => {
  const { itemOptions } = props;
  const dataLength = itemOptions.length;

  const [idx, setIdx] = useState(1);
  const itemArray = pickItem(itemOptions, idx);
  function left() {
    setIdx((prev) => (prev - 1 + dataLength) % dataLength);
  }
  function right() {
    setIdx((prev) => (prev + 1 + dataLength) % dataLength);
  }

  return (
    <ListContainer>
      <ItemContainer>
        {itemArray.map((item) => {
          return <Item key={item.name} {...item} />;
        })}
      </ItemContainer>
      <button onClick={left}>
        <img src={arrowImg} alt="" />
      </button>
      <button onClick={right}>
        <img src={arrowImg} alt="" />
      </button>
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
  button {
    height: 100px;
    align-self: flex-start;
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
  }
`;

const ItemContainer = styled.ul`
  white-space: nowrap;
  width: calc(100vw - 20px - 10px - 48px);
  overflow: hidden;

  li {
    display: inline-block;
    width: calc((100% - 16px) / 3);
    margin-left: 8px;

    &:first-of-type {
      margin-left: 0;
    }

    img {
      height: 100%;
    }
    span {
      text-align: center;
      margin-top: 8px;
      font-size: 12px;
    }
  }
`;
