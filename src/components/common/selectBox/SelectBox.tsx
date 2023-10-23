import React, { useEffect, useRef, useState } from "react";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";

import ArrowIcon from "../../../assets/icon/icon_arrow_down.svg";
import SelectItem from "./SelectItem";
import { SelectType } from "../../../pages/myCoupon/UseCoupon";
import { Arrow, Container, ItemList, SelectWrapper } from "./SelectBox.styled";

const SelectBox = ({ styletype = "primary", selected, setSelected, data, placeholder, nulltext }: SelectType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const selectOption = (event: MOUSE_EVENT) => {
    event.stopPropagation(); // 클릭 이벤트의 전파를 막음
    const target = event.target as HTMLLIElement;
    target.classList.contains("reset-item") ? setSelected("") : setSelected(target.textContent!);
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
      <Container>
        {selected || placeholder}
        <Arrow $isopen={isOpen ? "true" : "false"} src={ArrowIcon} alt="" />
      </Container>
      {isOpen && (
        <ItemList $styletype={styletype}>
          <SelectItem styletype={styletype} reset={true} key={nulltext} option={nulltext} isSelected={"" === selected} onSelect={(e) => selectOption(e)} />
          {data.map((option) => (
            <SelectItem styletype={styletype} key={option} option={option} isSelected={option === selected} onSelect={(e) => selectOption(e)} />
          ))}
        </ItemList>
      )}
    </SelectWrapper>
  );
};

export default SelectBox;
