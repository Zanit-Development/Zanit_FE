import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import Layout from "../../layouts/Layout";

import addressIcon from "../../assets/icon/icon_pin.svg";
import timeIcon from "../../assets/icon/icon_clock.svg";
import cocktailIcon from "../../assets/icon/icon_cocktail.png";
import arrow from "./throughArrow.svg";

import Cocktail from "../../components/bardetail/Cocktail";
import Button from "../../components/common/button/Button";
import Tag from "../../components/tag/Tag";
import ImgContainer from "./ImgContainer";

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
              tagId: `tag${idx}`,
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
      </BarInfoContainer>
      <BottomContainer>
        <h3 className="a11y-hidden">칵테일 목록</h3>
        <ul>
          {BarInfo.cocktails.map((cocktail, idx) => (
            <Cocktail key={idx} info={cocktail} idx={idx} />
          ))}
        </ul>
        <Button {...btnOption} />
      </BottomContainer>
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

const Img = styled.img`
  width: 100%;
  height: 200px;

  margin-bottom: 32px;
`;

const BarInfoContainer = styled.section`
  padding: 0 20px;
  margin-bottom: 25px;
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
`;

const grayText = styled.span`
  display: block;
  position: relative;
  color: var(--gray500-color);
  font-family: var(--font--Medium);
  font-size: 12px;
  padding: 5px 0 5px 20px;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 3px;
    left: 0;
  }

  & + span {
    margin-top: 4px;
  }
`;

const Address = styled(grayText)`
  &::before {
    background: url(${addressIcon}) no-repeat center;
  }
`;

const Opening = styled(grayText)`
  &::before {
    background: url(${timeIcon}) no-repeat center / contain;
  }
`;

const CoverCharge = styled(grayText)`
  & > span {
    text-decoration: line-through;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 15px;
      height: 12px;
      top: 3px;
      right: -13px;
      background: url(${arrow}) no-repeat right;
    }
  }

  &::before {
    background: url(${cocktailIcon}) no-repeat center / contain;
  }
  strong {
    margin-left: 18px;
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

const BottomContainer = styled.section`
  padding: 0 20px;

  ul {
    padding: 20px;
    background-color: var(--gray100-color);
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  button {
    margin: 32px 0 42px;
  }
`;

export default Bardetail;
