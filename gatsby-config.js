module.exports = {
  siteMetadata: {
    title: `Kolyy`,
    description: `Kolyy`,
    author: `Pau Larrea`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-SE04FQZZ51",
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
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
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `doggipedia`,
        path: `${__dirname}/src/doggipedia`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`es`, `en`],
        defaultLanguage: "es",
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 2000,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kolyy Official`,
        short_name: `Kolyy`,
        start_url: `/`,
        background_color: `#1D1F2A`,
        theme_color: `#FBD872`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
