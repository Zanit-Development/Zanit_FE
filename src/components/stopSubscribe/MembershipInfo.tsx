import React from "react";
import { styled } from "styled-components";
import { UserInfoType } from "../../libs/interface/interfaceUserInfo";
import { dateFormat } from "../../libs/utils/dateFormat";
import { membershipPrice } from "../../libs/utils/membershipPrice";
import { priceFormat } from "../../libs/utils/priceFormat";

export const MembershipInfo = ({ userInfo }: { userInfo: UserInfoType }) => {
  return (
    <MembershipInfoCard>
      <InfoHeading>
        <h3>
          {userInfo.subscribeName} <span>&#40;이용중&#41;</span>
        </h3>
        <p>정가 대비 {membershipPrice(userInfo.subscribeName).discount}% 할인</p>
      </InfoHeading>
      <InfoContent>
        <p className="infoContent">
          &#91;{dateFormat(userInfo.subsStartDate)}&#93; &#126; &#91;{dateFormat(userInfo.subsEndDate)}&#93;
        </p>
        <strong>{priceFormat(membershipPrice(userInfo.subscribeName).price)}원/월</strong>
      </InfoContent>
      <ul className="infoContent">
        <li>결제 예정 이용권 : {userInfo.subscribeName}</li>
        <li>다음 결제 예정일 : &#91;{dateFormat(userInfo.subsEndDate)}&#93;</li>
        <li>정기결제 방법 : 구독 시작 시 등록된 신용카드</li>
      </ul>
    </MembershipInfoCard>
  );
};

const MembershipInfoCard = styled.article`
  margin: 20px;
  border: 1px solid var(--main-color);
  border-radius: 8px;
  background-color: var(--gray100-color);
  padding: 16px;

  .infoContent {
    font-family: var(--font--Medium);
    font-size: 12px;
    color: var(--gray500-color);
  }

  ul {
    margin-top: 25px;
    padding-inline-start: 15px;

    li {
      list-style: disc;
      padding: 5px 0;
    }
  }
`;

const InfoHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray300-color);
  padding-bottom: 11px;
  h3 {
    font-family: var(--font--Bold);
    font-size: 15px;
    span {
      font-size: 12px;
      color: var(--main-color);
    }
  }
  p {
    font-family: var(--font--semibold);
    font-size: 10px;
    color: var(--white-color);
    padding: 5px 8px;
    background-color: var(--main-color);
    border-radius: 3px;
  }
`;

const InfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  strong {
    font-size: 15px;
    font-family: var(--font--semibold);
  }
`;
