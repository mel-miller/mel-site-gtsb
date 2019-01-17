const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  //create resume page
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: {frontmatter: {pagetype: {eq: "resume"}}}) {
          edges {
            node {
              frontmatter {
                slug
                pagetype
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/templates/resume.js'),
          context: {
            slug: node.frontmatter.slug,
          }
        });
      })
      resolve();
    })
  });


  //create blog post pages

  //create redirects for Netlify site
  const { createRedirect } = actions;
  createRedirect({ fromPath: "https://mel-miller.netlify.com/*", toPath: "https://mel-miller.com/:splat", isPermanent: true, force: true });

}
