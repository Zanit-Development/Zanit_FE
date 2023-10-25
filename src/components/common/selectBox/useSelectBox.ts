import { useEffect, useRef, useState } from "react";
import { MOUSE_EVENT } from "../../../libs/interface/typeEvent";

type SelectBoxHookProps = {
  initialSelected: string;
  preState?: string;
  preSetState?: React.Dispatch<React.SetStateAction<string>>;
};

type SelectBoxHookReturnType = {
  isOpen: boolean;
  selectedOption: string;
  selectRef: any;
  selectOption: (event: MOUSE_EVENT) => void;
  handleDropDown: () => void;
};

export function useSelectBox({ initialSelected, preState = undefined, preSetState = undefined }: SelectBoxHookProps): SelectBoxHookReturnType {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>(initialSelected);

  const selectOption = (event: MOUSE_EVENT) => {
    event.stopPropagation(); // 클릭 이벤트의 전파를 막음
    const target = event.target as HTMLLIElement;
    if (preSetState) {
      target.classList.contains("reset-item") ? preSetState("") : preSetState(target.textContent!);
    } else {
      target.classList.contains("reset-item") ? setSelectedOption("") : setSelectedOption(target.textContent!);
    }
    setIsOpen(false);
  };

  const handleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  // 박스 외부 누르면 리스트 언마운트하는 핸들러
  const handleDocumentClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) setIsOpen(false);
  };

  // 문서에 핸들러 붙이기
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return {
    isOpen,
    selectedOption: preState || selectedOption,
    selectRef,
    selectOption,
    handleDropDown,
  };
}
