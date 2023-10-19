/**
 * 바 관리 페이지
 */

import React, { useState, useRef } from "react";
import Input from "../../../components/common/input/Input";
import Button from "../../../components/common/button/Button";
import SelectBox from "../../../components/common/selectBox/SelectBoxCopy";
import RegistCocktailList from "./RegistCocktailList";
import { styled } from "styled-components";
import { handleChangeInput } from "./handler";
import { BAR_INFO, ButtonOptions } from "./ManageInfoOptions";
import { CocktailProps } from "../../../libs/interface/interfaceCocktail";
import RegistBarImageList from "./RegistBarImageList";

export const ManageInfo = () => {
  // 바 정보
  const [barLocation, setBarLocation] = useState("");
  const [barMood, setBarMood] = useState("");
  const [activatedCoverCharge, setActivatedCoverCharge] = useState(false);
  const [activatedDiscount, setActivatedDiscount] = useState(false);

  const barName = useRef("");
  const barLocationDetail = useRef("");
  const coverCharge = useRef("");
  const discount = useRef("");
  const barOpeningTime = useRef("");
  const barDetail = useRef("");

  // 바 이미지 관련
  const barPicsRef = useRef<File[]>([]);

  // 칵테일 리스트 관련
  const registCocktailRef = useRef<CocktailProps[]>([]);
  const [showList, setShowList] = useState<string[]>([]); // 보여줄 칵테일

  const handleSubmit = () => {
    const { ...data } = {
      barName: barName.current,
      barLocation: barLocation,
      barLocationDetail: barLocationDetail.current,
      barMood: barMood,
      activatedCoverCharge: activatedCoverCharge,
      coverCharge: coverCharge.current,
      activatedDiscount: activatedDiscount,
      discount: discount.current,
      barOpeningTime: barOpeningTime.current,
      barDetail: barDetail.current,
      barPics: barPicsRef.current,
      cocktailList: registCocktailRef.current,
    };

    console.log(data);
  };

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2 className="a11y-hidden">정보 관리</h2>

        <section>
          {/** idx, name */}
          {/** 0. 바 이름(barName) */}
          <StyledSectionBarInfo>
            <StyledH3>이름</StyledH3>
            <Input {...BAR_INFO.NAME} onChange={(e) => handleChangeInput(e, barName)} />
          </StyledSectionBarInfo>
          {/** 1, 2. 바 위치, 상세주소(barLocation, barLocationDetail) */}
          <StyledSectionBarInfo>
            <StyledH3>위치</StyledH3>
            <SelectBox
              name="location"
              styletype="secondary"
              selected={barLocation}
              setSelected={function (value: React.SetStateAction<string>): void {
                setBarLocation(value);
              }}
              data={["#중랑구 ", "#서대문구 ", "#중구 "]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
            <Input {...BAR_INFO.LOCATION} onChange={(e) => handleChangeInput(e, barLocationDetail)} />
          </StyledSectionBarInfo>
          {/** 3. 바 분위기(barMood) */}
          <StyledSectionBarInfo>
            <StyledH3>분위기</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={barMood}
              setSelected={function (value: React.SetStateAction<string>): void {
                setBarMood(value);
              }}
              data={["#캐주얼한", "#고급스러운", "#신나는"]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
          </StyledSectionBarInfo>
          {/** 4, 5. 커버차지(activeCoverCharge, coverCharge) */}
          <StyledSectionBarInfo>
            <StyledH3>커버차지</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={activatedCoverCharge ? "있음" : "없음"}
              setSelected={function (value: React.SetStateAction<string>): void {
                setActivatedCoverCharge(value === "있음" ? true : false);
              }}
              data={["있음", "없음"]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
            <Input {...BAR_INFO.COVER_CHARGE} onChange={(e) => handleChangeInput(e, coverCharge)} />
          </StyledSectionBarInfo>
          {/** 6, 7. 커버차지 할인(activeDicount, discount) */}
          <StyledSectionBarInfo>
            <StyledH3>커버차지</StyledH3>
            <SelectBox
              styletype="secondary"
              selected={activatedDiscount ? "있음" : "없음"}
              setSelected={function (value: React.SetStateAction<string>): void {
                setActivatedDiscount(value === "있음" ? true : false);
              }}
              data={["있음", "없음"]}
              placeholder={"선택"}
              nulltext={"선택"}
            ></SelectBox>
            <Input {...BAR_INFO.DISCOUNT} onChange={(e) => handleChangeInput(e, discount)} />
          </StyledSectionBarInfo>
        </section>
        <section>
          {/** 8. 바 운영시간(barOpeningTime) */}
          <StyledH3>쟈닛 쿠폰 사용가능 요일 및 시간</StyledH3>
          <StyledSectionsBarDesc>
            <StyledTextarea
              onChange={(e) => handleChangeInput(e, barOpeningTime)}
              placeholder="쟈닛 고객님들께서 Bar에 방문하여 쿠폰을 사용할 수 있는 
요일과 시간을 입력해주세요"
            ></StyledTextarea>
            <StyledSpan>
              {`Ex. 월-금 17:00-24:00
            토-일 15:00-24:00
          `}
            </StyledSpan>
          </StyledSectionsBarDesc>
          {/** 9. 바 설명(barDetail) */}
          <StyledSectionsBarDesc>
            <StyledH3>공간 설명</StyledH3>
            <StyledTextarea onChange={(e) => handleChangeInput(e, barDetail)} placeholder="우리 매장에 대한 설명을 적어주세요. (최대 50자)"></StyledTextarea>
            <StyledSpan>
              {`Ex. 따뜻하지만 세련된 분위기를 가진 장소입니다. 전통주 베이스의 칵테일 50여종이 준비되어 있어요. 휴식이 필요한 주말 오후, 방문해보시는 건 어떨까요?  
          `}
            </StyledSpan>
          </StyledSectionsBarDesc>
          {/** 10. 바 사진(barPics) */}
          <StyledSectionsBarDesc>
            <RegistBarImageList barPicsRef={barPicsRef} />
          </StyledSectionsBarDesc>
        </section>
        <section>
          <StyledH3>칵테일 등록 &#40;최대 5잔&#41;</StyledH3>
          <RegistCocktailList registCocktailRef={registCocktailRef} />
        </section>

        <Button {...ButtonOptions} onClick={() => {}}></Button>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  & > button {
    margin-top: 50px;
  }
`;

export const StyledH3 = styled.h3`
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

  &:nth-of-type(2) > div {
    flex-basis: 96px;
    flex-shrink: 0;
  }
  &:nth-of-type(3) > div {
    flex-grow: 1;
  }
  &:nth-of-type(4),
  &:nth-of-type(5) {
    & > div {
      flex-basis: 77px;
      flex-shrink: 0;
    }
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
        right: 15px;
      }
    }

    & > input {
      font-size: 0.75rem;
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
  padding-right: 10px;
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
