module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
};