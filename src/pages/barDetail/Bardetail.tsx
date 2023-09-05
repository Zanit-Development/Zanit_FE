import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import Layout from "../../layouts/Layout";

import Cocktail from "../../components/bardetail/Cocktail";
import ImgContainer from "../../components/bardetail/ImgContainer";

import Button from "../../components/common/button/Button";
import Tag from "../../components/tag/Tag";
import { Address, Opening, CoverCharge } from "../../components/common/text";

import { ButtonProps, TagProps } from "../../libs/interface/interfaceCommon";
import { BarInfo } from "../../libs/utils/Bardetaildummy";

const Bardetail = () => {
  const navigate = useNavigate();

  const btnOption: ButtonProps = {
    typevariants: "fill",
    sizevariants: "large",
    value: "ZAN 쿠폰 사용하기",
    disabled: false,
    onClick() {
      navigate("/myCoupon");
    },
  };

  return (
    <Layout>
      <ImgContainer barPics={BarInfo.barPics} />
      <BarInfoContainer>
        <h2>{BarInfo.barName}</h2>
        <TagContainer>
          {BarInfo.barMood.map((tag, idx) => {
            const option = {
              typevariants: "secondary",
              value: tag,
              tagId: `tag_${idx}`,
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
      <ButtonContainer>
        <Button {...btnOption} />
      </ButtonContainer>
    </Layout>
  );
};

function generateCoverCharge<T extends number | undefined>(price: T, discount: T) {
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
  p {
    font-family: var(--font--Medium);
    margin-bottom: 12px;
    line-height: 1.5;
  }

  h3 + ul {
    margin-top: 25px;
    padding: 20px;
    background-color: var(--gray100-color);

    display: flex;
    flex-direction: column;
    gap: 26px;
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

const ButtonContainer = styled.section`
  margin: 32px 0 42px;
  padding: 0 20px;
`;

export default Bardetail;
