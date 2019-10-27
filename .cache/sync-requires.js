const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-templates-project-jsx": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/src/templates/project.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/src/templates/post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/src/pages/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/src/pages/blog.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/robindalipe/Documents/GitHub/oiloftrop/src/pages/work.js")))
}

