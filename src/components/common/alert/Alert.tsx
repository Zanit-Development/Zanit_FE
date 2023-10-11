import React from "react";
import subtract from "../../../assets/icon/icon_subtract.svg";
import { styled } from "styled-components";

export const Alert = ({ content }: { content: string }) => {
  return (
    <AlertContainer>
      <img src={subtract} alt="alert" />
      <p>{content}</p>
    </AlertContainer>
  );
};

const AlertContainer = styled.article`
  padding: 14px;
  border: 1px solid var(--main-color);
  border-radius: 4px;
  font-family: var(--font--Medium);
  font-size: 0.8rem;
  color: var(--main-color);
  line-height: 1.2rem;

  & img {
    display: inline-block;
    margin-top: 2px;
    vertical-align: top;
  }

  & p {
    width: calc(100% - 30px);
    margin-left: 5px;
    display: inline-block;
    white-space: pre-line;
  }
`;
