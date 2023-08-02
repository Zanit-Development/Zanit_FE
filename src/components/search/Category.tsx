import React from "react";
import { styled } from "styled-components";

interface CategoryProps {
  categorys: string[];
}

export const Category = ({ categorys = [] }: CategoryProps) => {
  return (
    <CategoryContainer>
      {categorys.map((item, idx) => {
        console.log(item);
        return (
          <li>
            <input type="radio" id={`cate_${idx}`} name="menu" key={idx} />
            <label htmlFor={`cate_${idx}`}>{item}</label>
          </li>
        );
      })}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 20px;

  & label {
    display: inline-block;
    width: 50px;
    height: 27px;
    font-family: var(--font--Medium);
    font-size: 1rem;
    text-align: center;
    line-height: 27px;
    color: #ababab;
    cursor: pointer;
  }

  & input:checked + label {
    color: var(--black-color);
    border-bottom: 1px solid var(--main-color);
  }
`;
