import { styled } from "styled-components";
import addressIcon from "../../../assets/icon/icon_pin.svg";
import timeIcon from "../../../assets/icon/icon_clock.svg";
import cocktailIcon from "../../../assets/icon/icon_cocktail.png";
import arrow from "../../../assets/throughArrow.svg";

export const grayTextWithIcon = styled.span`
  display: block;
  position: relative;
  color: var(--gray500-color);
  font-family: var(--font--Medium);
  font-size: 12px;
  padding: 5px 0 5px 20px;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: 3px;
    left: 0;
  }

  & + span {
    margin-top: 4px;
  }
`;

export const Address = styled(grayTextWithIcon)`
  &::before {
    background: url(${addressIcon}) no-repeat center;
  }
`;

export const Opening = styled(grayTextWithIcon)`
  &::before {
    background: url(${timeIcon}) no-repeat center / contain;
  }
  white-space: pre-line;
`;

export const CoverCharge = styled(grayTextWithIcon)`
  & > span {
    text-decoration: line-through;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 15px;
      height: 12px;
      top: 3px;
      right: -13px;
      background: url(${arrow}) no-repeat right;
    }
  }

  &::before {
    background: url(${cocktailIcon}) no-repeat center / contain;
  }
  strong {
    margin-left: 18px;
  }
`;
