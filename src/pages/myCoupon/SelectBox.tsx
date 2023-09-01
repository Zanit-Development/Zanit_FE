import React, { useEffect, useRef, useState } from "react";
import { MOUSE_EVENT } from "../../libs/interface/typeEvent";
import { styled } from "styled-components";

import ArrowIcon from "../../assets/icon/icon_arrow_down.svg";
import CheckMark from "../../assets/icon/icon-checkmark-black.png";

interface CocktailSelectType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  data: string[];
}

const SelectBox = ({ selected, setSelected, data }: CocktailSelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const text = "칵테일을 선택해 주세요";

  const selectOption = (event: MOUSE_EVENT) => {
    event.stopPropagation(); // 클릭 이벤트의 전파를 막음
    const target = event.target as HTMLLIElement;
    target.classList.contains("reset-item") ? setSelected("") : setSelected(target.textContent!);
  };
  const handleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <SelectWrapper onClick={handleDropDown} ref={selectRef}>
      <Container>
        {selected || text}
        <Arrow isopen={isOpen} src={ArrowIcon} alt="" />
      </Container>
      {isOpen && (
        <ItemList>
          {data.length === 0 ? (
            <Item className={`reset-item`}>방문하신 바를 선택해주세요</Item>
          ) : (
            <>
              <Item className={`reset-item ${selected === "" ? "selected" : ""}`} key="null" onClick={(e) => selectOption(e)}>
                칵테일 선택하기
              </Item>
              {data.map((option) => (
                <Item className={option === selected ? "selected" : ""} key={option} onClick={(e) => selectOption(e)}>
                  {option}
                </Item>
              ))}
            </>
          )}
        </ItemList>
      )}
    </SelectWrapper>
  );
};

export default SelectBox;

const BACKGROUNDCOLOR = "#F4F4F4";

const SelectWrapper = styled.div`
  margin-top: 15px;

  padding: 13px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-family: var(--font--Regular);
  background: ${BACKGROUNDCOLOR};

  position: relative;
`;

const Arrow = styled.img<{ isopen: boolean }>`
  transition: all 0.5s ease-out;
  transform: ${({ isopen }) => (isopen ? `rotateX(180deg);` : undefined)};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  max-height: calc(40px + 40.5px * 4);
  overflow-y: auto;
  position: absolute;
  top: 59px;
  left: 0;
  background-color: ${BACKGROUNDCOLOR};
  border-radius: 5px;

  padding: 0 12px;
  z-index: 9999;
`;

const Item = styled.li`
  padding: 13px 8px;
  padding-left: 29px;
  border-top: 0.5px solid var(--gray300-color);
  &:first-child {
    border-top: none;
  }
  &.reset-item {
    color: var(--gray500-color);
  }
  font-size: 14px;
  font-family: var(--font--Regular);

  position: relative;
  &.selected::before {
    content: "";
    position: absolute;
    left: 6px;
    width: 15px;
    height: 15px;
    background: url(${CheckMark}) no-repeat 0 / contain;
  }
`;
