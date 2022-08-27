import React from "react";
import Aside from "../components/Aside";
import Dashboardinventory from "../components/Dashboard-inventory";
import RightSide from "../components/RightSide";
import Layout from "../layout";

const Inventory = () => {
  return (
    <Layout>
      <Aside />
      <Dashboardinventory />
      <RightSide />
    </Layout>
  );
};

export default Inventory;
