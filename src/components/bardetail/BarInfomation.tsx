import React from "react";

import { styled } from "styled-components";

import Cocktail from "../common/cocktail/Cocktail";
import ImgContainer from "../../components/bardetail/ImgContainer";

import Tag from "../../components/tag/Tag";
import { Address, Opening, CoverCharge } from "../../components/common/text";

import { TagProps } from "../../libs/interface/interfaceCommon";
import { BarInfo } from "../../libs/utils/Bardetaildummy";

export default function BarInfomation() {
  return (
    <>
      <ImgContainer barPics={BarInfo.barPics} />
      <BarInfoContainer>
        <h2>{BarInfo.barName}</h2>
        <TagContainer>
          {BarInfo.barMood.map((tag, idx) => {
            const option = {
              typevariants: "secondary",
              value: tag,
              tagid: `tag_${idx}`,
            };
            return (
              <li key={idx}>
                <Tag {...(option as TagProps)} />
              </li>
            );
          })}
        </TagContainer>
        <p>{BarInfo.description}</p>
        <Address>{BarInfo.barLocation}</Address>
        <Opening>{BarInfo.openhours}</Opening>
        {generateCoverCharge(10000, 1000)}
        <h3 className="a11y-hidden">칵테일 목록</h3>
        <ul>
          {BarInfo.cocktails.map((cocktail, idx) => (
            <Cocktail key={idx} info={cocktail} idx={idx} />
          ))}
        </ul>
      </BarInfoContainer>
    </>
  );
}

type coverchargeType = number | undefined;
function generateCoverCharge<T extends coverchargeType>(price: T, discount: T) {
  if (price === undefined) return null;

  const priceText = !!discount ? <span>{price}원</span> : `${price}원`;
  const discountText = !!discount ? <strong>{discount}원 (쟈닛 고객 한정 할인)</strong> : "";

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
  }
`;

const TagContainer = styled.ul`
  margin-bottom: 16px;
  li {
    display: inline-block;
  }
  li + li {
    margin-left: 10px;
  }
  label {
    padding: 2.5px 12px;
    cursor: initial;
  }
`;
