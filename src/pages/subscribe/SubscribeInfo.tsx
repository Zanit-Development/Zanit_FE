import React from "react";
import { SubScribeProps } from "../../libs/interface/interfaceSubscribe";
import { styled } from "styled-components";

export const SubscribeInfo = ({ title, src, content }: SubScribeProps) => {
  return (
    <>
      <InfoContainer>
        <figure>
          <div>
            <img src={src} alt="icon" />
          </div>
          <figcaption>
            <h2>{title}</h2>
            {content}
          </figcaption>
        </figure>
      </InfoContainer>
    </>
  );
};

const InfoContainer = styled.section`
  & figure {
    & > div {
      display: inline-block;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 30px;
      background-color: var(--gray100-color);
      vertical-align: top;

      & img {
        margin-top: 50%;
        transform: translateY(-50%);
        width: 25px;
        aspect-ratio: 1/1;
      }
    }

    & figcaption {
      display: inline-block;
      width: calc(100% - 70px);
      font-family: var(--font--Regular);
      font-size: 14px;
      text-align: left;
      line-height: 16px;
      vertical-align: middle;
      white-space: pre-line;

      & > h2 {
        color: black;
        font-family: var(--font--Bold);
        line-height: 22px;
      }

      color: var(--gray500-color);
      line-height: 20px;
      margin-bottom: 0;
    }
  }
`;
