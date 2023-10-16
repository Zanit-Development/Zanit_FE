/**
 * 랜덤 태그 생성기
 */

import { barLocationTagOption, barMoodTagOption } from "../../pages/search/options";

const getRandomIndex = (type: "all" | "mood" | "location", count: number) => {
  const result: number[] = [];
  const maxRandomNumber =
    type === "all"
      ? barMoodTagOption.length + barLocationTagOption.length
      : "mood"
      ? barMoodTagOption.length
      : barLocationTagOption.length;

  if (maxRandomNumber < count) {
    throw new Error("태그 개수보다 카운트 수가 많습니다.");
  }

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * maxRandomNumber);

    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }

  return result;
};

const generator = {
  randomMoodTag: (count: number) => {
    const randomIndex = getRandomIndex("mood", count);
    const randomMood = [];
    for (const index of randomIndex) {
      randomMood.push(barMoodTagOption[index]);
    }
    return randomMood;
  },

  randomLocationTag: (count: number) => {
    const randomIndex = getRandomIndex("location", count);
    const randomMood = [];
    for (const index of randomIndex) {
      randomMood.push(barLocationTagOption[index]);
    }
    return randomMood;
  },

  randomAllTag: (count: number) => {
    const randomIndex = getRandomIndex("all", count);
    const randomMood = [];
    for (const index of randomIndex) {
      randomMood.push([...barMoodTagOption, ...barLocationTagOption][index]);
    }
    return randomMood;
  },
};

export default generator;
