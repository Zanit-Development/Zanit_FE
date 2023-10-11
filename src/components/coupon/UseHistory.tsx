import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import { styled } from "styled-components";
import Button from "../common/button/Button";
import { BUTTON_OPTIONS } from "../../libs/constants/options/options";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UsedCouponList } from "../../libs/interface/interfaceMyCoupon";
import { usedCouponListAPI } from "../../libs/apis/myCoupon";

export const UseHistory = () => {
  const naivgate = useNavigate();

  const backMyCoupon = () => {
    naivgate("/myCoupon");
  };

  const [usedCoupon, setUsedCoupon] = useState<UsedCouponList | null>(null);

  useEffect(() => {
    const myCoupon = async () => {
      const res = await usedCouponListAPI();
      console.log(res);
    };
    myCoupon();
  }, []);

  const data = [
    ["데이터 1-1", "데이터 1-2", "데이터 1-3", "데이터 1-4"],
    ["데이터 2-1", "데이터 2-2", "데이터 2-3", "데이터 2-4"],
    ["데이터 3-1", "데이터 3-2", "데이터 3-3", "데이터 3-4"],
    ["데이터 4-1", "데이터 4-2", "데이터 4-3", "데이터 4-4"],
  ];

  return (
    <Layout>
      <H2>이전 쿠폰 이용 내역</H2>
      <UseHistorySection>
        <UsedTable>
          <thead>
            <tr>
              <th>이용장소</th>
              <th>메뉴명</th>
              <th>이용날짜</th>
              <th>이용시간</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </UsedTable>

        <Button {...BUTTON_OPTIONS.USE_COUPON_HISTORY} onClick={backMyCoupon} />
        <Link to="/stop-subscribe">멤버십 정기 결제 해지하기</Link>
      </UseHistorySection>
    </Layout>
  );
};

const H2 = styled.h2`
  font-family: var(--font--semibold);
  font-size: 20px;
  padding: 20px 20px 16px;
`;

const UseHistorySection = styled.section`
  padding: 20px 23px 47px;

  a {
    display: block;
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: var(--gray500-color);
    text-decoration: underline;
  }
`;

const UsedTable = styled.table`
  width: 100%;
  margin-bottom: 90px;
  text-align: center;
  font-size: 14px;

  thead {
    border-bottom: 1px solid var(--main-color);
    font-family: var(--font--semibold);

    th {
      padding: 5px 0 15px 0;
    }
  }

  td {
    padding-top: 18px;
    line-height: 20px;
  }
`;
