/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Code Pro`,
          `Poppins\:300,400,400i,700`,
        ],
        display: 'swap'
      }
    },
  ],
  siteMetadata: {
    title: "Portfolio",
    description: "web dev portfolio",
    copyright: "This website is made by Ramunas Nognys",
    contact: "ramunas.nognys@gmail.com",
  },
}
