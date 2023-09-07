import React from "react";
import AdminLayout from "../../../layouts/adminLayout/AdminLayout";
import { styled } from "styled-components";
import { OrderProps } from "../../../libs/interface/interfaceManagement";

export const ManageOrder = () => {
  const props: OrderProps = {
    orderlist: [
      {
        name: "진토닉",
        day: "23/07/26,15:36",
      },
      {
        name: "진토닉",
        day: "23/07/26,15:36",
      },
      {
        name: "진토닉",
        day: "23/07/26,15:36",
      },
      {
        name: "진토닉",
        day: "23/07/26,15:36",
      },
    ],
  };

  return (
    <AdminLayout>
      <TableContainer>
        <StyledTable>
          <th>NO.</th>
          <th>메뉴명</th>
          <th>사용날짜</th>
          <th>사용시간</th>
          {props.orderlist.map((item, idx) => {
            const [day, time] = item.day.split(",");

            return (
              <tr>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{day}</td>
                <td>{time}</td>
              </tr>
            );
          })}
        </StyledTable>

        <TotalCount>Total &#58; {props.orderlist.length}잔</TotalCount>
      </TableContainer>
    </AdminLayout>
  );
};

const TableContainer = styled.section`
  padding: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray200-color);
  font-family: var(--font--Medium);
  text-align: center;

  & > th {
    padding: 10px 0;
    border-bottom: 1px solid var(--gray200-color);
    font-weight: bold;
  }

  & td {
    height: 40px;
    line-height: 40px;
  }
`;

const TotalCount = styled.strong`
  margin: 20px;
  font-family: var(--font--Bold);
`;
