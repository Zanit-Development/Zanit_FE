export const BUTTON_VALUE = {
  GO_HOME: "홈으로 가기",
  SUBSCRIBE: "지금 구독하기",
  SEARCH_BAR: "지금 이용 가능한 칵테일바 찾기",
  OK: "확인",

  SIGN: {
    IN: "로그인",
    UP: "회원가입",
  },

  COUPON: {
    USE: "쿠폰 바로 사용하기",
    ZAN: "ZAN 쿠폰 사용하기",
  },

  PAYMENT: {
    CONFIRM: "입금 확인 요청하기",
    APPROVE: "결제 승인하기",
    DISCOUNT: (period: string, rate: number) => `${period}간 ${rate}% 할인받기`,
  },

  ADMIN: {
    SAVE: "저장하기",
    UPDATE: "수정하기",
  },
};
