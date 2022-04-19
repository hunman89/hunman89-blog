import { graphql, Link, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import ContentsTable, { IListItem } from "../../components/contentsTable";
import Layout from "../../components/layout";

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
            <p className="py-2 px-3 sm:p-5 border-b-2 mb-5 dark:text-white">
                {data.mdx.frontmatter.date}
            </p>
            <article className="p-3 prose prose-sm max-w-none sm:prose-lg dark:prose-invert">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </article>
            {typeof data.mdx.tableOfContents.items === "undefined" ? null : (
                <ContentsTable data={data.mdx.tableOfContents.items} />
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
