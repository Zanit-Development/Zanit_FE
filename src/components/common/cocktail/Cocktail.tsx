import { styled } from "styled-components";

import { TagProps } from "../../../libs/interface/interfaceCommon";
import Tag from "../../tag/Tag";
import { CocktailProps } from "../../../libs/interface/interfaceCocktail";

enum recoUserEnum {
  "입문자용",
  "캐주얼드링커용",
  "헤비드링커용",
}

const Cocktail = (props: { info: CocktailProps; idx: number }) => {
  const { cocktailName, cocktailDetail, cocktailPicture, recoUser } = props.info;

  const option = {
    typevariants: "tertiary",
    value: recoUserEnum[recoUser],
    tagid: `tag${props.idx}`,
  };
  return (
    <Item>
      <img src={cocktailPicture} alt="" />
      <Container>
        <div>
          <strong>{cocktailName}</strong>
          <Tag {...(option as TagProps)} />
        </div>
        <p>{cocktailDetail}</p>
      </Container>
    </Item>
  );
};

const Item = styled.div`
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
  flex-grow: 1;
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
