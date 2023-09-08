/**
 * 멤버십 종류
 * name : 멤버십 이름
 * discountper : 할인률
 */

import React from "react";
import { MembershipTypeProps } from "../../libs/interface/interfaceMembership";
import { styled } from "styled-components";

export const MembershipType = ({ ...props }: MembershipTypeProps) => {
  return (
    <li>
      <StyledInput type="radio" name="membership" defaultChecked={props.defaultcheck} {...props} />
      <StyledLabel htmlFor={props.id}>
        <section>
          <Checkbox>
            <div></div>
          </Checkbox>
          <StyledH3>{props.membershipname}</StyledH3>
          {props.discountper ? <DiscountPer>정가 대비 {props.discountper}% 할인</DiscountPer> : null}
        </section>
        <hr />
        <InfoContainer>
          <span>{props.typevariants === "card" ? "신용카드 등록" : "간편결제"}</span>
          <span>{props.typevariants === "card" ? "회차 단위의 정기결제" : `${props.round}회차 분의 멤버십 비용 즉시 결제`}</span>
          <strong>
            {`${props.cost.toLocaleString("en")}원/${props.round}회차`}
            {props.disccost !== "" ? <span>{props.disccost}</span> : null}
          </strong>
        </InfoContainer>
      </StyledLabel>
    </li>
  );
};

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
  background-color: var(--gray100-color);
  border-radius: 4px;
  box-sizing: border-box;
  font-family: var(--font--Medium);
  cursor: pointer;

  & hr {
    width: 100%;
    height: 1px;
    margin: 15px auto;
    background-color: #e8e8e8;
    border: none;
  }
`;

const Checkbox = styled.div`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 1px 5px 0 0;
  border-radius: 50%;
  border: 2px solid var(--gray500-color);
  box-sizing: border-box;
  vertical-align: top;

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 7.5px;
    height: 7.5px;
    border-radius: 50%;
    background-color: var(--gray500-color);
    transform: translate(-50%, -50%);
  }
`;

const StyledInput = styled.input`
  display: none;
  &:checked + label {
    outline: 1px solid var(--main-color);

    & ${Checkbox} {
      border-color: var(--main-color);
      & > div {
        background-color: var(--main-color);
      }
    }
  }
`;

const StyledH3 = styled.h3`
  display: inline-block;
  font-weight: bold;
  font-size: 0.9375rem;
`;

const DiscountPer = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  display: block;
  width: 100px;
  height: 20px;
  background-color: var(--main-color);
  border-radius: 2px;
  font-size: 0.625rem;
  color: white;
  text-align: center;
  line-height: 20px;
`;

const InfoContainer = styled.section`
  position: relative;

  & > span {
    position: relative;
    display: block;
    margin: 7px 0 7px 10px;
    font-size: 0.75rem;
    color: var(--gray400-color);
  }

  & > span::before {
    content: "";
    position: absolute;
    top: 4.5px;
    left: -10px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--gray400-color);
  }

  & > strong {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
    text-align: right;

    & > span {
      display: block;
      margin-top: 5px;
      font-weight: normal;
      font-size: 0.625rem;
    }
  }
`;
