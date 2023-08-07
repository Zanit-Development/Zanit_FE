import React from "react";
import { Button } from "../../components/common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { COST, INFO, LIFE } from "./subscribeOption";
import { SubscribeInfo } from "./SubscribeInfo";

export const Subscribe = () => {
  return (
    <>
      <section>
        <h2>
          Zanit,
          <br />
          새로 칵테일 경험의 시작
        </h2>

        <figure>
          <img src="" alt="" />
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
      </section>
      <section>
        <h2>
          Our Service,
          <br />
          Zanit은 어떤 서비스인가요?
        </h2>

        <section>
          쟈닛은 구독형 칵테일 멤버십 서비스로,
          <br />
          월 29,000원에 서울 25개 바에서
          <br />
          매주 1잔, 한 달 4잔의 칵테일을 무료로 즐길 수 있어요
        </section>

        <figure>
          <img src="" alt="" />
          <figcaption>
            원활한 서비스 이용을 위해 1회 결제 시
            <br />
            3개월 멤버십 비용&#40;￦ 87,000원&#41;이 한 번에 결제돼요
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
      </section>

      <section>
        <SubscribeInfo {...COST} />
        <SubscribeInfo {...INFO} />
        <SubscribeInfo {...LIFE} />
      </section>
    </>
  );
};
