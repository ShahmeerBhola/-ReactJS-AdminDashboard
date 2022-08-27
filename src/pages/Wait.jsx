import React from "react";
import Aside from "../components/Aside";
import Dashboardwait from "../components/Dashboard-wait";
import RightSide from "../components/RightSide";import Layout from "../layout";


const Wait = () => {
  return (
    <Layout>
      <Aside />
      <Dashboardwait />
      <RightSide />
    </Layout>
  );
};

export default Wait;
