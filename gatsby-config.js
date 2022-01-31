module.exports = {
  siteMetadata: {
    title: "hunman-blog",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    "gatsby-transformer-sharp",
  ],
};
