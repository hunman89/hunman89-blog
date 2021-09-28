import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>안녕하세요 개발자 정성훈입니다.</p>
      <StaticImage alt="me" src="../images/me.jpg" />
    </Layout>
  );
};

export default IndexPage;
