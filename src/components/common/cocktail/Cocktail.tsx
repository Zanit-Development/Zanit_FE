import { styled } from "styled-components";

import { CocktailProps } from "../../../libs/interface/interfaceBarDetail";
import { TagProps } from "../../../libs/interface/interfaceCommon";
import Tag from "../../tag/Tag";

const Cocktail = (props: { info: CocktailProps; idx: number }) => {
  const option = {
    typevariants: "tertiary",
    value: props.info.level,
    tagid: `tag${props.idx}`,
  };
  return (
    <Item>
      <img src={props.info.img} alt="" />
      <Container>
        <div>
          <strong>{props.info.title}</strong>
          <Tag {...(option as TagProps)} />
        </div>
        <p>{props.info.description}</p>
      </Container>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  gap: 10px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 4px;
    margin: 7px 0;
  }
`;

const Container = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;

    strong {
      font-family: var(--font--Bold);
      font-size: 13px;
      line-height: 26px;
    }

    label {
      padding: 2.5px 12px;
      cursor: initial;
    }
  }

  p {
    font-family: var(--font--Regular);
    color: var(--gray500-color);
    font-size: 11px;
    line-height: 16px;
    margin-top: 4px;
    white-space: pre-line;
  }
`;

export default Cocktail;
