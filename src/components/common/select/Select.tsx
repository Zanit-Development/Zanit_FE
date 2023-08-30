import React from "react";

interface SelectProps {
  id: string;
  options: string[];
}

export const Select = ({ ...props }: SelectProps) => {
  return (
    <select>
      <option value="default" selected>
        선택
      </option>
      {props.options.map((item) => {
        return <option value="item">{item}</option>;
      })}
    </select>
  );
};
