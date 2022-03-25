import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../../components/layout";

interface ContentsListProps {
  items: IListItem[];
}

interface ContentsItemProps {
  item: IListItem;
}

interface IListItem {
  url: string;
  title: string;
  items: IListItem[];
}

const ContentsList = ({ items }: ContentsListProps) => {
  return (
    <ul className="pl-3">
      {items.map((item: IListItem) => {
        return <ContentsItem key={`${item.url}-item`} item={item} />;
      })}
    </ul>
  );
};
const ContentsItem = ({ item }: ContentsItemProps) => (
  <li>
    <Link className=" text-gray-500 hover:text-gray-700" to={item.url}>
      {item.title}
    </Link>
    {item.items && item.items.length && (
      <ContentsList key={`${item.url}-list`} items={item.items} />
    )}
  </li>
);

interface BlogPostProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        date: string;
      };
      tableOfContents: { items: IListItem[] };
    };
  };
}

const BlogPost = ({ data }: BlogPostProps) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="p-5 border-b-2 mb-5 dark:text-white">
        {data.mdx.frontmatter.date}
      </p>
      <article className="prose dark:prose-invert">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
      {typeof data.mdx.tableOfContents.items === "undefined" ? null : (
        <div className=" invisible xl:visible fixed right-1/4 top-1/4 h-60 overflow-hidden">
          <h2 className="dark:text-white">Table of Contents</h2>
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
