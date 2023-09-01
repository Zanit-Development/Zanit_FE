import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
import { ManageInfo } from "./ManageInfo";
import { ManageOrder } from "./ManageOrder";
import { styled } from "styled-components";

export type MANAGEMENT_TYPE_VARIANTS = "manageInfo" | "manageOrder";

const BarManagement = () => {
  const [manageType, setManageType] = useState<MANAGEMENT_TYPE_VARIANTS>("manageInfo");

  return (
    <Layout>
      <StyledMenu>
        <input type="radio" name="updateMenu" id="manageInfo" defaultChecked={true} />
        <label htmlFor="manageInfo" onClick={() => setManageType("manageInfo")}>
          정보 관리
        </label>
        <input type="radio" name="updateMenu" id="manageOrder" />
        <label htmlFor="manageOrder" onClick={() => setManageType("manageOrder")}>
          주문 관리
        </label>
      </StyledMenu>
      <section>{manageType === "manageInfo" ? <ManageInfo /> : <ManageOrder />}</section>
    </Layout>
  );
};

const StyledMenu = styled.menu`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 20px;

  & > input {
    display: none;
  }

  & > label {
    margin-right: 20px;
    font-family: var(--font--Bold);
    color: var(--gray200-color);
    cursor: pointer;
  }

  & > input:checked + label {
    border-bottom: 2px solid var(--main-color);
    color: black;
  }
`;

export default BarManagement;
