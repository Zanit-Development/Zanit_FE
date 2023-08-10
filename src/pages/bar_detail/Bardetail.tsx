import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

import Layout from "../../layouts/Layout";

import addressIcon from "../../assets/icon/icon_pin.svg";
import timeIcon from "../../assets/icon/icon_clock.svg";

import Cocktail from "../../components/bardetail/Cocktail";
import BardetailTag from "../../components/bardetail/BardetailTag";
import Button from "../../components/common/button/Button";

import { ButtonProps } from "../../libs/interface/interfaceCommon";
import { BarInfo } from "../../libs/utils/Bardetaildummy";

const Bardetail: React.FC = () => {
  const navigate = useNavigate();

  const btnOption: ButtonProps = {
    typeVariants: "primary",
    sizeVariants: "large",
    value: "ZAN 쿠폰 사용하기",
    disabled: false,
    onClick(e) {
      navigate("/myCoupon");
    },
  };

  return (
    <Layout>
      <Img src={BarInfo.img} alt="바 이미지" />
      <BarInfoContainer>
        <h2>{BarInfo.title}</h2>
        <TagContainer>
          {BarInfo.tags.map((tag, idx) => {
            return (
              <li key={idx}>
                <BardetailTag label={tag} />
              </li>
            );
          })}
        </TagContainer>
        <p>{BarInfo.description}</p>
        <address>{BarInfo.address}</address>
        <ul>
          {BarInfo.openHours.map((time, idx) => {
            return <li key={idx}>{time}</li>;
          })}
        </ul>
      </BarInfoContainer>
      <BottomContainer>
        <h3 className="a11y-hidden">칵테일 목록</h3>
        <ul>
          {BarInfo.cocktails.map((cocktail, idx) => (
            <Cocktail key={idx} info={cocktail} />
          ))}
        </ul>
        <Button {...btnOption} />
      </BottomContainer>
    </Layout>
  );
};

const Img = styled.img`
  width: 100%;
  height: 200px;

  margin-bottom: 32px;
`;

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
  }

  address,
  address + ul {
    position: relative;
    color: var(--gray500-color);
    font-family: var(--font--Medium);
    font-size: 12px;
    padding-left: 20px;
    padding-top: 2px;
  }

  address + ul {
    margin: 10px 0 25px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  address::before,
  address + ul::before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0.5px;
    left: 0;
  }

  address::before {
    background: url(${addressIcon}) no-repeat center;
  }

  address + ul::before {
    background: url(${timeIcon}) no-repeat center;
  }
`;

const TagContainer = styled.ul`
  margin-bottom: 18px;
  li {
    display: inline-block;
  }
  li + li {
    margin-left: 10px;
  }
  span {
    display: block;
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
