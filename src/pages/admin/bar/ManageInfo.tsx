import React, { useState } from "react";
import Input from "../../../components/common/input/Input";
import { INPUT_EVENT, SELECT_EVENT } from "../../../libs/interface/typeEvent";
import { BAR_INFO, SELECT } from "./ManageInfoOptions";
import { Select } from "../../../components/common/select/Select";
import { styled } from "styled-components";

export const ManageInfo = () => {
  const [barName, setBarName] = useState<string>("");
  const [barLocation, setBarLocation] = useState<string>("");
  const [barMood, setBarMood] = useState<string>("");
  const [coverCharge, setCoverCharge] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  const handleChangeInput = (e: INPUT_EVENT) => {
    const inputId = e.target.id;
    const inputValue = e.target.value;

    if (inputId === "barName") {
      setBarName(inputValue);
    } else if (inputId === "barLocation") {
      setBarLocation(inputValue);
    } else if (inputId === "coverCharge") {
      setCoverCharge(inputValue);
    } else if (inputId === "discount") {
      setDiscount(inputValue);
    }
  };

  const handleChangeSelect = (e: SELECT_EVENT) => {
    const selectId = e.target.id;
    const seleltValue = e.target.value;

    if (selectId === "selectMood") {
    } else if (selectId === "selectCoverCharge") {
    } else if (selectId === "selectDiscount") {
    }
  };

  return (
    <StyledForm>
      <h2 className="a11y-hidden">정보 관리</h2>
      <StyledSection>
        <StyledH3>이름</StyledH3>
        <Input {...BAR_INFO.NAME} value={barName} onChange={handleChangeInput} />
      </StyledSection>
      <StyledSection>
        <StyledH3>위치</StyledH3>
        <Input {...BAR_INFO.LOCATION} value={barLocation} onChange={handleChangeInput} />
      </StyledSection>
      <StyledSection>
        <StyledH3>분위기</StyledH3>
        <Select {...SELECT.MOOD} onChange={handleChangeSelect} />
      </StyledSection>
      <StyledSection>
        <StyledH3>커버차지</StyledH3>
        <Select {...SELECT.COVER_CHARGE} onChange={handleChangeSelect} />
        <Input {...BAR_INFO.COVER_CHARGE} value={coverCharge} onChange={handleChangeInput} />
      </StyledSection>
      <StyledSection>
        <StyledH3>
          커버차지
          <br />
          할　　인
        </StyledH3>
        <Select {...SELECT.DISCOUNT} onChange={handleChangeSelect} />
        <Input {...BAR_INFO.DISCOUNT} value={discount} onChange={handleChangeInput} />
      </StyledSection>
    </StyledForm>
  );
};
const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledH3 = styled.h3`
  width: 60px;
  font-family: var(--font--Bold);
`;

const StyledForm = styled.form`
  & h3 {
  }

  & section {
  }
`;
