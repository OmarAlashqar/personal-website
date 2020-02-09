module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Omar Alashqar | Portfolio`,
    description: `Find out more about me and what we can do together.`,
    author: `Omar Alashqar`,
    email: `oaaalash@uwaterloo.ca`,
    github: `https://github.com/OmarAlashqar`,
    linkedin: `https://www.linkedin.com/in/omaralashqar`,
    // resume: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `omar-alashqar-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#20232a`,
        theme_color: `#20232a`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Caveat`,
          `Scope One`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
      },
    },
  ],
}
