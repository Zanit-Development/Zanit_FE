import React from "react";
import { styled } from "styled-components";

import { CocktailProps } from "../../libs/interface/interfaceBarDetail";
import BardetailTag from "./BardetailTag";

const Cocktail: React.FC<{ info: CocktailProps }> = (props) => {
  return (
    <Item>
      <img src={props.info.img} alt="" />
      <strong>{props.info.title}</strong>
      <BardetailTag label={"#" + props.info.level} />
      <p>
        대표적인 레이디 킬러 칵테일 중 하나로, <br />
        달콤한 맛에 비해 도수가 무려 20도를 넘어선다. IBA 공식 칵테일에 등록되어 있는 레시피 중 하나
      </p>
    </Item>
  );
};

const Item = styled.li`
  display: grid;
  height: fit-content;
  grid-template:
    "img img head head tag"
    "img img desc desc desc";
  padding-bottom: 7px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 4px;
    margin-right: 10px;
    grid-area: img;
    align-self: flex-end;
  }
  strong {
    font-family: var(--font--Bold);
    font-size: 13px;
    grid-area: head;
    align-self: center;
  }
  span {
    grid-area: tag;
    justify-self: end;
  }
  p {
    font-family: var(--font--Regular);
    font-size: 11px;
    line-height: 16px;
    margin-top: 4px;
    grid-area: desc;
  }
`;

export default Cocktail;
