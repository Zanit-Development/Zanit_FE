import React from "react";

import { styled } from "styled-components";

import Cocktail from "../common/cocktail/Cocktail";
import ImgContainer from "./ImgContainer";

import Tag from "../tag/Tag";
import { Address, Opening, CoverCharge } from "../common/text";

import { TagProps } from "../../libs/interface/interfaceCommon";
import { BarProps } from "../../libs/interface/interfaceBarDetail";

export default function BarInfomation({ BarInfo }: { BarInfo: BarProps }) {
  const tagOption = {
    typevariants: "secondary",
    value: BarInfo.barMood,
    tagid: BarInfo.barMood,
  };
  return (
    <>
      <ImgContainer barPics={BarInfo.barPics.join(" ")} />
      <BarInfoContainer>
        <h2>{BarInfo.barName}</h2>
        <TagContainer>
          <Tag {...(tagOption as TagProps)} />
        </TagContainer>
        <p>{BarInfo.barDetail}</p>
        <Address>{BarInfo.barLocation}</Address>
        <Opening>{BarInfo.openHours}</Opening>
        {generateCoverCharge(BarInfo.price, BarInfo.coverCharge)}
        <h3 className="a11y-hidden">칵테일 목록</h3>
        <ul>
          {BarInfo.barsCocktail.length ? (
            BarInfo.barsCocktail.map((cocktail, idx) => (
              <li key={idx}>
                <Cocktail type="primary" info={cocktail} idx={idx} />
              </li>
            ))
          ) : (
            <p>등록된 칵테일이 없습니다</p>
          )}
        </ul>
      </BarInfoContainer>
    </>
  );
}

type coverchargeType = string | undefined;
function generateCoverCharge<T extends coverchargeType>(price: T, coverCharge: T) {
  if (price === undefined) return null;

  const priceText = !!coverCharge ? <span>{price}원</span> : `${price}원`;
  const discountText = !!coverCharge ? (
    <strong>{parseInt(price) - parseInt(coverCharge)}원 (쟈닛 고객 한정 할인)</strong>
  ) : (
    ""
  );

  return (
    <CoverCharge>
      커버차지 {priceText}
      {discountText}
    </CoverCharge>
  );
}

const BarInfoContainer = styled.section`
  padding: 0 20px;
  h2 {
    font-family: var(--font--Bold);
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 24px;
  }
  & > p {
    font-family: var(--font--Medium);
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.5;
    white-space: pre-line;
  }

  h3 + ul {
    margin-top: 13px;
    padding: 20px;
    background-color: var(--gray100-color);

    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      font-size: 14px;
      font-family: var(--font--Medium);
    }
  }
`;

const TagContainer = styled.div`
  margin-bottom: 16px;

  label {
    padding: 2.5px 12px;
    cursor: initial;
  }
`;
