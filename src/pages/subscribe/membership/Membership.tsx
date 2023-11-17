import React, { useState, useRef, useEffect } from "react";
import Layout from "../../../layouts/Layout";
import Button from "../../../components/common/button/Button";
import { css, styled } from "styled-components";
import { Link } from "react-router-dom";
import { MEMBERSHIP, membershipOption } from "./membershipOption";
import { MembershipType } from "../../../components/membership/MembershipType";
import { handleMembershipType } from "./handleMembership";
import { FORM_EVENT } from "../../../libs/interface/typeEvent";
import { userInfoAPI } from "../../../libs/apis/user";
import { user } from "../../../libs/interface/interfaceAPI";
import { Popup } from "./Popup";

export type MEMBERSHIP_TYPE = "TYPE1" | "TYPE2" | "TYPE3";

export const Membership = () => {
  const membershipTypeRef = useRef<MEMBERSHIP_TYPE>("TYPE1");
  const [userInfo, setUserInfo] = useState<user | string>("");
  const [isShowPopup, setIsShowPopup] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const data = (await userInfoAPI()) as user;
      setUserInfo(data);
    };

    getUserData();
    console.log(userInfo);
  }, []);

  const handleSubmit = async (e: FORM_EVENT) => {
    e.preventDefault();
    const type = membershipTypeRef.current;

    if (typeof userInfo === "string") {
      console.log("회원정보없음");
      return;
    }

    if (userInfo.subscribe && userInfo.subscribeName === "X 멤버십") {
      console.log("이미 X멤버십 구독중");
      setIsShowPopup(true);
      return;
    }

    const { userUid, userPhone } = userInfo;

    let bPayUrl;

    switch (type) {
      case "TYPE1":
        bPayUrl = `https://l.bootpay.co.kr/l/X7Ifa8?userUid=${userUid}&userPhone=${userPhone}`;
        break;
      case "TYPE2":
        bPayUrl = `https://l.bootpay.co.kr/l/X7IzOw?userUid=${userUid}&userPhone=${userPhone}`;
        break;
      case "TYPE3":
        bPayUrl = `https://l.bootpay.co.kr/l/X7INUc?userUid=${userUid}&userPhone=${userPhone}`;
        break;
    }

    window.open(bPayUrl);
  };

  return (
    <>
      <Layout>
        {(userInfo as user)?.subscribe ? <StyledH2>쟈닛 멤버십 연장하기</StyledH2> : <StyledH2>쟈닛 멤버십 구독하기</StyledH2>}
        <DescContainer>
          <p>
            <span>{(userInfo as user)?.subscribe ? "기존 맴버십 만료일을 기준으로 연장됩니다." : "원하는 멤버십을 선택해주세요"}</span>
            <span>쟈닛을 통해 매주 새로운 칵테일 한 잔을 즐겨봐요 &#58;&#41;</span>
            <strong>&#40;*회차 단위는 4주, 28일입니다.&#41;</strong>
          </p>
        </DescContainer>
        <form onSubmit={handleSubmit}>
          <MembershipContainer>
            <ul>
              <MembershipType key={"membershipType1"} {...MEMBERSHIP.TYPE1} onChange={(e) => handleMembershipType(e, membershipTypeRef)} />
              <MembershipType key={"membershipType2"} {...MEMBERSHIP.TYPE2} onChange={(e) => handleMembershipType(e, membershipTypeRef)} />
              <MembershipType key={"membershipType3"} {...MEMBERSHIP.TYPE3} onChange={(e) => handleMembershipType(e, membershipTypeRef)} />
            </ul>
            <span>
              쿠폰사용 방법에 관한 자세한 설명은 <Link to={"/"}>여기</Link> 를 참고해주세요
            </span>
          </MembershipContainer>
          <ButtonContainer>
            <Button {...membershipOption} value={(userInfo as user)?.subscribe ? "멤버십 연장하기" : "지금 결제하고 구독 시작하기"}></Button>
          </ButtonContainer>
        </form>
      </Layout>
      {isShowPopup && <Popup setIsShowPopup={setIsShowPopup} />}
    </>
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

  margin-bottom: 30px;
  font-family: var(--font--Medium);
  font-size: 0.9375rem;
  color: var(--gray400-color);

  & span {
    display: block;
    margin-bottom: 10px;
  }

  & strong {
    text-decoration: underline;
    font-weight: bold;
    color: var(--gray500-color);
  }

  & + form {
    margin-bottom: 50px;
  }
`;

const MembershipContainer = styled.section`
  ${SectionBase}
  margin-bottom: 50px;

  ul {
    margin-bottom: 5px;
  }

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
