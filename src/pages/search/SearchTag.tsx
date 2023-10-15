import generator, { LOCATION_LIST, MOOD_LIST } from "../../libs/func/generator";
import styled from "styled-components";
import Tag from "./Tag";
import { useState } from "react";
import { SearchCategoryType } from "../../libs/interface/interfaceSearch";
import { cocktailTagOption } from "./options";
import { useRecoilValue } from "recoil";
import { categoryAtom, selectTagAtom } from "../../recoil/SearchAtom";

const SearchTag = () => {
  const category = useRecoilValue(categoryAtom);
  const tag = useRecoilValue(selectTagAtom);

  // 태그 리스트
  const [barBaseTags, setBarBaseTags] = useState(generator.randomAllTag(8));
  const barLocationTags = LOCATION_LIST;
  const barMoodTags = MOOD_LIST;

  // 태그 선택 세팅
  const setTagSelected = (category: SearchCategoryType, tag: string | undefined) => {
    let selectedTag = "";

    if (category === "cocktail") {
      selectedTag += cocktailTagOption.filter((item) => item === tag);
    } else if (category === "barMood") {
      selectedTag += barMoodTags.filter((item) => item === tag);
    } else if (category === "barLocation") {
      selectedTag += barLocationTags.filter((item) => item === tag);
    }

    return selectedTag;
  };

  const getTagList = (category: SearchCategoryType) => {
    switch (category) {
      case "barMood":
        return barMoodTags;
      case "barLocation":
        return barLocationTags;
      case "cocktail":
        return cocktailTagOption;

      default:
        return barBaseTags;
    }
  };

  return (
    <TagSection>
      {/* 태그 목록 표시 */}
      <Tag typevariants="primary" itemlist={getTagList(category)} selected={setTagSelected(category, tag)} />
    </TagSection>
  );
};

export default SearchTag;

const TagSection = styled.section`
  position: relative;

  & > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
  }

  & > ul > li {
    margin-right: 10px;
  }
`;
