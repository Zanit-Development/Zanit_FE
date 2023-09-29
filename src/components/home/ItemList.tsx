import React, { useState } from "react";
import { styled } from "styled-components";

import { ItemProps } from "../../libs/interface/interfaceCommon";

import Item from "../../components/common/item/Item";

import arrowImg from "../../assets/icon/icon_arrow_left.svg";

function pickItem(arr: ItemProps[], idx: number) {
  const left = (idx - 1 + arr.length) % arr.length;
  const right = (idx + 1) % arr.length;

  return [arr[left], arr[idx], arr[right]];
}

const ItemList = (props: { itemOptions: ItemProps[] }) => {
  const { itemOptions } = props;
  // console.log(itemOptions);
  const dataLength = itemOptions!.length;

  const [idx, setIdx] = useState(1);
  const itemArray = pickItem(itemOptions!, idx);
  function handleLeft() {
    setIdx((prev) => (prev - 1 + dataLength) % dataLength);
  }
  function handleRight() {
    setIdx((prev) => (prev + 1) % dataLength);
  }

  return (
    <ListContainer>
      <ItemContainer>
        {itemArray.map((item) => {
          return <Item key={item.name} {...item} />;
        })}
      </ItemContainer>
      <ArrowButton onClick={handleLeft}>
        <img src={arrowImg} alt="" />
      </ArrowButton>
      <ArrowButton onClick={handleRight}>
        <img src={arrowImg} alt="" />
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
      aspect-ratio: 1/1;
      /* 애매.. */
      object-fit: contain;
    }
    span {
      text-align: center;
      margin-top: 8px;
      font-size: 12px;
    }
  }
`;
