/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hazarre's Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        //   default: require.resolve('./src/Layout.tsx'),
        // },
        extensions: ['.mdx', '.md'],
        // workaround: https://github.com/gatsbyjs/gatsby/issues/16422#issuecomment-518985316
        // plugins: [`gatsby-remark-autolink-headers`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-katex`,
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 1035,
          //   },
          // },
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    // "gatsby-remark-prismjs",

  ],
}
