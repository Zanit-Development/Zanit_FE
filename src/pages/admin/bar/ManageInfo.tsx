import React, { useState } from "react";
import Input from "../../../components/common/input/Input";
import { INPUT_EVENT } from "../../../libs/interface/typeEvent";
import { BAR_INFO } from "./ManageInfoOptions";
import { Select } from "../../../components/common/select/Select";

export const ManageInfo = () => {
  const [barName, setBarName] = useState<string>("");
  const [barLocation, setBarLocation] = useState<string>("");
  const [barMood, setBarMood] = useState<string>("");
  const [coverCharge, setCoverCharge] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  const handleChange = (e: INPUT_EVENT) => {
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

  return (
    <form>
      <span>이름</span>
      <Input {...BAR_INFO.NAME} value={barName} onChange={handleChange} />
      <span>위치</span>
      <Input {...BAR_INFO.LOCATION} value={barLocation} onChange={handleChange} />
      <span>분위기</span>
      <Select id="selectMood" options={["감", "남"]} />
      <span>커버차지</span>
      <Select id="selectCoverCharge" options={[]} />
      <Input {...BAR_INFO.COVER_CHARGE} value={coverCharge} onChange={handleChange} />
      <span>
        커버차지
        <br />
        할　　인
      </span>
      <Select id="selectDiscount" options={[]} />
      <Input {...BAR_INFO.DISCOUNT} value={discount} onChange={handleChange} />
    </form>
  );
};
