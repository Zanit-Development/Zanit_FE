import React, { useEffect, useRef, useState } from "react";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";
import { css, styled } from "styled-components";

import ArrowIcon from "../../../assets/icon/icon_arrow_down.svg";
import SelectItem from "./SelectItem";
import { SelectType, FormSelectType } from "../../../pages/myCoupon/UseCoupon";

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

type styleType = "primary" | "secondary";

const Common = {
  primary: css`
    background-color: #f4f4f4;
    font-size: 14px;
  `,
  secondary: css`
    background-color: white;
    box-shadow: 0 0 0 1px var(--gray200-color) inset;
    font-size: 13px;
  `,
};

const BoxType = {
  primary: css`
    margin-top: 15px;

    padding: 13px 20px;
  `,
  secondary: css`
    padding: 8.5px 10px;
  `,
};

const ULType = {
  primary: css`
    top: 59px;
    max-height: calc(40px * 5 + 0.5px * 5);
  `,
  secondary: css`
    top: 50px;
    max-height: calc(39px * 5 + 0.5px * 5);
  `,
};

const SelectWrapper = styled.div<{ $styletype: styleType }>`
  ${({ $styletype }) => Common[$styletype]}
  ${({ $styletype }) => BoxType[$styletype]}

  box-sizing: border-box;

  border-radius: 5px;
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

const ItemList = styled.ul<{ $styletype: styleType }>`
  box-sizing: border-box;
  ${({ $styletype }) => Common[$styletype]}
  ${({ $styletype }) => ULType[$styletype]}
  padding: 0 12px;
  width: 100%;
  overflow-y: auto;
  position: absolute;
  left: 0;
  border-radius: 5px;

  z-index: 9999;
`;
