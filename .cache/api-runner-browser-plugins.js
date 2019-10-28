module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"robinportfolio"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"robin-dalipe-portfolio","short_name":"rad","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-43687862-1","head":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
