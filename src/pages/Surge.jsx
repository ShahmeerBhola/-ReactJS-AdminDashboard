import React from "react";
import Aside from "../components/Aside";
import Dashboardsurge from "../components/Dashboard-surge";
import RightSide from "../components/RightSide";import Layout from "../layout";


const Surge = () => {
  return (
    <Layout>
      <Aside />
      <Dashboardsurge />
      <RightSide />
    </Layout>
  );
};

export default Surge;
