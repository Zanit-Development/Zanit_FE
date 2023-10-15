import { styled } from "styled-components";

import { TagProps } from "../../../libs/interface/interfaceCommon";
import Tag from "../../tag/Tag";
import { CocktailProps, ManagementCocktailProps } from "../../../libs/interface/interfaceCocktail";

enum recoUserEnum {
  "입문자용",
  "캐주얼드링커용",
  "헤비드링커용",
}

type ITEM_TYPE = "primary" | "secondary";

const Cocktail = (props: { type: ITEM_TYPE; info: CocktailProps | ManagementCocktailProps; idx: number }) => {
  const { cocktailName, cocktailDetail, recoUser } = props?.info;
  let cocktailPicture: string;
  let cocktailPreview: string;

  if (props.type === "primary") {
    cocktailPicture = (props?.info as CocktailProps).cocktailPicture || "";
  } else if (props.type === "secondary") {
    cocktailPreview = (props?.info as ManagementCocktailProps).cocktailPreview || "";
  }

  const option = {
    typevariants: "tertiary",
    value: recoUserEnum[recoUser],
    tagid: `tag${props.idx}`,
  };

  return (
    <Item>
      <img src={props.type === "primary" ? cocktailPicture! : cocktailPreview!} alt="" />
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
    object-fit: cover;
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
