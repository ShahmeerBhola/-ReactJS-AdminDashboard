import React from "react";
import Aside from "../components/Aside";
import RightSide from "../components/RightSide";
import Layout from "../layout";
import DashboardAddticket from "../components/Dashboard-Addticket";

const Addticket = () => {
  return (
    <Layout>
      <Aside />
      <DashboardAddticket />
      <RightSide />
    </Layout>
  );
};

export default Addticket;
