import { graphql, Link } from "gatsby";
import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const ContentsList = ({ items }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
      {items.map((item) => {
        return <ContentsItem key={`${item.url}-item`} item={item} />;
      })}
    </ul>
  );
};
const ContentsItem = ({ item }) => (
  <li>
    <Link style={{ textDecorationLine: "none", color: "gray" }} to={item.url}>
      {item.title}
    </Link>
    {item.items && item.items.length && (
      <ContentsList key={`${item.url}-list`} items={item.items} />
    )}
  </li>
);

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="pb-5 border-b-2 mb-5">{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {typeof data.mdx.tableOfContents.items === "undefined" ? null : (
        <div
          style={{
            position: "fixed",
            right: "10vw",
            top: "10vw",
            height: "50%",
            overflow: "hidden",
          }}
        >
          <h2>Table of Contents</h2>
          <ContentsList items={data.mdx.tableOfContents.items} />
        </div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      tableOfContents
    }
  }
`;

export default BlogPost;
