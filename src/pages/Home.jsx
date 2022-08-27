import React from "react";
import Aside from "../components/Aside";
import Dashboard from "../components/Dashboard";
import RightSide from "../components/RightSide";
import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <Aside />
      <Dashboard />
      <RightSide />
    </Layout>
  );
};

export default Home;
