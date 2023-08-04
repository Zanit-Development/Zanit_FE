import React from "react";
import { styled } from "styled-components";

const SectionTitle: React.FC<{ title: string; img: string }> = ({ ...props }) => {
  return (
    <TitleStyle>
      <img src="" alt="" />
      <h2>{props.title}</h2>
      <p>지금 당신을 기다리고 있는</p>
    </TitleStyle>
  );
};

const TitleStyle = styled.section`
  display: flex;
  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    font-family: "noto sans";
    line-height: 20px;
  }
  p {
    margin-left: 4px;
    font-size: 0.75rem;
    color: var(--gray500-color);
    font-family: "Noto Sans KR";
    line-height: 22px;
  }
`;

export default SectionTitle;
