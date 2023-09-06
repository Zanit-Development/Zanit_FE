import React, { useEffect, useRef, useState } from "react";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";
import { css, styled } from "styled-components";

import ArrowIcon from "../../../assets/icon/icon_arrow_down.svg";
import SelectItem from "./SelectItem";
import { SelectType } from "../../../pages/myCoupon/UseCoupon";

const SelectBox = ({ boxtype = "primary", selected, setSelected, data, placeholder, nulltext }: SelectType) => {
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
    <SelectWrapper $boxtype={boxtype} onClick={data.length > 0 ? handleDropDown : undefined} ref={selectRef}>
      <Container>
        {selected || placeholder}
        <Arrow $isopen={isOpen ? "true" : "false"} src={ArrowIcon} alt="" />
      </Container>
      {isOpen && (
        <ItemList $boxtype={boxtype}>
          <SelectItem reset={true} key={nulltext} option={nulltext} isSelected={"" === selected} onSelect={(e) => selectOption(e)} />
          {data.map((option) => (
            <SelectItem key={option} option={option} isSelected={option === selected} onSelect={(e) => selectOption(e)} />
          ))}
        </ItemList>
      )}
    </SelectWrapper>
  );
};

export default SelectBox;

const BoxType = {
  primary: css`
    background-color: #f4f4f4;
  `,
  secondary: css`
    background-color: white;
    box-shadow: 0 0 0 1px #eee inset;
  `,
};

const SelectWrapper = styled.div<{ $boxtype: "primary" | "secondary" }>`
  ${({ $boxtype }) => BoxType[$boxtype]}

  box-sizing: border-box;
  margin-top: 15px;

  padding: 13px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-family: var(--font--Regular);

  position: relative;
`;

const Arrow = styled.img<{ $isopen: string }>`
  transition: all 0.5s ease-out;
  transform: ${({ $isopen }) => ($isopen === "true" ? `rotateX(180deg);` : undefined)};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemList = styled.ul<{ $boxtype: "primary" | "secondary" }>`
  box-sizing: border-box;

  ${({ $boxtype }) => BoxType[$boxtype]}

  width: 100%;
  height: calc(40px + 40.5px * 4);
  overflow-y: auto;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 5px;

  padding: 0 12px;
  z-index: 9999;
`;
