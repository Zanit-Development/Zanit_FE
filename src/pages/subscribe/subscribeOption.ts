/**
 * 구독 페이지 옵션 및 상수
 *
 * 상수
 * COST : 매월 결제 금액
 * BAR_COUNT : 서울 바 개수
 * MEMBERSHIP : 1회 (3개월) 결제 금액
 * EVENT : 이벤트 기한
 *  - DATE_TIME : time 요소 datetime 속성 전용(형식)
 *  - DATE_OUTPUT : 사용자가 확인할 날짜
 */

import usd from "../../assets/icon/icon_usd_circle.svg";
import list from "../../assets/icon/icon_list.svg";
import smile from "../../assets/icon/icon_smile.svg";

export const COST = "29,000";
export const BAR_COUNT = 25;
export const MEMBERSHIP_COST = "87,000";
export const EVENT = {
  DATE_TIME: "2023-07-26",
  DATE_OUTPUT_DATE: "7/26",
  DATE_OUTPUT_WEEK: "목",
};

export const ALERT_PAYMENT_MANUAL = `
  현재 결제 방법은 무통장입금을 지원하고 있습니다. 
  멤버십 만료일은 결제일로부터 3개월 뒤입니다.
`;
export const ALERT_PAYMENT_GUIDE = `
  쟈닛 멤버십은 ${EVENT.DATE_OUTPUT_DATE}(${EVENT.DATE_OUTPUT_WEEK})부터 이용이 가능해요.
  Zanit 카카오 플러스 채널을 통해 당일부터 바로 이용할 수 있도록 알림을 보내드릴게요 :)
`;

export const CONTENT1 = {
  title: "합리적인 가격",
  src: usd,
  content: `
    월 ${COST}원이라는 얼리버드 특가를 통해 
    매주 한 잔의 새로운 칵테일을 즐겨봐요
  `,
};

export const CONTENT2 = {
  title: "칵테일과 바(Bar)에 대한 다양한 정보",
  src: list,
  content: `
    특별한 칵테일과 높은 접근성을 가졌지만 
    차별화된 분위기의 바를 큐레이션 해드려요
  `,
};

export const CONTENT3 = {
  title: "쉬워지는 칵테일 생활",
  src: smile,
  content: `
    매주 찾아오는 칵테일 한 잔을 경험하며
    칵테일과 친해질 수 있어요.
  `,
};
