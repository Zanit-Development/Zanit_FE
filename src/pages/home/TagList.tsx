import React, { useState, useEffect } from "react";
import { Tag } from "../../components/tag/Tag";
import { TagProps } from "../../libs/interface/interfaceCommon";

const TagList: React.FC = () => {
  const [tagOptions, setTagOptions] = useState<string[]>([]);
  const levels = ["입문자를 위한", "캐주얼드링커를 위한", "헤비드링커를 위한"];
  const moods = ["고급스러운", "캐주얼한", "신나는", "고즈넉한", "로맨틱한", "아기자기한", "레트로한", "유니크한", "우디한", "모던한", "빈티지한"];
  const citys = ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구"];
  useEffect(() => {
    setTagOptions([pickRandom(levels), pickRandom(moods), pickRandom(citys)]);
  }, []);
  return (
    <>
      {tagOptions.map((item, idx) => {
        const tagOptions: TagProps = {
          typeVariants: "primary",
          tagId: `tag_${idx}`,
          value: item,
        };

        return <Tag {...tagOptions} key={idx} />;
      })}
    </>
  );
};

export default TagList;

function pickRandom(arr: string[]) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
