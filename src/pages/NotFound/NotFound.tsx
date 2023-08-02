import React from "react";

import { Layout } from "../../layouts/Layout";
import { Page404 } from "../../components/error/Page404";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Page404 />
    </Layout>
  );
};

export default NotFound;
