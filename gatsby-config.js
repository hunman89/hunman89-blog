module.exports = {
  siteMetadata: {
    siteUrl: "https://hunman89blogmaster.gatsbyjs.io/",
    title: "hunman-blog",
    author: `hunman89`,
    description: `hunman-blog`,
    social: [
      {
        name: `Twitter`,
        url: `https://github.com/hunman89`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/hunman89`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `about`,
        path: `${__dirname}/about`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
