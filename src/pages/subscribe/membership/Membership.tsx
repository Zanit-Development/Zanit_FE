import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
import { css, styled } from "styled-components";
import Button from "../../../components/common/button/Button";
import { BUTTON_EVENT, INPUT_EVENT } from "../../../libs/interface/typeEvent";
import { Link } from "react-router-dom";
import { MEMBERSHIP, membershipOption } from "./membershipOption";
import { MembershipType } from "../../../components/membership/MembershipType";
import { handleMembershipType } from "./handleMembership";

type MEMBERSHIP_TYPE = "TYPE1" | "TYPE2" | "TYPE3";

export const Membership = () => {
  const [membershipType, setMembershipType] = useState<MEMBERSHIP_TYPE>("TYPE1");
  const [isMember, setIsMember] = useState(false);

  return (
    <Layout>
      {isMember ? <StyledH2>쟈닛 멤버십 연장하기</StyledH2> : <StyledH2>쟈닛 멤버십 구독하기</StyledH2>}
      <DescContainer>
        <p>
          <span>{isMember ? "기존 맴버십 만료일을 기준으로 연장됩니다." : "원하는 멤버십을 선택해주세요"}</span>
          <span>쟈닛을 통해 매주 새로운 칵테일 한 잔을 즐겨봐요 &#58;&#41;</span>
          <strong>&#40;*회차 단위는 4주, 28일입니다.&#41;</strong>
        </p>
      </DescContainer>
      <form>
        <MembershipContainer>
          <ul>
            <MembershipType key={"membershipType1"} {...MEMBERSHIP.TYPE1} onChange={(e) => handleMembershipType(e, setMembershipType)} />
            <MembershipType key={"membershipType2"} {...MEMBERSHIP.TYPE2} onChange={(e) => handleMembershipType(e, setMembershipType)} />
            <MembershipType key={"membershipType3"} {...MEMBERSHIP.TYPE3} onChange={(e) => handleMembershipType(e, setMembershipType)} />
          </ul>
          <span>
            쿠폰사용 방법에 관한 자세한 설명은 <Link to={"/"}>여기</Link> 를 참고해주세요
          </span>
        </MembershipContainer>
        <ButtonContainer>
          <Button
            {...membershipOption}
            value={isMember ? "멤버십 연장하기" : "지금 결제하고 구독 시작하기"}
            onClick={function (e: BUTTON_EVENT): void {
              throw new Error("Function not implemented.");
            }}
          ></Button>
        </ButtonContainer>
      </form>
    </Layout>
  );
};

const SectionBase = css`
  padding: 0 20px;
`;

const StyledH2 = styled.h2`
  margin: 20px;
  font-family: var(--font--Bold);
  font-size: 1.125rem;
`;

const DescContainer = styled.section`
  ${SectionBase}

  margin-bottom: 20px;
  font-family: var(--font--Medium);
  font-size: 0.9375rem;
  color: var(--gray400-color);

  & span {
    display: block;
    margin-bottom: 5px;
  }

  & strong {
    text-decoration: underline;
    font-weight: bold;
    color: var(--gray500-color);
  }
`;

const MembershipContainer = styled.section`
  ${SectionBase}
  margin-bottom: 50px;

  & > span {
    font-family: var(--font--Medium);
    font-size: 12px;
    color: var(--gray400-color);
  }

  & a {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.section`
  ${SectionBase}
`;
