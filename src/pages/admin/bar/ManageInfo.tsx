import React, { useState } from "react";
import Input from "../../../components/common/input/Input";
import { INPUT_EVENT, SELECT_EVENT } from "../../../libs/interface/typeEvent";
import { BAR_INFO, SELECT } from "./ManageInfoOptions";
import { Select } from "../../../components/common/select/Select";
import { css, styled } from "styled-components";

export const ManageInfo = () => {
  const [barName, setBarName] = useState<string>("");
  const [barLocation, setBarLocation] = useState<string>("");
  const [barMood, setBarMood] = useState<string>("");
  const [coverCharge, setCoverCharge] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");
  const checkNumber = /\d/g;

  const handleChangeInput = (e: INPUT_EVENT) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;

    inputId === "barName" ? setBarName(inputValue) : setBarLocation(inputValue);
  };

  const handleChangeInputNumber = (e: INPUT_EVENT) => {
    const inputId = e.target.id;
    const inputValue = e.target.value.replaceAll(",", "");

    if (inputValue === "" || !checkNumber.test(inputValue)) {
      inputId === "coverCharge" ? setCoverCharge("") : setDiscount("");
      return false;
    }

    const result = parseInt(inputValue).toLocaleString("en");

    inputId === "coverCharge" ? setCoverCharge(result) : setDiscount(result);
  };

  const handleChangeSelect = (e: SELECT_EVENT) => {
    const selectId = e.target.id;
    const selectValue = e.target.value;

    if (selectId === "selectMood") {
    } else if (selectId === "selectCoverCharge") {
    } else if (selectId === "selectDiscount") {
    }
  };

  return (
    <StyledForm>
      <h2 className="a11y-hidden">정보 관리</h2>

      <section>
        <StyledSectionTop>
          <StyledH3>이름</StyledH3>
          <Input {...BAR_INFO.NAME} value={barName.replaceAll(" ", "")} onChange={handleChangeInput} />
        </StyledSectionTop>
        <StyledSectionTop>
          <StyledH3>위치</StyledH3>
          <Select {...SELECT.MOOD} onChange={handleChangeSelect} />
          <Input {...BAR_INFO.LOCATION} value={barLocation} onChange={handleChangeInput} />
        </StyledSectionTop>
        <StyledSectionTop>
          <StyledH3>분위기</StyledH3>
          <Select {...SELECT.MOOD} onChange={handleChangeSelect} />
        </StyledSectionTop>
        <StyledSectionTop>
          <StyledH3>커버차지</StyledH3>
          <Select {...SELECT.COVER_CHARGE} onChange={handleChangeSelect} />
          <Input {...BAR_INFO.COVER_CHARGE} value={coverCharge} onChange={handleChangeInputNumber} />
        </StyledSectionTop>
        <StyledSectionTop>
          <StyledH3>커버차지</StyledH3>
          <Select {...SELECT.DISCOUNT} onChange={handleChangeSelect} />
          <Input {...BAR_INFO.DISCOUNT} value={discount} onChange={handleChangeInputNumber} />
        </StyledSectionTop>
      </section>

      <section>
        <StyledH3>쟈닛 쿠폰 사용가능 요일 및 시간</StyledH3>
        <StyledTextareaTop
          placeholder="쟈닛 고객님들께서 Bar에 방문하여 쿠폰을 사용할 수 있는 
요일과 시간을 입력해주세요"
        ></StyledTextareaTop>
        <StyledH3>공간 설명</StyledH3>
        <StyledTextareaBottom placeholder="우리 매장에 대한 설명을 적어주세요. (최대 50자)"></StyledTextareaBottom>
      </section>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 20px;
`;

const StyledH3 = styled.h3`
  min-width: 60px;
  font-family: var(--font--Bold);
  font-size: 0.875rem;
  text-align: left;
  letter-spacing: 0px;
`;

const StyledSectionTop = styled.section`
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
      font-size: 13px;
    }
  }
`;

const StyledTextareaBase = css`
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

  &::before {
    position: absolute;
    left: 0;
  }
`;

const StyledTextareaTop = styled.textarea`
  ${StyledTextareaBase}
  &::before {
    content: "fsdfa";
  }
`;

const StyledTextareaBottom = styled.textarea`
  ${StyledTextareaBase}
  &::before {
    content: "adsfsad";
  }
`;
