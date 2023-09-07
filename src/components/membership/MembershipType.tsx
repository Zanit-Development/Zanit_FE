/**
 * 멤버십 종류
 * name : 멤버십 이름
 * discountper : 할인률
 */

import React from "react";
import { MembershipTypeProps } from "../../libs/interface/interfaceMembership";

export const MembershipType = ({ ...props }: MembershipTypeProps) => {
  return (
    <section>
      <section>
        <input type="radio" name="membership" id={props.id} />
        <label htmlFor={props.id}></label>
        <h3>{props.name}</h3>
        <span>{`정가 대비 ${props.discountper}% 할인`}</span>
      </section>
      <section>
        <span>{props.typevariants === "card" ? "신용카드 등록" : "간편결제"}</span>
        <span>{props.typevariants === "card" ? "회차 단위의 정기결제" : `${props.round}회차 분의 멤버십 비용 즉시 결제`}</span>
        <strong>{`${props.cost}원/${props.round}회차`}</strong>
      </section>
    </section>
  );
};
