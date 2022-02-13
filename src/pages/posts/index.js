import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <Link to={`/posts/${node.slug}`}>
          <article key={node.id} className=" border-2 p-4 m-4 group">
            <h2 className="text-xl font-medium text-gray-700 group-hover:text-gray-800 dark:group-hover:text-white dark:text-gray-400">
              {node.frontmatter.title}
            </h2>
            <p className=" dark:text-slate-300">
              Posted: {node.frontmatter.date}
            </p>
          </article>
        </Link>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
