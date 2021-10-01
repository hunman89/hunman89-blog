module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "hunman-blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `post`,
        path: `${__dirname}/post`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `about`,
        path: `${__dirname}/about`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [ `gatsby-remark-autolink-headers` ],
    plugins: [ `gatsby-remark-autolink-headers` ],
      },
    },
    "gatsby-transformer-sharp",
    
  ],
};
