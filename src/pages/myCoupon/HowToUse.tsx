import React from "react";
import { Layout } from "../../layouts/Layout";
import { Button } from "../../components/common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { styled } from "styled-components";

export const HowToUse = () => {
  return (
    <Layout>
      <H2>ZAN 쿠폰 이용방법</H2>
      <DesSection>
        <ol>
          <li>
            지금 이용 가능한 칵테일바를 둘러보고, <br />
            해당 Bar에서 맛보고 싶은 칵테일을 골라보세요
          </li>
          <li>실제 Bar에 방문하여 맛보고 싶은 칵테일을 주문한 뒤 맛있게 즐겨주세요</li>
          <li>결제 시, &#91;내 쿠폰함&#93;에 들어가 &#91;쿠폰 바로 사용하기&#93;를 누르고 방문한 Bar와 마신 칵테일을 선택해주세요</li>
          <li>사장님께 화면을 제시해 결제를 완료하면 끝!</li>
        </ol>
        <Button {...BUTTON_OPTIONS.HOWTOUSE} />
      </DesSection>
    </Layout>
  );
};

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;

const DesSection = styled.div`
  margin: 0 20px 150px;

  ol {
    padding: 20px;
    background: var(--gray100-color);
    font-family: var(--font--Medium);
    font-size: 14px;
    border-radius: 5px;
    padding-inline-start: 40px;
    margin-bottom: 50px;

    li {
      list-style: decimal;
      margin-bottom: 12px;
      line-height: 1.7;

      &:nth-of-type(4) {
        margin-bottom: 0;
      }
    }
  }

  button {
    width: 100%;
    text-align: center;
  }
`;
