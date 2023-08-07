import React from "react";
import { css, styled } from "styled-components";
import { ItemProps } from "../../../libs/interface/interfaceCommon";
import { Link } from "react-router-dom";

export const Item = ({ typeVariants = "primary", ...props }: ItemProps) => {
  return (
    <ItemContainer typeVariants={typeVariants} {...props}>
      <Link to={props.link}>
        <img src={props.url} alt={`${props.name} 썸네일 이미지`} />
        <span>{props.name}</span>
      </Link>
    </ItemContainer>
  );
};

const ItemContainer = styled.li<ItemProps>`
  & img {
    ${(props) => TYPE_VARIANTS[props.typeVariants]}
    width: 100%;
    height: 124px;
    object-fit: cover;
    border-radius: 4px;
  }

  & span {
    display: block;
    width: 100%;
    height: 20px;
    margin-top: 10px;
    padding: 0 10px;
    font-family: var(--font--Medium);
    font-size: 0.875rem;
  }
`;

const TYPE_VARIANTS = {
  primary: css`
    width: 168px;
  `,

  secondary: css`
    width: 124px;
  `,
};