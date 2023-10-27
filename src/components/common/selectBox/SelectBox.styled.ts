import React from "react";
import { css, styled } from "styled-components";

type styleType = "primary" | "secondary";

const Common = {
  primary: css`
    background-color: #f4f4f4;
    font-size: 14px;
  `,
  secondary: css`
    background-color: white;
    box-shadow: 0 0 0 1px var(--gray200-color) inset;
    font-size: 13px;
  `,
};

const BoxType = {
  primary: css`
    margin-top: 15px;

    padding: 13px 20px;
  `,
  secondary: css`
    padding: 8.5px 10px;
  `,
};

const ULType = {
  primary: css`
    top: 59px;
    max-height: calc(40px * 5 + 0.5px * 5);
  `,
  secondary: css`
    top: 50px;
    max-height: calc(39px * 5 + 0.5px * 5);
  `,
};

export const SelectWrapper = styled.div<{ $styletype: styleType }>`
  ${({ $styletype }) => Common[$styletype]}
  ${({ $styletype }) => BoxType[$styletype]}

  box-sizing: border-box;

  border-radius: 5px;
  font-family: var(--font--Regular);

  position: relative;
`;

export const Arrow = styled.img<{ $isopen: string }>`
  transition: all 0.5s ease-out;
  transform: ${({ $isopen }) => ($isopen === "true" ? `rotateX(180deg);` : undefined)};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemList = styled.ul<{ $styletype: styleType }>`
  box-sizing: border-box;
  ${({ $styletype }) => Common[$styletype]}
  ${({ $styletype }) => ULType[$styletype]}
  padding: 0 12px;
  width: 100%;
  overflow-y: auto;
  position: absolute;
  left: 0;
  border-radius: 5px;

  z-index: 9999;
`;
