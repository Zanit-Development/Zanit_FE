import React, { useState } from "react";
import Layout from "../../../layouts/Layout";
import { ManageInfo } from "./ManageInfo";
import { ManageOrder } from "./ManageOrder";

export type MANAGEMENT_TYPE_VARIANTS = "manageInfo" | "manageOrder";

export const BarManagement = () => {
  const [manageType, setManageType] = useState<MANAGEMENT_TYPE_VARIANTS>("manageInfo");

  return (
    <Layout>
      <menu>
        <input type="radio" name="updateMenu" id="manageInfo" />
        <label htmlFor="manageInfo" onClick={() => setManageType("manageInfo")}>
          정보 관리
        </label>
        <input type="radio" name="updateMenu" id="manageOrder" />
        <label htmlFor="manageOrder" onClick={() => setManageType("manageOrder")}>
          주문 관리
        </label>
      </menu>
      <section>{manageType === "manageInfo" ? <ManageInfo /> : <ManageOrder />}</section>
    </Layout>
  );
};
