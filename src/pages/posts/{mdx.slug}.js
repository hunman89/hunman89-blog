import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../../components/layout";

const ContentsList = ({ items }) => {
  return (
    <ul className="pl-3">
      {items.map((item) => {
        return <ContentsItem key={`${item.url}-item`} item={item} />;
      })}
    </ul>
  );
};
const ContentsItem = ({ item }) => (
  <li>
    <Link className=" text-gray-500" to={item.url}>
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
      <p className="p-5 border-b-2 mb-5">{data.mdx.frontmatter.date}</p>
      <article class="prose">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
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
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
