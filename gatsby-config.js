module.exports = {
  siteMetadata: {
    title: "Personal Site",
    author: "Dominick Agnello"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
     {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter`,
        ],
        display: 'swap'
      }
    }
  ],
};
