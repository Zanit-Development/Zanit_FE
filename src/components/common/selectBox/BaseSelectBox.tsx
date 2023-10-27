import React from "react";
import ArrowIcon from "../../../assets/icon/icon_arrow_down.svg";
import SelectItem from "./SelectItem";
import { SelectType } from "../../../pages/myCoupon/UseCoupon";
import { Arrow, Container, ItemList, SelectWrapper } from "./SelectBox.styled";
import { useSelectBox } from "./useSelectBox";

const BaseSelectBox = (props: SelectType) => {
  const { name, styletype, data, placeholder, nulltext, selected, setSelected } = props;
  const { isOpen, selectedOption, selectRef, selectOption, handleDropDown } = useSelectBox({
    initialSelected: "",
    preState: selected,
    preSetState: setSelected,
  });

  return (
    <SelectWrapper $styletype={styletype!} onClick={data?.length ? handleDropDown : undefined} ref={selectRef}>
      {name && <input type="hidden" name={name} value={selectedOption} className="a11y-hidden" />}
      <Container>
        {selectedOption || placeholder}
        <Arrow $isopen={isOpen ? "true" : "false"} src={ArrowIcon} alt="" />
      </Container>
      {isOpen && (
        <ItemList $styletype={styletype!}>
          <SelectItem styletype={styletype} reset={true} key={nulltext} option={nulltext} isSelected={"" === selectedOption} onSelect={selectOption} />
          {data.map((option: string) => (
            <SelectItem styletype={styletype} key={option} option={option} isSelected={option === selectedOption} onSelect={selectOption} />
          ))}
        </ItemList>
      )}
    </SelectWrapper>
  );
};

const SelectBox = (props: SelectType) => {
  const { selected, setSelected, data, placeholder, nulltext } = props;
  return <BaseSelectBox styletype={"primary"} selected={selected} setSelected={setSelected} data={data} placeholder={placeholder} nulltext={nulltext} />;
};

const FormSelectBox = (props: SelectType) => {
  const { name, data, placeholder, nulltext } = props;
  return <BaseSelectBox name={name} styletype={"secondary"} data={data} placeholder={placeholder} nulltext={nulltext} />;
};

export { SelectBox, FormSelectBox };
