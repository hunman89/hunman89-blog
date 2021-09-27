import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About Me">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "About" } }) {
      body
    }
  }
`;

export default AboutPage;
