import React, { useState } from "react";
import Input from "../../../components/common/input/Input";
import { Select } from "../../../components/common/select/Select";
import { styled } from "styled-components";
import { handleChangeInput, handleChangeInputNumber, handleChangeSelect } from "./handler";
import { BAR_INFO, SELECT } from "./ManageInfoOptions";

import sampleImg from "../../../assets/admin_sample_img.svg";
import addCocktailImg from "../../../assets/icon/icon_add_cocktail_button.svg";
import { CocktailItem, CocktailItemProps } from "../../../components/admin/management/CocktailItem";
import { CocktailProps } from "../../../libs/interface/interfaceBarDetail";

export const ManageInfo = () => {
  const [barName, setBarName] = useState<string>("");
  const [barLocation, setBarLocation] = useState<string>("");
  const [barMood, setBarMood] = useState<string>("");
  const [coverCharge, setCoverCharge] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const [cocktailList, setCocktailList] = useState<string[]>([]);
  const [showList, setShowList] = useState<string[]>([]);

  const sampleCocktails: { info: CocktailProps }[] = [
    {
      info: { img: "string", title: "string", level: "string", description: "string" },
    },
    {
      info: { img: "string", title: "string", level: "string", description: "string" },
    },
    {
      info: { img: "string", title: "string", level: "string", description: "string" },
    },
  ];

  return (
    <StyledForm>
      <h2 className="a11y-hidden">정보 관리</h2>

      <section>
        <StyledSectionBarInfo>
          <StyledH3>이름</StyledH3>
          <Input {...BAR_INFO.NAME} value={barName.replaceAll(" ", "")} onChange={(e) => handleChangeInput(e, setBarName)} />
        </StyledSectionBarInfo>
        <StyledSectionBarInfo>
          <StyledH3>위치</StyledH3>
          <Select {...SELECT.MOOD} onChange={handleChangeSelect} />
          <Input {...BAR_INFO.LOCATION} value={barLocation} onChange={(e) => handleChangeInput(e, setBarLocation)} />
        </StyledSectionBarInfo>
        <StyledSectionBarInfo>
          <StyledH3>분위기</StyledH3>
          <Select {...SELECT.MOOD} onChange={handleChangeSelect} />
        </StyledSectionBarInfo>
        <StyledSectionBarInfo>
          <StyledH3>커버차지</StyledH3>
          <Select {...SELECT.COVER_CHARGE} onChange={handleChangeSelect} />
          <Input {...BAR_INFO.COVER_CHARGE} value={coverCharge} onChange={(e) => handleChangeInputNumber(e, setCoverCharge)} />
        </StyledSectionBarInfo>
        <StyledSectionBarInfo>
          <StyledH3>커버차지</StyledH3>
          <Select {...SELECT.DISCOUNT} onChange={handleChangeSelect} />
          <Input {...BAR_INFO.DISCOUNT} value={discount} onChange={(e) => handleChangeInputNumber(e, setDiscount)} />
        </StyledSectionBarInfo>
      </section>
      <section>
        <StyledH3>쟈닛 쿠폰 사용가능 요일 및 시간</StyledH3>
        <StyledSectionsBarDesc>
          <StyledTextarea
            placeholder="쟈닛 고객님들께서 Bar에 방문하여 쿠폰을 사용할 수 있는 
요일과 시간을 입력해주세요"
          ></StyledTextarea>
          <StyledSpan>
            {`Ex. 월-금 17:00-24:00
            토-일 15:00-24:00
          `}
          </StyledSpan>
        </StyledSectionsBarDesc>
        <StyledSectionsBarDesc>
          <StyledH3>공간 설명</StyledH3>
          <StyledTextarea placeholder="우리 매장에 대한 설명을 적어주세요. (최대 50자)"></StyledTextarea>
          <StyledSpan>
            {`Ex. 따뜻하지만 세련된 분위기를 가진 장소입니다. 전통주 베이스의 칵테일 50여종이 준비되어 있어요. 휴식이 필요한 주말 오후, 방문해보시는 건 어떨까요?  
          `}
          </StyledSpan>
        </StyledSectionsBarDesc>
        <StyledSectionsBarDesc>
          <StyledH3>공간 사진</StyledH3>
          <StyledP>
            {`1) 공간 외부 2) 내부 전경 3) 좌석 배치
              4) 칵테일 메뉴가 적힌 메뉴판 사진을 업로드 해주세요
            `}
            <span>{"(가로 세로 비율 1:1 권장)"}</span>
          </StyledP>
          <PhotoList>
            <li>
              <img src={sampleImg} alt="" />
            </li>
            <li>
              <img src={sampleImg} alt="" />
            </li>
            <li>
              <img src={sampleImg} alt="" />
            </li>
            <li>
              <img src={sampleImg} alt="" />
            </li>
          </PhotoList>
        </StyledSectionsBarDesc>
      </section>
      <section>
        <StyledH3>칵테일 등록 &#40;최대 5잔&#41;</StyledH3>
        <CocktailList>
          {sampleCocktails.map((item, idx) => {
            return <CocktailItem key={`key_${idx}`} id={`cocktail_${idx}`} info={item.info} setShowList={setShowList} />;
          })}
        </CocktailList>
        <AddCocktailButton>
          <img src={addCocktailImg} alt="" />
        </AddCocktailButton>
      </section>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  /* padding: 20px; */
`;

const StyledH3 = styled.h3`
  min-width: 60px;
  font-family: var(--font--Bold);
  font-size: 0.875rem;
  text-align: left;
  letter-spacing: 0px;
`;

const StyledSectionBarInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  & > input {
    flex-basis: 100%;
    font-family: var(--font--Medium);
    letter-spacing: -0.5px;
  }

  &:nth-of-type(2) > input,
  &:nth-of-type(4) > input,
  &:nth-of-type(5) > input {
    flex-shrink: 0.55;
  }

  &:nth-of-type(5) {
    ${StyledH3} {
      position: relative;
      top: -10px;

      &::before {
        content: "할";
        position: absolute;
        top: 15px;
        left: 0;
      }

      &::after {
        content: "인";
        position: absolute;
        top: 15px;
        right: 9px;
      }
    }

    & > input {
      font-size: 0.8125rem;
    }
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 75px;
  left: 10px;
  font-family: var(--font--Medium);
  font-size: 0.8125rem;
  color: var(--gray300-color);
  white-space: pre-line;
`;

const StyledSectionsBarDesc = styled.section`
  position: relative;
`;

const StyledTextarea = styled.textarea`
  position: relative;
  width: 100%;
  height: 120px;
  margin: 20px 0 30px;
  padding: 10px;
  border: 1px solid var(--gray200-color);
  border-radius: 6px;
  box-sizing: border-box;
  resize: none;
  font-size: 0.8125rem;
  letter-spacing: -0.7px;

  &:hover,
  &:focus {
    outline: 1px solid var(--main-color);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-color: var(--gray200-color);
  }

  &:not(:placeholder-shown) + span {
    display: none;
  }
`;

const StyledP = styled.p`
  margin: 10px 0;
  font-family: var(--font--Medium);
  font-size: 0.8125rem;
  line-height: 1rem;
  color: var(--gray400-color);
  white-space: pre-line;

  & > span {
    color: var(--gray300-color);
  }
`;

const PhotoList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  & li {
    width: 70px;
    height: 70px;
    border: 1px solid var(--gray200-color);
    border-radius: 6px;
    overflow: hidden;
  }

  & img {
    width: 70px;
    height: 70px;
    object-fit: contain;
  }
`;

const CocktailList = styled.ul`
  margin: 20px 0;

  & li {
    width: 100%;
    margin-bottom: 15px;
    padding: 15px 10px;
    background-color: var(--gray100-color);
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;

    & > button {
      width: 15px;
      height: 15px;
      cursor: pointer;

      &:first-of-type {
        float: left;
      }

      &:last-of-type {
        float: right;
      }
    }
  }
`;

const AddCocktailButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: white;
  border: 1px solid var(--gray200-color);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
`;
