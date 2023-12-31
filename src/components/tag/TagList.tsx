import React, { useState, useEffect, useMemo } from "react";
import { styled } from "styled-components";
import Tag from "./Tag";
import { TagProps } from "../../libs/interface/interfaceCommon";

function pickRandom(arr: string[]) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

const TagList = () => {
  const levels = useMemo(() => ["입문자용", "캐주얼드링커용", "헤비드링커용"], []);
  const moods = useMemo(() => ["고급스러운", "캐주얼한", "신나는", "고즈넉한", "로맨틱한", "아기자기한", "레트로한", "유니크한", "우디한", "모던한", "빈티지한"], []);
  const citys = useMemo(
    () => ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구"],
    []
  );
  const [tagOptions, setTagOptions] = useState<string[]>([]);

  function setCategory(value: string) {
    if (levels.includes(value)) {
      return "cocktail";
    } else if (moods.includes(value)) {
      return "barMood";
    } else if (citys.includes(value)) {
      return "barLocation";
    }
  }

  useEffect(() => {
    setTagOptions([pickRandom(levels), pickRandom(moods), pickRandom(citys)]);
  }, [levels, moods, citys]);
  return (
    <TagContainer>
      {tagOptions.map((item, idx) => {
        const tagOptions: TagProps = {
          typevariants: "primary",
          value: item,
          category: setCategory(item),
        };

        return <Tag {...tagOptions} key={idx} />;
      })}
    </TagContainer>
  );
};

export default TagList;

const TagContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 36px;
  padding: 0 20px;

  label {
    font-family: var(--font--Medium);
    font-size: 12px;
    padding: 6px 16px;
  }
`;
