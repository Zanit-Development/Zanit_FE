import React from "react";
import { styled } from "styled-components";

import { ItemProps } from "../../libs/interface/interfaceCommon";

import Item from "../../components/common/item/Item";

import arrowImg from "../../assets/icon/icon_arrow_left.svg";

const ItemList = (props: { itemOptions: ItemProps[] }) => {
  return (
    <ListContainer>
      <ItemContainer>
        {props.itemOptions.map((item) => {
          return <Item {...item} />;
        })}
      </ItemContainer>
      <button>
        <img src={arrowImg} alt="" />
      </button>
      <button>
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
