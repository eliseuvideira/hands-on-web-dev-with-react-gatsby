module.exports = {
  siteMetadata: {
    title: 'Starter Blog',
    author: 'Eliseu Videira',
    description: 'A blog that shows you the awesome power of gatsby.',
    social: {
      github: 'eliseuvideira',
    },
    siteUrl: 'http://localhost:9000',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Starter Blog',
        short_name: 'Blog',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'content/assets/cheese-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-168713544-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: '',
        includeInDevelopment: true,
      },
    },
  ],
};
