import React from "react";
import { styled } from "styled-components";

import { Item } from "../../components/common/item/Item";

import { listProps } from "../../libs/interface/interfaceHome";

import arrowImg from "../../assets/icon/icon_arrow_left.svg";

const ItemList: React.FC<listProps> = ({ ...props }) => {
  return (
    <>
      <TitleStyle {...props}>
        {/* <img src={props.img} alt="" /> */}
        <h2>{props.title}</h2>
        <span>지금 당신을 기다리고 있는</span>
      </TitleStyle>
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
    </>
  );
};

export default ItemList;

const TitleStyle = styled.div<listProps>`
  display: flex;
  font-family: var(--font--Medium);

  margin-left: 20px;
  margin-bottom: 20px;
  padding-left: 20px;

  position: relative;

  h2,
  span {
    margin-left: 4px;
  }

  h2 {
    font-size: 1.25rem;
  }
  h2::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 20px;
    height: 20px;
    background: url(${(props) => props.img}) no-repeat center;
  }
  span {
    font-size: 0.75rem;
    color: var(--gray500-color);
    margin-top: 7px;
  }
`;

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
