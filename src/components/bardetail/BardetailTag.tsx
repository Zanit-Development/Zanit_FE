import React from "react";
import { styled } from "styled-components";

const BardetailTag = (props: { label: string }) => {
  return <TagItem>{props.label}</TagItem>;
};

const TagItem = styled.span`
  font-family: var(--font--Bold);
  font-size: 12px;
  text-align: center;
  color: var(--gray500-color);

  border: 1px solid;
  border-radius: 87px;

  width: fit-content;
  padding: 5.5px 12px;
  box-sizing: border-box;
`;

export default BardetailTag;
