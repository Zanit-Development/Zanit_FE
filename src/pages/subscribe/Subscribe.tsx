import React from "react";
import { css, styled } from "styled-components";
import Layout from "../../layouts/Layout";
import Button from "../../components/common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { CONTENT1, CONTENT2, CONTENT3, DiscountOptions, EVENT } from "./subscribeOption";
import { SubscribeInfo } from "./SubscribeInfo";
import promotion from "../../assets/promo.png";
import { DiscountCoupon } from "./DiscountCoupon";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();

  return (
    <Layout>
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

        <div>
          <Button {...BUTTON_OPTIONS.SUBSCRIBE} onClick={() => navigate("/subscribe/start")}></Button>
        </div>
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
          서울의 선별된 다양한 Bar에서
          <br />
          매주 1잔, 한 달 4잔의 칵테일을 무료로 즐길 수 있어요
        </p>

        <article>
          <DiscountCoupon {...DiscountOptions}></DiscountCoupon>
          <p>
            <strong>
              <time dateTime={EVENT.DATE_TIME}>{EVENT.DATE_OUTPUT_DATE}</time>일까지 진행되는 얼리버드 특가
            </strong>
            를 통해
            <br />
            25% 할인된 가격으로 멤버십을 즐겨보세요!
          </p>
        </article>

        <Button {...BUTTON_OPTIONS.DISCOUNT} onClick={() => navigate("/subscribe/start")} />
      </StyledSectionMiddle>

      <StyledSectionBottom>
        <SubscribeInfo {...CONTENT1} />
        <SubscribeInfo {...CONTENT2} />
        <SubscribeInfo {...CONTENT3} />

        <Button {...BUTTON_OPTIONS.SUBSCRIBE_NOW} onClick={() => navigate("/subscribe/start")}></Button>
      </StyledSectionBottom>
    </Layout>
  );
};

export default Subscribe;

const Container = css`
  width: 100%;
  padding: 0 20px 40px;
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
    white-space: pre-line;
    line-height: 22px;
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
  line-height: 22px;
`;

const StyledSectionTop = styled.section`
  ${Container}

  /* & figure {
    margin-left: -10px;
  } */

  h2 {
    padding-left: 11px;
  }

  padding-right: 10px;
  padding-left: 10px;

  & img {
    width: 100%;
  }

  figure {
    margin-bottom: 24px;
    img {
      width: 370px;
      aspect-ratio: 37/18;
    }
  }

  & > section {
    padding: 0 11px;
    margin-bottom: 30px;
  }
  div {
    padding: 0 10px;
  }
`;

const StyledSectionMiddle = styled.section`
  ${Container}
  background-color: #f0f0f0;

  & > h2 {
    margin-bottom: 24px;
  }

  padding: 32px 20px 58px;

  /* 없어도 될것 같은! */
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
      white-space: pre-line;
    }
  }

  & > article {
    margin: 32px 0;
  }

  & > article > p {
    margin-top: 25px;
    font-family: var(--font--Medium);
    & > strong {
      font-family: var(--font--Bold);
    }
    text-align: center;
    white-space: pre-line;

    & strong {
      color: var(--main-color);
    }
  }
`;
const StyledSectionBottom = styled.section`
  ${Container}
  padding-top: 32px;
  padding-bottom: 85px;

  & section:first-of-type figure {
    margin-top: 0;
    margin-bottom: 23px;
  }
  & section:last-of-type figure {
    margin-top: 24px;
    margin-bottom: 0;
  }

  & > button {
    margin-top: 61px;
  }
`;
