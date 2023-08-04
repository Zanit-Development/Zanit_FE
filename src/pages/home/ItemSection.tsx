import React from "react";
import { styled } from "styled-components";
import { Item } from "../../components/common/item/Item";
import { ItemProps } from "../../libs/interface/interfaceCommon";

const ItemSection: React.FC<{ itemOptions: ItemProps[] }> = ({ ...props }) => {
  return (
    <ListContainer>
      {props.itemOptions.map((item) => {
        return <Item {...item} />;
      })}
    </ListContainer>
  );
};

export default ItemSection;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
