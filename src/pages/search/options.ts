export const categoryList = [
  ["추천", "barName"],
  ["칵테일", "cocktail"],
  ["분위기", "barMood"],
  ["위치", "barLocation"],
];

export const barBaseTagOptions = [
  [0, "로맨틱한"],
  [1, "데이트장소"],
  [2, "조용한"],
  [3, "청담동"],
  [4, "신나는"],
  [5, "분위기있는"],
  [6, "힙한"],
  [7, "소개팅"],
] as Array<number & string>;

export const barMoodTagOption = [
  [0, "로맨틱한"],
  [1, "데이트장소"],
  [2, "조용한"],
  [3, "신나는"],
  [4, "분위기있는"],
  [5, "힙한"],
  [6, "소개팅"],
] as Array<number & string>;

export const barLocationTagOption = [
  [0, "강동구"],
  [1, "강서구"],
  [2, "강남구"],
  [3, "청담동"],
] as Array<number & string>;

export const cocktailTagOption = [
  [0, "입문자용"],
  [1, "캐주얼드링커용"],
  [2, "헤비드링커용"],
] as Array<number & string>;
