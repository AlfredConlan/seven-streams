module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "steve", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Seven Streams Retreat Centers", // Site title.
  siteTitleAlt: "Seven Streams Retreat Center", // Alternative site title for SEO.
  siteLogo:
    "/images/Logo.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://pipnsam.com/ssrc/", // Domain of your website without pathPrefix.
  pathPrefix: "/ssrc", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Dedicated to creating and cultivating zen gardens and sustainably constructed architecture in three seasonal locations.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/clouds-dawn-desert.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Steven Miller, M.A.", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  // googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://www.facebook.com/SevenStreamsRC/",
    "https://twitter.com/CenterSeven/",
    "https://www.instagram.com/sevenstreamsretreat/",
    "mailto:7streamsrc@gmail.com"
  ],
  postDefaultCategoryID: "Meditation", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/SevenStreamsRC/",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CenterSeven/",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label:"Instagram",
      url:"https://www.instagram.com/sevenstreamsretreat/",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Email",
      url: "mailto:7streamsrc@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Seven Streams Retreat Centers" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
