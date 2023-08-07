import React from "react";
import { styled } from "styled-components";

import { ItemProps } from "../../libs/interface/interfaceCommon";

import { Item } from "../../components/common/item/Item";

import arrowImg from "../../assets/icon/icon_arrow_left.svg";

const ItemList: React.FC<{ itemOptions: ItemProps[] }> = (props) => {
  return (
    <ListContainer>
      <button>
        <img src={arrowImg} alt="" />
      </button>
      <ItemContainer>
        {props.itemOptions.map((item) => {
          return <Item {...item} />;
        })}
      </ItemContainer>
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

  button {
    height: 100px;
    align-self: flex-start;
    img {
      width: 24px;
    }

    &:nth-of-type(2) {
      transform: rotateY(180deg);
    }
  }
`;

const ItemContainer = styled.ul`
  white-space: nowrap;
  width: 316px;
  overflow: hidden;

  li {
    display: inline-block;
    width: calc((390px - 20px - 16px - 48px - 10px) / 3);
    margin-left: 8px;

    &:first-of-type {
      margin-left: 0;
    }

    img {
      height: calc((390px - 20px - 16px - 48px - 10px) / 3);
    }
    span {
      width: calc(100% - 20px);
      margin-top: 8px;
      font-size: 12px;
    }
  }
`;
