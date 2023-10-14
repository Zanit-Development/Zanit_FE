/**
 * 랜덤 태그 생성기
 */

const MOOD_LIST = [
  "고즈넉한",
  "고급스러운",
  "데이트장소",
  "로맨틱한",
  "레트로한",
  "모던한",
  "분위기있는",
  "빈티지한",
  "소개팅",
  "신나는",
  "아기자기한",
  "유니크한",
  "우디한",
  "조용한",
  "캐주얼한",
  "힙한",
];
const LOCATION_LIST = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
];

const getRandomIndex = (type: "all" | "mood" | "location", count: number) => {
  const result: number[] = [];
  const maxRandomNumber =
    type === "all" ? MOOD_LIST.length + LOCATION_LIST.length : "mood" ? MOOD_LIST.length : LOCATION_LIST.length;

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
      randomMood.push(MOOD_LIST[index]);
    }
    return randomMood;
  },

  randomLocationTag: (count: number) => {
    const randomIndex = getRandomIndex("location", count);
    const randomMood = [];
    for (const index of randomIndex) {
      randomMood.push(LOCATION_LIST[index]);
    }
    return randomMood;
  },

  randomAllTag: (count: number) => {
    const randomIndex = getRandomIndex("all", count);
    const randomMood = [];
    for (const index of randomIndex) {
      randomMood.push([...MOOD_LIST, ...LOCATION_LIST][index]);
    }
    return randomMood;
  },
};

export default generator;
