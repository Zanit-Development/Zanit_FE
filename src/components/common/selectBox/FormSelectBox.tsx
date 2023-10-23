import React, { useEffect, useRef, useState } from "react";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";

import ArrowIcon from "../../../assets/icon/icon_arrow_down.svg";
import SelectItem from "./SelectItem";
import { FormSelectType } from "../../../pages/myCoupon/UseCoupon";
import { Arrow, Container, ItemList, SelectWrapper } from "./SelectBox.styled";

const FormSelectBox = ({ name, styletype = "primary", data, placeholder, nulltext }: FormSelectType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>("");
  const selectRef = useRef<HTMLDivElement | null>(null);

  const selectOption = (event: MOUSE_EVENT) => {
    event.stopPropagation(); // 클릭 이벤트의 전파를 막음
    const target = event.target as HTMLLIElement;
    target.classList.contains("reset-item") ? setSelectedOption("") : setSelectedOption(target.textContent!);
    setIsOpen(false);
  };

  const handleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  // 박스 외부 누르면 리스트 언마운트하는 핸들러
  const handleDocumentClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // 문서에 핸들러 붙이기
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <SelectWrapper $styletype={styletype} onClick={data?.length ?? false ? handleDropDown : undefined} ref={selectRef}>
      <input type="" name={name} value={selectedOption} className="a11y-hidden" />
      <Container>
        {selectedOption || placeholder}
        <Arrow $isopen={isOpen ? "true" : "false"} src={ArrowIcon} alt="" />
      </Container>
      {isOpen && (
        <ItemList $styletype={styletype}>
          <SelectItem styletype={styletype} reset={true} key={nulltext} option={nulltext} isSelected={"" === selectedOption} onSelect={(e) => selectOption(e)} />
          {data.map((option) => (
            <SelectItem styletype={styletype} key={option} option={option} isSelected={option === selectedOption} onSelect={(e) => selectOption(e)} />
          ))}
        </ItemList>
      )}
    </SelectWrapper>
  );
};

export default FormSelectBox;
