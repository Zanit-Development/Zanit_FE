import React from "react";
import { css, styled } from "styled-components";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { COST, INFO, LIFE } from "./subscribeOption";
import { SubscribeInfo } from "./SubscribeInfo";
import promotion from "../../assets/promo.png";
import coupon from "../../assets/subscribe.svg";
import subtract from "../../assets/icon/icon_subtract.svg";

const Subscribe = () => {
  return (
    <>
      <StyledSectionTop>
        <Title>
          Zanit,
          <br />
          새로운 칵테일 경험의 시작
        </Title>

        <figure>
          <img src={promotion} alt="프로모션 이미지" />
        </figure>

        <section>
          <p>
            쟈닛은 사람들이 다양한 술을
            <br />
            쉽게 즐길 수 있는 세상을 꿈꾸고 있습니다.
          </p>

          <p>
            하지만 여전히 많은 사람들이
            <br />
            칵테일(고급주류)에 대한 진입장벽을 느끼곤 합니다.
          </p>

          <p>
            저희는 구독형 칵테일 멤버십 서비스을 통해
            <br />
            이러한 어려움을 해결하며
            <br />더 즐거운 칵테일 경험을 제공하고자 합니다.
          </p>
        </section>

        <Button {...BUTTON_OPTIONS.SUBSCRIBE}></Button>
      </StyledSectionTop>

      <StyledSectionMiddle>
        <Title>
          Our Service,
          <br />
          Zanit은 어떤 서비스인가요?
        </Title>

        <p>
          쟈닛은 구독형 칵테일 멤버십 서비스로,
          <br />
          월 29,000원에 서울 25개 바에서
          <br />
          매주 1잔, 한 달 4잔의 칵테일을 무료로 즐길 수 있어요
        </p>

        <figure>
          <img src={coupon} alt="" />
          <figcaption>
            <img src={subtract} alt="" />
            <p>
              원활한 서비스 이용을 위해 1회 결제 시
              <br />
              3개월 멤버십 비용&#40;￦ 87,000원&#41;이 한 번에 결제돼요
            </p>
          </figcaption>
        </figure>

        <article>
          <p>
            <strong>
              <time dateTime="07-26">7/26</time>일까지 진행되는 얼리버드 특가
            </strong>
            를 통해
            <br />
            3개월간 할인된 가격으로 멤버십을 즐겨보세요!
          </p>
        </article>

        <Button {...BUTTON_OPTIONS.DISCOUNT} />
      </StyledSectionMiddle>

      <StyledSectionBottom>
        <SubscribeInfo {...COST} />
        <SubscribeInfo {...INFO} />
        <SubscribeInfo {...LIFE} />

        <Button {...BUTTON_OPTIONS.SUBSCRIBE}></Button>
      </StyledSectionBottom>
    </>
  );
};

export default Subscribe;

const Container = css`
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;

  & figure {
    margin: 20px 0;
    text-align: center;
  }

  & p {
    margin-bottom: 15px;
    font-family: var(--font--Medium);
    font-size: 14px;
    line-height: 18px;
  }

  & button {
    width: 100%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: var(--font--Bold);
  font-size: 18px;
`;

const StyledSectionTop = styled.section`
  ${Container}
  & figure {
    margin-left: -10px;
  }
`;
const StyledSectionMiddle = styled.section`
  ${Container}
  background-color: #f0f0f0;

  & figure {
    width: 100%;
    & > img {
      width: 100%;
    }

    & > figcaption {
      text-align: left;
    }

    & > figcaption > p {
      display: inline-block;
      padding-left: 5px;
      font-size: 11px;
      color: #404040;
      text-align: left;
      line-height: 13px;
    }
  }

  & > article > p {
    margin-bottom: 20px;
    font-family: var(--font--Bold);
    text-align: center;

    & strong {
      color: var(--main-color);
    }
  }
`;
const StyledSectionBottom = styled.section`
  ${Container}
`;
