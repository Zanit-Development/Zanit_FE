import React from "react";
import Layout from "../layouts/Layout";
import Subscribe from "./subscribe/Subscribe";

export const Home: React.FC = () => {
  return (
    <Layout>
      <Subscribe />
    </Layout>
  );
};
