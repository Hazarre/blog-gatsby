/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hazarre's Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
     "gatsby-plugin-sharp", 
     "gatsby-remark-prismjs",
     "gatsby-plugin-mdx",
     "gatsby-plugin-netlify",
    {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
],
}
