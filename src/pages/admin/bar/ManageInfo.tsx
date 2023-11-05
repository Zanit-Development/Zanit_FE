/**
 * 바 관리 페이지
 */

import React, { useState, useRef } from "react";
import Input from "../../../components/common/input/Input";
import Button from "../../../components/common/button/Button";
import { FormSelectBox } from "../../../components/common/selectBox/BaseSelectBox";
import RegistCocktailList from "./RegistCocktailList";
import RegistBarImageList from "./RegistBarImageList";
import { styled } from "styled-components";
import { BAR_INFO, ButtonOptions } from "./ManageInfoOptions";
import { CocktailProps } from "../../../libs/interface/interfaceCocktail";
import { FORM_EVENT } from "../../../libs/interface/typeEvent";
import { formDataInstance } from "../../../libs/apis/axios";

export interface ManageBarProps {
  barName: string;
  barLocation: string;
  barLocationDetail: string;
  barMood: string;
  activatedCoverCharge: boolean;
  coverCharge: string;
  activatedDiscount: boolean;
  discount: string;
  barOpeningTime: string;
  barDetail: string;
  barPics: File[];
  cocktailList: CocktailProps[];
}

export const ManageInfo = () => {
  // 바 정보
  const formRef = useRef<any>({});

  // 바 이미지 관련
  const barPicsRef = useRef<File[]>([]);

  // 칵테일 리스트 관련
  const registCocktailRef = useRef<CocktailProps[]>([]);
  const [showList, setShowList] = useState<string[]>([]); // 보여줄 칵테일

  // 바 등록
  const handleSubmit = async (e: FORM_EVENT) => {
    e.preventDefault();

    const formValues = formRef.current?.elements;
    const activatedCoverCharge = formValues["activatedCoverCharge"].value;
    const activatedCoverChargeOff = formValues["activatedDiscount"].value;

    const data = {
      barName: formValues["barName"].value,
      barLocation: formValues["barLocation"].value,
      barLocationDetail: formValues["barLocationDetail"].value,
      barMood: formValues["barMood"].value.slice(1),
      coverCharge: activatedCoverCharge === "있음" ? formValues["coverCharge"].value : 0,
      coverChargeOff: activatedCoverChargeOff === "있음" ? formValues["discount"].value : 0, // discount
      barTime: formValues["barOpeningTime"].value, // barOpeningTime
      barDetail: formValues["barDetail"].value,
      barPics: barPicsRef.current,
      barPhone: "010-1234-5678",
    };

    console.log(data);
    // registCocktail(0);
    // return;

    const response = await formDataInstance.post("/registBar", data);
    registCocktail(response.data);
    return response.data;
  };

  // 칵테일 등록
  const registCocktail = async (barId: number) => {
    const cocktailList = registCocktailRef.current;
    const data = {
      barId: barId,
      cocktails: cocktailList,
    };

    console.log(data);

    // return;
    const response = await formDataInstance.post("/registCocktail", data);
    console.log(response.data);
    return response.data;
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit} ref={formRef}>
        <h2 className="a11y-hidden">정보 관리</h2>

        <section>
          {/** idx, name */}
          {/** 0. 바 이름(barName) */}
          <StyledSectionBarInfo>
            <StyledH3>이름</StyledH3>
            <Input {...BAR_INFO.NAME} />
          </StyledSectionBarInfo>
          {/** 1, 2. 바 위치, 상세주소(barLocation, barLocationDetail) */}
          <StyledSectionBarInfo>
            <StyledH3>위치</StyledH3>
            <FormSelectBox
              name="barLocation"
              data={["중랑구 ", "서대문구 ", "중구 "]}
              placeholder={"선택"}
              nulltext={"선택"}
            />
            <Input {...BAR_INFO.LOCATION_DETAIL} />
          </StyledSectionBarInfo>
          {/** 3. 바 분위기(barMood) */}
          <StyledSectionBarInfo>
            <StyledH3>분위기</StyledH3>
            <FormSelectBox
              name="barMood"
              data={["#캐주얼한", "#고급스러운", "#신나는"]}
              placeholder={"선택"}
              nulltext={"선택"}
            />
          </StyledSectionBarInfo>
          {/** 4, 5. 커버차지(activeCoverCharge, coverCharge) */}
          <StyledSectionBarInfo>
            <StyledH3>커버차지</StyledH3>
            <FormSelectBox name="activatedCoverCharge" data={["있음", "없음"]} placeholder={"선택"} nulltext={"선택"} />
            <Input {...BAR_INFO.COVER_CHARGE} />
          </StyledSectionBarInfo>
          {/** 6, 7. 커버차지 할인(activeDicount, discount) */}
          <StyledSectionBarInfo>
            <StyledH3>커버차지</StyledH3>
            <FormSelectBox name="activatedDiscount" data={["있음", "없음"]} placeholder={"선택"} nulltext={"선택"} />
            <Input {...BAR_INFO.DISCOUNT} />
          </StyledSectionBarInfo>
        </section>
        <section>
          {/** 8. 바 운영시간(barOpeningTime) */}
          <StyledH3>쟈닛 쿠폰 사용가능 요일 및 시간</StyledH3>
          <StyledSectionsBarDesc>
            <StyledTextarea
              name="barOpeningTime"
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
            <StyledTextarea
              name="barDetail"
              placeholder="우리 매장에 대한 설명을 적어주세요. (최대 50자)"
            ></StyledTextarea>
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
