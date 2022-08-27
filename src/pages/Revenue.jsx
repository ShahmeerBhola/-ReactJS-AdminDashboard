import React from "react";
import Aside from "../components/Aside";
import Dashboardrevenue from "../components/Dashboard-revenue";
import RightSide from "../components/RightSide";
import Layout from "../layout";

const Revenue = () => {
  return (
    <Layout>
      <Aside />
      <Dashboardrevenue />
      <RightSide />
    </Layout>
  );
};

export default Revenue;
