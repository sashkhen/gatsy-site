module.exports = {
  siteMetadata: {
    title: `App title`,
    description: `App sample`,
    keywords: `sample, something, gatsby`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
